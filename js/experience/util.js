

MAEVR.Experience.Util = {
	makeSurface: function(params){
		var divisions = params.surface.divisions.split("_");
		var geometry = new THREE.ParametricGeometry( params.surface(), parseInt(divisions[1]), parseInt(divisions[2]) );
		var swirl = new THREE.Mesh( geometry, params.material===undefined?new THREE.MeshNormalMaterial(  ):params.material );

		swirl.material.depthTest = false;
		swirl.material.uniforms['textureColor'].value = params.textureColor;
		swirl.material.uniforms['textureAlpha'].value = params.textureAlpha;
		swirl.material.uniforms['fade'].value = 0;
		swirl.material.uniforms['power'].value = 1;
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
				var getLerp = MAEVR.Experience.Util.FindInOut(time,swirl.animation);

				var value = MAEVR.Experience.Util.Remap(
					getLerp[0],0,1,
					swirl.animation[getLerp[1]][1],
					swirl.animation[getLerp[2]][1]);

				this.setFade(value,1);
			}
		}

		swirl.findInOut = function(time,animationArray){

			var tween = 0;
			var inPoint,outPoint;
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
		
		return swirl;
	},
	FindInOut:function(time,animationArray){
		var tween = 0;
		var inPoint,outPoint;
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
	SmoothStep: function(edge0, edge1,  x)
	{
	    x = clamp((x - edge0)/(edge1 - edge0), 0.0, 1.0); 
	    return x*x*(3 - 2*x);
	}
}


