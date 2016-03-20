"use strict";

var MAEVR = {
  init: function() {

    var scope = this;

    // Init Three.jS

    MAEVR.renderer = new THREE.WebGLRenderer({antialias: true});
    MAEVR.renderer.setPixelRatio(window.devicePixelRatio);

    MAEVR.scene = new THREE.Scene();
    MAEVR.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    
    MAEVR.clock = new THREE.Clock(true);

    // Init VR

    MAEVR.vrControls = new THREE.VRControls(MAEVR.camera);
    MAEVR.vrEffect = new THREE.VREffect(MAEVR.renderer);
      MAEVR.vrEffect.setSize(window.innerWidth, window.innerHeight);

    MAEVR.vrManager = new WebVRManager(MAEVR.renderer, MAEVR.vrEffect, {
      hideButton: false,
      isUndistorted: false
    });

    // Initialize Experience

    MAEVR.Experience.init(0);

    // Add to DOM

    document.body.appendChild(MAEVR.renderer.domElement);
  },

  animate: function(timestamp) {

    MAEVR.vrControls.update();
    MAEVR.vrManager.render(MAEVR.scene, MAEVR.camera, timestamp);

    MAEVR.Experience.animate(timestamp);

    requestAnimationFrame(MAEVR.animate);
  }
}