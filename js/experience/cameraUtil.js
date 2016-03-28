
CamUtil = {
	align: function(camera, controls) {

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
	},
	setParentCam: function(camera, params) {
		// params: camKeyTimes, camKeyPositions,

		var parentCam = new THREE.Object3D();
		parentCam.add( camera );
		parentCam.position.copy( params.startPosition );
		MAEVR.scene.add( parentCam );

		parentCam.cameraSpeed = params.cameraSpeed;

		var camKeyTimes = params.camKeyTimes;
		for(var i=0; i<camKeyTimes.length; i++){
		  camKeyTimes[i] = Math.floor((camKeyTimes[i]/30)*1000/params.cameraSpeed);
		}

		parentCam.camKeyTimes = camKeyTimes;

		parentCam.createCamTween = function( _newPos, _duration ) {
			new TWEEN.Tween( parentCam.children[0].position )
			.to( {x: _newPos.x, y: _newPos.y, z: _newPos.z}, _duration )
			.easing( TWEEN.Easing.Quadratic.InOut )
			.start();
		};

		parentCam.createParentCamTween = function( _newPos, _duration ) {
			new TWEEN.Tween( parentCam.position )
			.to( {x: _newPos.x, y: _newPos.y, z: _newPos.z}, _duration )
			.easing( TWEEN.Easing.Quadratic.InOut )
			.start();
		};

		return parentCam;
	},
	startCameraAnimationSeries: function( parentCam ) {

		// move forward
		new TWEEN.Tween( parentCam.children[0].position )
		.to( {z: 17}, Math.floor( (1200/30)*(1000/parentCam.cameraSpeed) ) )
		.easing( TWEEN.Easing.Quadratic.InOut )
		.start();
		console.log("camera moves forward");


		// wait for a while
		setTimeout(function(){

			// move up
			new TWEEN.Tween( parentCam.position )
			.to({y: 325}, parentCam.camKeyTimes[3]-parentCam.camKeyTimes[1])
			.easing( TWEEN.Easing.Quadratic.InOut )
			.onComplete(function(){

				// wait for a while
				setTimeout(function(){

					// move down
					new TWEEN.Tween( parentCam.position )
					.to( {y: -4.7}, parentCam.camKeyTimes[6]-parentCam.camKeyTimes[5] )
					.easing( TWEEN.Easing.Quadratic.InOut )
					.start();
					console.log("camera moves down");

				}, parentCam.camKeyTimes[5]-parentCam.camKeyTimes[3]);
			})
			.start();
			console.log("camera moves up");

			// wait for a while
			setTimeout(function(){

				// rotate/look down
				new TWEEN.Tween( parentCam.rotation )
				.to( {x: -Math.PI/2}, parentCam.camKeyTimes[4]-parentCam.camKeyTimes[2] )
				.easing( TWEEN.Easing.Quadratic.InOut )
				.start();
				console.log("camera rotates and looks down");

			}, parentCam.camKeyTimes[2]-parentCam.camKeyTimes[1] );

		}, parentCam.camKeyTimes[1]);
	}
};