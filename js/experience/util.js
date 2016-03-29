

MAEVR.Experience.Util = {
	makeSurface: function(params){

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
		swirl.timeOffsetRandom = ((Math.random()-.5) * shaderInfo[1])/1000;
		swirl.color = new THREE.Vector3(
			(shaderInfo[4]/256)+Math.random()*.2,
			(shaderInfo[5]/256)+Math.random()*.2,
			(shaderInfo[6]/256)+Math.random()*.2);


		swirl.animation = params.surface.animation
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
				if(!swirl.isInScene){
					MAEVR.scene.add(swirl);
					swirl.isInScene = true;
	   			}
				var getLerp = MAEVR.Experience.Util.FindInOut(time+swirl.timeOffsetRandom,swirl.animation);

				var value = MAEVR.Experience.Util.Remap(
					getLerp[0],0,1,
					swirl.animation[getLerp[1]][1],
					swirl.animation[getLerp[2]][1]);

				this.setFade(value,1);
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
	    return x*x*x*(x*(x*6 - 15) + 10);
	}
}


MAEVR.Experience.CamCurves = {};
MAEVR.Experience.CamCurves.camZ = 
[[0, 397],
[40, 17.6],
[10000, 17.6]];

MAEVR.Experience.CamCurves.parentY = 
[[0, 2.8],
[91, 2.8],
[220, 316],
[246, -4.7],
[10000, -4.7]];

MAEVR.Experience.CamCurves.parentRX = 
[[0, 0],
[195, 0],
[221,-Math.PI/2],
[10000,-Math.PI/2]];


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



