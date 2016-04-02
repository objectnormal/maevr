

MAEVR.Experience.Util = {
	makeSurface: function(params){

		//AtomB_5000_1_2_124_202_247_200_100_1000_100_10
		//name_timeOffset_rampPower_whichTexture_red_green_blue_colorMult_warp_warpSpeed_offsetMult_repeat_saturation

		var nameSplit = params.surface.divisions.split("|");
		var divisions = nameSplit[3].split("_");
		var shaderInfo = nameSplit[2].split("_");
		var geometry = new THREE.ParametricGeometry( params.surface(), parseInt(divisions[1]), parseInt(divisions[2]) );
		var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

		swirl.material.depthTest = false;
		swirl.material.uniforms['textureColor'].value = params.textureColor;
		swirl.material.uniforms['textureAlpha'].value = params.textureAlpha;
		swirl.material.uniforms['fade'].value = 0;
		swirl.material.uniforms['power'].value = 1;

		swirl.whichTexture = shaderInfo[3];
		swirl.rampPower = shaderInfo[2];
		swirl.colorMult = shaderInfo[7];
		swirl.warp = shaderInfo[8];

		swirl.warpSpeed = shaderInfo[9]?shaderInfo[9]:100;
		swirl.offsetMult = shaderInfo[10]?shaderInfo[10]:100;
		swirl.repeat = shaderInfo[11]?shaderInfo[11]:100;
		swirl.saturation = shaderInfo[12]?shaderInfo[12]:20;

		// console.log(swirl.warpSpeed);

		swirl.objName  = shaderInfo[0];

		swirl.timeOffsetRandom = (((Math.random()) * shaderInfo[1])/1000)*30;
		swirl.color = new THREE.Vector3(
			((swirl.colorMult*.01)*shaderInfo[4]/256)+Math.random()*(swirl.saturation*.01),
			((swirl.colorMult*.01)*shaderInfo[5]/256)+Math.random()*(swirl.saturation*.01),
			((swirl.colorMult*.01)*shaderInfo[6]/256)+Math.random()*(swirl.saturation*.01));


		swirl.animation = params.surface.animation
		for(var i = 0 ; i < swirl.animation.length ; i++){
			swirl.animation[i][0]+=swirl.timeOffsetRandom;
		}
		swirl.inPoint = swirl.animation[0][0];
		swirl.outPoint = swirl.animation[swirl.animation.length-1][0];

		swirl.isInScene = false;

		swirl.update = function(time){

			if(time<swirl.inPoint || time>swirl.outPoint && swirl.visible){
				if(swirl.isInScene){
	   				MAEVR.scene.remove( swirl );
	   				swirl.isInScene = false;
	   			}
			}
			else if(time>swirl.inPoint && time<swirl.outPoint){

				var getLerp = MAEVR.Experience.Util.FindInOut(time,swirl.animation);

				var value = MAEVR.Experience.Util.Remap(
					getLerp[0],0,1,
					swirl.animation[getLerp[1]][1],
					swirl.animation[getLerp[2]][1]);

				if(value > -1 && value < 1){
					this.setFade(value,swirl.rampPower);

					if(!swirl.isInScene){
						MAEVR.scene.add(swirl);
						swirl.isInScene = true;
		   			}
		   		}
		   		else{
		   			if(swirl.isInScene){
		   				MAEVR.scene.remove( swirl );
		   				swirl.isInScene = false;
		   			}
		   		}
				
			}
		}

		swirl.setCam = function(cam){
			this.material.uniforms['camMat'].value = cam.matrixWorld;
		}

		swirl.offset = function(offset){
			this.material.uniforms['offset'].value = offset;
		}

		swirl.setFade = function(fade,power){
			this.material.uniforms['fade'].value = fade;
			this.material.uniforms['power'].value = power;
		}

		swirl.setUniform = function(uniform,value){
			swirl.material.uniforms[uniform].value = value;
		}

		swirl.setColor = function(value){
			var thisTexture = "Color" + swirl.whichTexture;
			swirl.material.uniforms[thisTexture].value = value;
		}

		swirl.setColor(swirl.color);
		swirl.setUniform("warp",swirl.warp);
		swirl.setUniform("warpSpeed",swirl.warpSpeed);
		swirl.setUniform("repeat",swirl.repeat);
		swirl.setUniform("offsetMult",swirl.offsetMult);

		return swirl;
	},

	FindInOut:function(time,animationArray){
		var tween = 0;
		var inPoint = outPoint = 0;
		for(var i = 1 ; i < animationArray.length ; i++){

			var b = animationArray[i][0];
			var bVal = animationArray[i][1];

			var a = animationArray[i-1][0];
			var aVal = animationArray[i-1][a];

			if(time<b && time>a){
				tween = 1-((b-time)/(b-a));
				inPoint = i-1;
				outPoint = i;
			}
		}
		return [tween,inPoint,outPoint];
	},
	Remap: function  (value,  from1,  to1,  from2,  to2) {
		return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
	},
	SmoothStep: function(x) //actually smootherstep
	{
	    // return x*x*x*(x*(x*6 - 15) + 10);
	    return x*x*(3 - 2*x);
	}
}


MAEVR.Experience.CamCurves = {};
MAEVR.Experience.CamCurves.camZ = 
[[0, 397],
[80, 17.6],
[10000, 17.6]];

MAEVR.Experience.CamCurves.parentY = 
[[0, 2.8],
[75, 2.8],
[240, 316],
[255, -4.7],
[10000, -4.7]];

MAEVR.Experience.CamCurves.parentRX = 
[[0, 0],
[195, 0],
[240,-Math.PI/2],
[10000,-Math.PI/2]];

MAEVR.Experience.CamCurves.intro = 
[[0,0],[3,1],[5,1],[8,0]];

MAEVR.Experience.CamCurves.outro = 
[[253,0],[256,1],[10000,1]];

MAEVR.Experience.CamCurves.checkFadeStatus = function(time){
	var c1 = MAEVR.Experience.CamCurves.intro;
	var c2 = MAEVR.Experience.CamCurves.outro;
	// console.log(c1[c1.length-1][0]);
	if(time>c1[c1.length-1][0] && time < c2[0][0])
		return false;
	else
		return true;
}


/*
MAEVR.Experience.Util.Align = function(camera, controls) {

	THREE.VRControls.deviceQuaternion = new THREE.Quaternion();
	THREE.VRControls.alignQuaternion = new THREE.Quaternion();
	THREE.VRControls.finalQuaternion = new THREE.Quaternion();

	var worldcenter = new THREE.Vector3();
	var tempQuaternion = new THREE.Quaternion();
	var tempVector3 = new THREE.Vector3();
	var tempMatrix4 = new THREE.Matrix4();
	var tempEuler = new THREE.Euler();
	var up = new THREE.Vector3(0, 1, 0);

	tempVector3.copy( camera.position ).applyQuaternion( tempQuaternion.copy( controls.deviceQuaternion ).inverse(), 'ZXY' );

	tempEuler.setFromQuaternion(
		tempQuaternion.setFromRotationMatrix(
			tempMatrix4.lookAt(tempVector3, worldcenter, up)
		)
	);

	// var ttt = tempEuler.y + Math.PI;
	tempEuler.set(0, tempEuler.y, 0);
	controls.alignQuaternion.setFromEuler(tempEuler);

	console.log("re-align!");
}
*/



