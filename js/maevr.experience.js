"use strict";

MAEVR.Experience = {
  loaded: false,
  init: function(startTime) {

    // Set Scope

    var scope = this;

    // MAEVR.audio.volume = 0;

    // Create Objects

    var manager = new THREE.LoadingManager();
    manager.onLoad = function() { scope.ready(); }
    var loader = new THREE.TextureLoader(manager);
    
    scope.texCol = loader.load('assets/img/sky_2.jpg', onTextureLoaded);
    scope.texAlpha = loader.load('assets/img/paintStreak_02.png', onTextureLoaded);
    scope.checker = loader.load('assets/img/checker.jpg', onTextureLoaded);

    function onTextureLoaded(texture) {
      console.log("MAEVR.Experience: onTextureLoaded");

      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    }

  },
  ready: function(){
    console.log("MAEVR.Experience: ready");

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
      // MAEVR.scene.add( swirl );
      scope.swirls.push(swirl);
    }
    scope.loaded = true;
  },

  animate: function(timestamp) {

    // Set Scope

    var scope = this;
    if(!scope.loaded) return;
    // else{
    //   console.log("hi");
    // }
    //console.log(MAEVR.elapsedTime);
    for(var i = 0 ; i < Curves.numCurves ; i++){
      scope.swirls[i].offset((i*.3)+.001*MAEVR.elapsedTime*-.02);
      // sc1.swirls[i].setFade(count,1.0);
      // sc1.swirls[i].setCam(camera);
      scope.swirls[i].update(.001*MAEVR.elapsedTime);
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
