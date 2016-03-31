"use strict";

var MAEVR = {
  mode: null,
  audio: null,
  startTime: 0,
  elapsedTime: 0,
  serverURL: "maevr.herokuapp.com",
  playing: false,
  sphere: null,
  init: function() {

    var scope = this;

    // Init Three.jS

    MAEVR.renderer = new THREE.WebGLRenderer({antialias: true});
    MAEVR.renderer.setPixelRatio(window.devicePixelRatio);

    MAEVR.scene = new THREE.Scene();
    MAEVR.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    MAEVR.clock = new THREE.Clock(true);

    MAEVR.camera.position.z = 397;
    MAEVR.parentCamera = new THREE.Object3D();
    MAEVR.parentCamera.position.y = 12;
    MAEVR.parentCamera.add(MAEVR.camera);
    MAEVR.scene.add(MAEVR.parentCamera);
  
    // Init VR

    MAEVR.vrControls = new THREE.VRControls(MAEVR.camera);
    MAEVR.vrEffect = new THREE.VREffect(MAEVR.renderer);
    MAEVR.vrEffect.setSize(window.innerWidth, window.innerHeight);

    MAEVR.vrManager = new WebVRManager(MAEVR.renderer, MAEVR.vrEffect, {
      hideButton: true,
      isUndistorted: false
    });

    // Initialize Events

    MAEVR.Events.init();

    // Initialize GUI

    MAEVR.GUI.init();

    // Initialize Experience

    MAEVR.Experience.init();

    // Init Mode

    if (MAEVR.mode == MAEVR.Modes.EVENT) {
      MAEVR.GUI.showWindow("eventWelcome");
    } else {
      MAEVR.GUI.showWindow("staticWelcome");
    }

    // Add to DOM

    document.body.appendChild(MAEVR.renderer.domElement);
    
  },
  play: function() {
    MAEVR.Experience.play();
    MAEVR.playing = true;
  },
  animate: function(timestamp) {

    var scope = MAEVR;

    // Update Time

    if (MAEVR.playing) {
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

    MAEVR.camera.updateMatrixWorld ();
    MAEVR.vrControls.update();
    MAEVR.vrManager.render(MAEVR.scene, MAEVR.camera, timestamp);

    // Animate experience

    if(MAEVR.Experience.loaded)
      MAEVR.Experience.animate(timestamp);

    // Schedule next frame

    requestAnimationFrame(MAEVR.animate);

  },
  connect: function() {

    // Check for socket support

    if (typeof io != 'undefined') {

      console.log("MAEVR: Attempting Connection");

      // Connect to socket

      var socket = io.connect(MAEVR.serverURL,{});

      socket.io.on('connect_error', function (data) {
        console.log("MAEVR: connect_error");
      });

      socket.io.on('connect_timeout', function (data) {
        console.log("MAEVR: connect_timeout");
      });

      //

      socket.on('connect', function() {
        console.log("MAEVR: connect");

        // Event Mode
        console.log("MAEVR: Event Mode");
      });

      socket.on('error', function(data) {
        console.log("MAEVR: error " + data);
      });

      socket.on('begin', function(data) {
        console.log("MAEVR: begin " + data.currentTime);

        MAEVR.Message.hideMessage();

        MAEVR.startTime = performance.now() - data.currentTime;
        if (!MARVR.playing) MAEVR.play();

      });

      socket.on('end', function(data) {
        console.log("MAEVR: end " + data.currentTime);
      });

    } else {

      // Static Mode
      console.log("MAEVR: Static Mode");
      MAEVR.GUI.showWindow("staticWelcome");

    }

  },
  loadAudio: function() {

      MAEVR.audio = new Audio();
      MAEVR.audio.src = 'assets/audio/track.mp3';
      MAEVR.audio.load();

      MAEVR.audio.oncanplaythrough = function() {
        console.log("MAEVR: oncanplaythrough");

        MAEVR.Message.hideMessage();

        var audioStartTime = 0;

        if (!isNaN(parseInt(window.location.hash.substr(1))) {
          audioStartTime = window.location.hash.substr(1);
        }

        MAEVR.audio.currentTime = audioStartTime;
        MAEVR.audio.play();

        MAEVR.play();
      }

  }
}

//

MAEVR.Events = {
  init: function() {
    window.addEventListener('resize', MAEVR.Events.resize, true);
    window.addEventListener('vrdisplaypresentchange', MAEVR.Events.resize, true);      
  },
  resize: function(e) {
    console.log("RESIZE");
    MAEVR.vrEffect.setSize(window.innerWidth, window.innerHeight);
    MAEVR.camera.aspect = window.innerWidth / window.innerHeight;
    MAEVR.camera.updateProjectionMatrix();
  }
}

// 

MAEVR.Modes = {
  STATIC: 0,
  EVENT: 1
}

//

MAEVR.Message = {
  canvas: null,
  object: null,
  showMessage: function(messageText) {
    
    // Create canvas if needed

    if (this.canvas == null) {
      this.canvas = document.createElement('canvas');
      this.canvas.width  = 256;
      this.canvas.height = 128;   
    }

    // Create container object if neeeded

    if (this.object == null) {
      this.object = new THREE.Object3D();

      var messageTexture = new THREE.Texture(this.canvas);
      messageTexture.needsUpdate = true;

      var messageGeometry =  new THREE.PlaneBufferGeometry(3, 1.5, 1, 1);
      var messageMaterial = new THREE.MeshBasicMaterial({
        map : messageTexture
      });

      var messageMesh = new THREE.Mesh(messageGeometry, messageMaterial);

      this.object.add(messageMesh);
      messageMesh.position.set(0,0,0);

      MAEVR.camera.add(this.object);
      this.object.position.z = -10;

    }

      // Draw Background
      
      var context = this.canvas.getContext("2d");
      context.fillStyle = 'rgba(0,0,0,.5)';
      context.fillRect(0,0,256,128);
      
      context.strokeStyle = 'white';
      context.lineWidth = 2;
      context.strokeRect(1,1,254,126);

      context.fillStyle = "white";
      context.font = "24px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(messageText,this.canvas.width/2, this.canvas.height/2);          

      this.object.traverse( function ( object ) { object.visible = true; } );
  },
  hideMessage: function(text) {
    this.object.traverse( function ( object ) { object.visible = false; } );
  }
}

//

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

//

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
  eventBegin: function() {
    MAEVR.GUI.hideWindow("eventWelcome");
    MAEVR.Message.showMessage("WAITING...");

    if (MAEVR.vrManager.isVRCompatible)
      MAEVR.vrManager.button.setVisibility(true);

    MAEVR.connect();
  },
  staticBegin: function() {
    MAEVR.GUI.hideWindow("staticWelcome");
    MAEVR.Message.showMessage("LOADING...");

    if (MAEVR.vrManager.isVRCompatible)
      MAEVR.vrManager.button.setVisibility(true);

    MAEVR.loadAudio();   
  }
}
