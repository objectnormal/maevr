"use strict";

var MAEVR = {
  mode: null,
  audio: null,
  startTime: 0,
  elapsedTime: 0,
  serverURL: "maevr.herokuapp.com",
  running: false,
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
        MAEVR.init(MAEVR.Modes.EVENT);
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
        MAEVR.animate();
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
  init: function(mode) {

    var scope = this;
    MAEVR.mode = mode;

    // Init Three.jS

    MAEVR.renderer = new THREE.WebGLRenderer({antialias: true});
    MAEVR.renderer.setPixelRatio(window.devicePixelRatio);

    MAEVR.scene = new THREE.Scene();
    MAEVR.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    MAEVR.camera.position.z = 19;
    MAEVR.clock = new THREE.Clock(true);

    //var sp = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshNormalMaterial());
    //MAEVR.scene.add(sp);
    //sp.position.z = -5;

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

MAEVR.GUI = {
  elapsedDate: null,
  elapsedTimeDiv: null,
  init: function() {
    var scope = this;

    scope.elapseDate = new Date();
    scope.elapsedTimeDiv = document.getElementById("elaspedTime");
  },
  update: function() {
    var scope = this;

    scope.elapseDate.setTime(MAEVR.elapsedTime);
    var timeString = scope.elapseDate.toISOString().substr(11, 8);
    scope.elapsedTimeDiv.innerHTML = timeString;
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
