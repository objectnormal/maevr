"use strict";

MAEVR.Experience = {

  init: function(startTime) {

    // Set Scope

    var scope = this;

    // Create Objects

    var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var material = new THREE.MeshNormalMaterial();
    scope.cube = new THREE.Mesh(geometry, material);
    
    scope.cube.position.z = -1;
    MAEVR.scene.add(scope.cube);

  },

  animate: function(timestamp) {

    // Set Scope

    var scope = this;

    // Animate Objects

    scope.cube.rotation.y += MAEVR.clock.getDelta();

  }

}