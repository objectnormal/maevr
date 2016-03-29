"use strict";

MAEVR.Experience = {
  loaded: false,
  init: function() {

    var scope = this;

    var manager = new THREE.LoadingManager();
    manager.onLoad = function() { 
      for(var i = 0 ; i < Curves.numCurves ;i++){
        // console.log(Curves[i+""]);
    }scope.ready(); }
    var loader = new THREE.TextureLoader(manager);
    
    scope.texCol = loader.load('assets/img/dots.jpg', onTextureLoaded);
    scope.texAlpha = loader.load('assets/img/paintStreak_02.png', onTextureLoaded);
    scope.checker = loader.load('assets/img/checker.jpg', onTextureLoaded);
    scope.rgb = loader.load('assets/img/sky_RGB.png', onTextureLoaded);

    function onTextureLoaded(texture) {
      console.log("MAEVR.Experience: onTextureLoaded");

      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    }

    scope.time = 0;
    scope.timeMultiplier = 3;

    scope.sky = new THREE.Mesh(new THREE.SphereGeometry(500),simpleMat5);
    scope.sky.material.uniforms['map'].value = scope.texCol;
    scope.sky.material.uniforms['map2'].value = scope.rgb;
    scope.sky.material.side = THREE.BackSide;
    MAEVR.scene.add(scope.sky);

    scope.tempTime = 0;
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
      scope.swirls.push(swirl);
    }
    scope.loaded = true;


  },

  play: function() {
    console.log("MAEVR.Experience: play");
  },

  animate: function(timestamp) {
    var scope = this;
    if(!scope.loaded) return;

    for(var i = 0 ; i < Curves.numCurves ; i++){
      scope.swirls[i].offset((i*.3)+scope.timeMultiplier*.01*MAEVR.elapsedTime*-.02);
      scope.swirls[i].setCam(MAEVR.camera);
      scope.swirls[i].update(scope.timeMultiplier*(MAEVR.elapsedTime/1000)*30);
    }

    scope.sky.material.uniforms['offset'].value = MAEVR.elapsedTime/100000;
    scope.updateCamera();
    // console.log(MAEVR.elapsedTime);
    if(scope.tempTime+MAEVR.elapsedTime>1000){
      console.log((MAEVR.elapsedTime/1000)*30,MAEVR.parentCamera.position.y);
      scope.tempTime-=1000;
    }
  },

  updateCamera: function(){

    var scope = this;

    var getLerp = MAEVR.Experience.Util.FindInOut(
      .001*MAEVR.elapsedTime*scope.timeMultiplier,MAEVR.Experience.CamCurves.camZ);
    var value = MAEVR.Experience.Util.Remap(
      MAEVR.Experience.Util.SmoothStep(getLerp[0]),0,1,
      MAEVR.Experience.CamCurves.camZ[getLerp[1]][1],
      MAEVR.Experience.CamCurves.camZ[getLerp[2]][1]);

    MAEVR.camera.position.z = value;

    getLerp = MAEVR.Experience.Util.FindInOut(
      .001*MAEVR.elapsedTime*scope.timeMultiplier,MAEVR.Experience.CamCurves.parentY);
    value = MAEVR.Experience.Util.Remap(
      MAEVR.Experience.Util.SmoothStep(getLerp[0]),0,1,
      MAEVR.Experience.CamCurves.parentY[getLerp[1]][1],
      MAEVR.Experience.CamCurves.parentY[getLerp[2]][1]);

     MAEVR.parentCamera.position.y = value;

    getLerp = MAEVR.Experience.Util.FindInOut(
      .001*MAEVR.elapsedTime*scope.timeMultiplier,MAEVR.Experience.CamCurves.parentRX);
    value = MAEVR.Experience.Util.Remap(
      MAEVR.Experience.Util.SmoothStep(getLerp[0]),0,1,
      MAEVR.Experience.CamCurves.parentRX[getLerp[1]][1],
      MAEVR.Experience.CamCurves.parentRX[getLerp[2]][1]);

     MAEVR.parentCamera.rotation.x = value;

  }

}
