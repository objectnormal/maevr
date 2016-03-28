/**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 */

THREE.VRControls = function ( object, onError ) {

	var scope = this;

	var vrInputs = [];

	//
	this.worldCenter = new THREE.Vector3(0,0,0);
	var quaternionPublic = new THREE.Quaternion();
	var alignQuaternion = new THREE.Quaternion();
	var finalQ = new THREE.Quaternion();
	var up = new THREE.Vector3(0, 1, 0);
	//

	this.superCam = new THREE.Object3D();
	this.superCam.add( object );
	this.superCam.position.y = 12.2;
	scene.add( scope.superCam );	// AHHHHHHH damn it
	// console.log( scope.superCam.children[0] );

	function filterInvalidDevices( devices ) {

		// Exclude Cardboard position sensor if Oculus exists.

		var oculusDevices = devices.filter( function ( device ) {

			return device.deviceName.toLowerCase().indexOf( 'oculus' ) !== - 1;

		} );

		if ( oculusDevices.length >= 1 ) {

			return devices.filter( function ( device ) {

				return device.deviceName.toLowerCase().indexOf( 'cardboard' ) === - 1;

			} );

		} else {

			return devices;

		}

	}

	function gotVRDevices( devices ) {

		devices = filterInvalidDevices( devices );

		for ( var i = 0; i < devices.length; i ++ ) {

			if ( devices[ i ] instanceof PositionSensorVRDevice ) {

				vrInputs.push( devices[ i ] );

			}

		}

		if ( onError ) onError( 'HMD not available' );

	}

	if ( navigator.getVRDevices ) {

		navigator.getVRDevices().then( gotVRDevices );

	}

	// the Rift SDK returns the position in meters
	// this scale factor allows the user to define how meters
	// are converted to scene units.

	this.scale = 1;

	this.update = function () {

		for ( var i = 0; i < vrInputs.length; i ++ ) {

			var vrInput = vrInputs[ i ];

			var state = vrInput.getState();

			if ( state.orientation !== null ) {

				quaternionPublic.copy( state.orientation );

				finalQ.copy( alignQuaternion );
				finalQ.multiply( quaternionPublic );

				// v.1
				// object.quaternion.copy( finalQ );

				// v.2
				scope.superCam.children[0].quaternion.copy( finalQ );

				// v.0
				// object.quaternion.copy( state.orientation );

			}

			if ( state.position !== null ) {

				// object.position.copy( state.position ).multiplyScalar( scope.scale );
				scope.superCam.children[0].position.copy( state.position ).multiplyScalar( scope.scale );

			}

		}

	};

	this.resetSensor = function () {

		for ( var i = 0; i < vrInputs.length; i ++ ) {

			var vrInput = vrInputs[ i ];

			if ( vrInput.resetSensor !== undefined ) {

				vrInput.resetSensor();

			} else if ( vrInput.zeroSensor !== undefined ) {

				vrInput.zeroSensor();

			}

		}

	};

	this.zeroSensor = function () {

		console.warn( 'THREE.VRControls: .zeroSensor() is now .resetSensor().' );
		this.resetSensor();

	};

	this.dispose = function () {

		vrInputs = [];

	};

	this.align = function () {

		var tempQuaternion = new THREE.Quaternion();
		var tempVector3 = new THREE.Vector3();
		var tempMatrix4 = new THREE.Matrix4();
		var tempEuler = new THREE.Euler();

		// scope.superCam.children[0]
		// tempVector3.copy(object.position).applyQuaternion( tempQuaternion.copy( quaternionPublic ).inverse(), 'ZXY' );
		tempVector3.copy( scope.superCam.children[0].position ).applyQuaternion( tempQuaternion.copy( quaternionPublic ).inverse(), 'ZXY' );

		tempEuler.setFromQuaternion(
			tempQuaternion.setFromRotationMatrix(
				tempMatrix4.lookAt(tempVector3, scope.worldCenter, up)
			)
		);

		// var ttt = tempEuler.y + Math.PI;
		var ttt = tempEuler.y;
		tempEuler.set(0, ttt, 0);
		alignQuaternion.setFromEuler(tempEuler);

		// console.log(ttt);
		console.log("aligneddd!");
	};

	// ----------------------------
	// TWEEN ANIMATION!!!
	// ----------------------------
	var xAxis = new THREE.Vector3(1,0,0);
	var yAxis = new THREE.Vector3(0,1,0);
	var zAxis = new THREE.Vector3(0,0,1);

	this.createTweenForSuperMove = function( _newPos, _time ){
		new TWEEN.Tween( scope.superCam.position )
			.to( {x: _newPos.x, y: _newPos.y, z: _newPos.z}, _time )
			.easing( TWEEN.Easing.Quadratic.InOut )
			// .onUpdate(function(){
			// 	console.log( scope.superCam.children[0].position );
			// })
			.start();
	};
	this.createTweenForMove = function( _newPos, _time ){
		new TWEEN.Tween( scope.superCam.children[0].position )
			.to( {x: _newPos.x, y: _newPos.y, z: _newPos.z}, _time )
			.easing( TWEEN.Easing.Quadratic.InOut )
			// .onUpdate(function(){
			// 	console.log( scope.superCam.children[0].position );
			// })
			.start();
	};

};
