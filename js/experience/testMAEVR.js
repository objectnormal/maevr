
var renderer = new THREE.WebGLRenderer({antialias: false});
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
var controls = new THREE.VRControls(camera);
var effect = new THREE.VREffect(renderer);
effect.scale = new THREE.Vector3(5,5,5);
effect.setSize(window.innerWidth, window.innerHeight);



var loader = new THREE.TextureLoader();
var texCol = loader.load('img/sky_2.jpg', onTextureLoaded);
var texAlpha = loader.load('img/paintStreak_02.png', onTextureLoaded);
var checker = loader.load('img/checker.jpg', onTextureLoaded);
var swirl;
var loading = 0;
var loaded = false;

function onTextureLoaded(texture) {
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  loading++;
  if(loading>1){
    // setupModel();
        sc1.setup();

    
  }
}

function setupModel(){
  var loader = new THREE.OBJLoader( manager );
  loader.load( 'obj/curveTest.obj', function ( object ) {

    // object.traverse( function ( child ) {

    //   if ( child instanceof THREE.Mesh ) {

    //     child.material.map = texture;

    //   }

    // } );
    object.material = new THREE.MeshBasicMaterial( );
    console.log("p888888999999");
    object.position.z = - 1;
    // scene.add( object );
    swirl = object.children[0];
    sc1.setup();
  } );
}


// print(noise(1,2,3));

// Create a VR manager helper to enter and exit VR mode.
var params = {
  hideButton: false, // Default: false.
  isUndistorted: false // Default: false.
};
var manager = new WebVRManager(renderer, effect, params);

var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);
cube.position.z = -1;
// scene.add(cube);

var light = new THREE.DirectionalLight( 0xffffff, 3 );
scene.add(light);

var lastRender = 0;
function animate(timestamp) {
  var delta = Math.min(timestamp - lastRender, 500);
  lastRender = timestamp;

  // Apply rotation to cube mesh
  cube.rotation.y += delta * 0.0006;

  // Update VR headset position and apply to camera.
  controls.update();

  // Render the scene through the manager.
  manager.render(scene, camera, timestamp);

  requestAnimationFrame(animate);
  if(loaded)
  sc1.draw(lastRender*.001);
}

animate(performance ? performance.now() : Date.now());

function onKey(event) {
  if (event.keyCode == 90) { // z
    controls.resetSensor();
  }
}

window.addEventListener('keydown', onKey, true);
