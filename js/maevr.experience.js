"use strict";

MAEVR.Experience = {
  loaded: false,
  init: function() {

    // Set Scope

    var scope = this;

    

    // Create Objects

    var manager = new THREE.LoadingManager();
    manager.onLoad = function() { scope.ready(); }
    var loader = new THREE.TextureLoader(manager);
    
    scope.texCol = loader.load('assets/img/sky_2.jpg', onTextureLoaded);
    scope.texAlpha = loader.load('assets/img/paintStreak_02.png', onTextureLoaded);
    scope.checker = loader.load('assets/img/checker.jpg', onTextureLoaded);
    scope.rgb = loader.load('assets/img/sky_RGB.png', onTextureLoaded);

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
      var material = facingMat3.clone();//new THREE.MeshBasicMaterial( {map:texture} );//
      var swirl = MAEVR.Experience.Util.makeSurface({
        surface:Curves[i+""],
        material:material,
        textureColor:scope.rgb,
        textureAlpha:scope.texAlpha
      });
      swirl.position.set( 0, 0, -5);
      swirl.material.side = THREE.DoubleSide;
      // swirl.setUniform("Color2",new THREE.Vector3(Math.random(),Math.random(),Math.random()));
       swirl.setUniform("Color1",new THREE.Vector3(Math.random(),Math.random(),Math.random()));
        swirl.setUniform("Color2",new THREE.Vector3(Math.random(),Math.random(),Math.random()));
         // swirl.setUniform("Color3",new THREE.Vector3(Math.random(),Math.random(),Math.random()));
      // swirl.scale.multiplyScalar( 1 );
      // MAEVR.scene.add( swirl );
      scope.swirls.push(swirl);
    }
    scope.loaded = true;
    MAEVR.camera.rotation.y=180;
        MAEVR.camera.position.z = 10;


  },
  play: function() {
    console.log("MAEVR.Experience: play");
  },
  animate: function(timestamp) {
     // MAEVR.audio.volume = 0;
    // Set Scope
    MAEVR.camera.position.y = MAEVR.elapsedTime*.0001;
    var scope = this;
    if(!scope.loaded) return;
    // else{
    //   console.log("hi");
    // }
    //console.log(MAEVR.elapsedTime);
    for(var i = 0 ; i < Curves.numCurves ; i++){
      scope.swirls[i].offset((i*.3)+.001*MAEVR.elapsedTime*-.02);
      // sc1.swirls[i].setFade(count,1.0);
      scope.swirls[i].setCam(MAEVR.camera);
      scope.swirls[i].update(.001*MAEVR.elapsedTime);
    }

  },

  updateCamera: function(){


  }

}
