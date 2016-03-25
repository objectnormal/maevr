"use strict";

var MAEVR = {
  mode: null,
  audio: null,
  startTime: 0,
  elapsedTime: 0,
  serverURL: "maevr.herokuapp.com",
  running: false,
  sphere: null,
  connect: function() {

    // Check for socket support

    if (typeof io != 'undefined') {
      
      console.log("MAEVR: Attempting Connection");

      // Connect to socket

      var socket = io.connect(MAEVR.serverURL,
        {
          reconnection: false,
          timeout : 5000 
        });

      socket.io.on('connect_error', function (data) {
        console.log("MAEVR: connect_error");

        // Static Mode
        console.log("MAEVR: Static Mode");
        MAEVR.GUI.showWindow("staticWait");       

      });

      socket.io.on('connect_timeout', function (data) {
        console.log("MAEVR: connect_timeout");

        // Static Mode
        console.log("MAEVR: Static Mode");
        MAEVR.GUI.showWindow("staticWait");       

      });

      //

      socket.on('connect', function() {
        console.log("MAEVR: connect");

        // Event Mode        
        console.log("MAEVR: Event Mode");
        MAEVR.GUI.showWindow("eventWait");
      });

      socket.on('error', function(data) {
        console.log("MAEVR: error " + data);

        // Static Mode
        console.log("MAEVR: Static Mode");
        MAEVR.GUI.showWindow("staticWait");

      });      

      socket.on('begin', function(data) {
        console.log("MAEVR: begin " + data.currentTime);

        MAEVR.startTime = performance.now() - data.currentTime;
        MAEVR.running = true;

        MAEVR.GUI.hideWindow("eventWait");
      });

      socket.on('end', function(data) {
        console.log("MAEVR: end " + data.currentTime);
      });      

    } else {

      // Static Mode
      console.log("MAEVR: Static Mode");
      MAEVR.GUI.showWindow("staticWait");

    }

  },
  init: function() {

    var scope = this;

    // Init Three.jS

    MAEVR.renderer = new THREE.WebGLRenderer({antialias: true});
    MAEVR.renderer.setPixelRatio(window.devicePixelRatio);

    MAEVR.scene = new THREE.Scene();
    MAEVR.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    MAEVR.camera.position.z = -25;
    MAEVR.clock = new THREE.Clock(true);

    // Test Sphere

    // scope.sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), new THREE.MeshNormalMaterial());
    // MAEVR.scene.add(scope.sphere);
    // scope.sphere.position.z = -30;

    // Init VR

    MAEVR.vrControls = new THREE.VRControls(MAEVR.camera);
    MAEVR.vrEffect = new THREE.VREffect(MAEVR.renderer);
    MAEVR.vrEffect.setSize(window.innerWidth, window.innerHeight);

    MAEVR.vrManager = new WebVRManager(MAEVR.renderer, MAEVR.vrEffect, {
      hideButton: false,
      isUndistorted: false
    });

    // Initialize GUI

    MAEVR.GUI.init();

    // Initialize Experience

    MAEVR.Experience.init(0);

    // Add to DOM

    document.body.appendChild(MAEVR.renderer.domElement);
    
  },
  animate: function(timestamp) {

    var scope = MAEVR;

    // Update Time

    if (MAEVR.running) {
      if (MAEVR.mode == MAEVR.Modes.EVENT) {
        MAEVR.elapsedTime = performance.now() - MAEVR.startTime;
      } else {
        MAEVR.elapsedTime = MAEVR.audio.currentTime * 1000;
      }
    } else {
      MAEVR.elapsedTime = 0;
    }

    // Animate Test Sphere
    
    // var scale = .1 + MAEVR.Stems.getStemValue(0);
    // scope.sphere.scale.set( scale, scale, scale );

    // Update GUI

    MAEVR.GUI.update();

    // Update VR

    MAEVR.vrControls.update();
    MAEVR.vrManager.render(MAEVR.scene, MAEVR.camera, timestamp);

    // Animate experience

    if(MAEVR.Experience.loaded)
      MAEVR.Experience.animate(timestamp);

    // Schedule next frame

    requestAnimationFrame(MAEVR.animate);

  },
  loadAudio: function() {

      MAEVR.audio = new Audio();
      MAEVR.audio.src = 'assets/audio/track.mp3';
      MAEVR.audio.load();

      MAEVR.audio.oncanplaythrough = function() {
        console.log("MAEVR: oncanplaythrough");

        MAEVR.GUI.hideWindow("staticLoad");
        MAEVR.audio.play();

        MAEVR.running = true;
      }

  }
}

// 

MAEVR.Modes = {
  STATIC: 0,
  EVENT: 1
}

MAEVR.Stems = {
  chunkCount: 30,
  getStemValue: function(stemIndex) {

    if (stemIndex >= stems.length) return null;
    if (MAEVR.elapsedTime == 0) return 0;

    var stem = stems[stemIndex];
    var sampleIndex = (MAEVR.elapsedTime / 1000) * this.chunkCount;

    var previousIndex = Math.floor(sampleIndex);
    var nextIndex = Math.ceil(sampleIndex);

    var progress = sampleIndex % Math.floor(sampleIndex);

    var previousValue = stem[previousIndex];
    var nextValue = stem[nextIndex];

    var lerpValue =  previousValue + progress * (nextValue - previousValue);

    return lerpValue;
  }
}

MAEVR.GUI = {
  elapsedDate: null,
  elapsedTimeDiv: null,
  meterBarDiv: null,
  init: function() {
    var scope = this;

    scope.elapseDate = new Date();
    scope.elapsedTimeDiv = document.getElementById("elaspedTime");
    scope.meterBarDiv = document.getElementById("meterBar");
  },
  update: function() {
    var scope = this;

    // Time

    scope.elapseDate.setTime(MAEVR.elapsedTime);
    var timeString = scope.elapseDate.toISOString().substr(11, 8);
    scope.elapsedTimeDiv.innerHTML = timeString;

    // Meter
    
    scope.meterBarDiv.style.width = (MAEVR.Stems.getStemValue(0) * 100) + "%";

  },
  showWindow: function(windowName){
    document.getElementById(windowName).style.display = 'initial';
  },
  hideWindow: function(windowName){
    document.getElementById(windowName).style.display = 'none';
  },
  staticBegin: function() {
    MAEVR.GUI.hideWindow("staticWait");
    MAEVR.GUI.showWindow("staticLoad"); 

    MAEVR.loadAudio();   
  }
}
