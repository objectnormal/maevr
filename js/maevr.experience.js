"use strict";

MAEVR.Experience = {

  init: function(startTime) {

    // Set Scope

    var scope = this;

    // Create Objects

    // var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    // var material = new THREE.MeshNormalMaterial();
    // scope.cube = new THREE.Mesh(geometry, material);
    
    // scope.cube.position.z = -1;
    // MAEVR.scene.add(scope.cube);


    var loader = new THREE.TextureLoader();
    scope.texCol = loader.load('assets/img/sky_2.jpg', onTextureLoaded);
    scope.texAlpha = loader.load('assets/img/paintStreak_02.png', onTextureLoaded);
    scope.checker = loader.load('assets/img/checker.jpg', onTextureLoaded);
    var loading = 0;
    scope.loaded = false;

    function onTextureLoaded(texture) {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      loading++;
      if(loading>1){
            scope.setup();
      }
    }

  },

  setup: function(){
    var scope = this;
    scope.swirls = [];
    for(var i = 0 ; i < Curves.numCurves ; i++){
      var material = facingMat2.clone();//new THREE.MeshBasicMaterial( {map:texture} );//
      var swirl = MAEVR.Experience.Util.makeSurface({
        surface:Curves[i+""],
        material:material,
        textureColor:scope.texCol,
        textureAlpha:scope.texAlpha
      });
      swirl.position.set( 0, 0, -5);
      swirl.material.side = THREE.DoubleSide;
      // swirl.scale.multiplyScalar( 1 );
      // scene.add( swirl );
      scope.swirls.push(swirl);
    }

  },

  animate: function(timestamp) {

    // Set Scope

    var scope = this;

    // Animate Objects

    if (scope.swirls.length > 0) {
      for(var i = 0 ; i < Curves.numCurves ; i++){
        scope.swirls[i].offset((i*.3)+MAEVR.clock.getElapsedTime()*-.02);
        // sc1.swirls[i].setFade(count,1.0);
        // sc1.swirls[i].setCam(camera);
        scope.swirls[i].update(MAEVR.clock.getElapsedTime());
      }
    }


  }

}




// function setupModel(){
//   var loader = new THREE.OBJLoader( manager );
//   loader.load( 'obj/curveTest.obj', function ( object ) {

//     // object.traverse( function ( child ) {

//     //   if ( child instanceof THREE.Mesh ) {

//     //     child.material.map = texture;

//     //   }

//     // } );
//     object.material = new THREE.MeshBasicMaterial( );
//     console.log("p888888999999");
//     object.position.z = - 1;
//     // scene.add( object );
//     swirl = object.children[0];
//     sc1.setup();
//   } );
// }


// var lastRender = 0;
// function animate(timestamp) {
//   var delta = Math.min(timestamp - lastRender, 500);
//   lastRender = timestamp;

//   // Apply rotation to cube mesh
//   cube.rotation.y += delta * 0.0006;

//   // Update VR headset position and apply to camera.
//   controls.update();

//   // Render the scene through the manager.
//   manager.render(scene, camera, timestamp);

//   requestAnimationFrame(animate);
//   if(loaded)
//   sc1.draw(lastRender*.001);
// }
