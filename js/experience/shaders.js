
var simpleVert = "\
	varying vec2 vUv;\
	void main() {\
		vUv = uv;\
		gl_Position = projectionMatrix *\
		modelViewMatrix * vec4(position, 1.0 );\
	}\
";


var simpleFrag5 = "\
	precision highp float;\
	varying vec3 vecNormal;\
	uniform float offset;\
	varying vec2 vUv;\
	uniform sampler2D map;\
	uniform sampler2D map2;\
	void main(void) {\
		vec4 lgts = vec4(vec3(0.0),1.0);\
		vec4 tex = texture2D(map, vUv*7.);\
		vec4 tex2 = texture2D(map2, vec2(offset,0)+vUv);\
		gl_FragColor = vec4((tex2.b*vec3(.08,.0,.15))+pow(tex2.r,2.)*tex.rgb*9.*vec3(.3,.5,.9), 1.0);\
	}\
";

var simpleMat5 = new THREE.ShaderMaterial({
	uniforms: 
		{
			offset: {type: 'f', value: 1.0},
			map: { type: "t", value: null },
			map2: { type: "t", value: null },
		},
	vertexShader: simpleVert,
	fragmentShader: simpleFrag5,
});


var facingVert2 = "\
	varying vec2 vUv;\
	varying vec3 wNormal;\
	uniform float switcher;\
	uniform float offset;\
	uniform float warp;\
	uniform float warpSpeed;\
	void main() {\
		vUv = uv;\
		wNormal = mat3(modelMatrix[0].xyz,modelMatrix[1].xyz,modelMatrix[2].xyz)*normal;\
		wNormal = normalize(wNormal);\
		gl_Position = projectionMatrix *\
		modelViewMatrix * vec4(position+vec3(cos((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,sin((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,0), 1.0 );\
	}\
";

var facingVertTunnel = "\
	varying vec2 vUv;\
	uniform float switcher;\
	uniform float offset;\
	uniform float warp;\
	uniform float warpSpeed;\
	void main() {\
		vUv = uv;\
		gl_Position = projectionMatrix *\
		modelViewMatrix * vec4(position+vec3(cos((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,sin((warpSpeed*.01)*offset+10.*vUv.x)*warp*.01,0), 1.0 );\
	}\
";

//gl_Position = projectionMatrix *\
		// modelViewMatrix * vec4(position+vec3(cos(offset*30.*vUv.x)*10.,sin(offset*30.*vUv.x)*10.,0), 1.0 );\
var facingFrag2 = "\
	precision highp float;\
	uniform mat4 camMat;\
	uniform mat4 camMatInverse;\
	varying vec3 wNormal;\
	varying vec2 vUv;\
	uniform sampler2D textureColor;\
	uniform sampler2D textureAlpha;\
	uniform float offset;\
	uniform float fade;\
	uniform float power;\
	void main(void) {\
		float fader = pow((1.0+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-1.0))*.5,power)*2.;\
		vec4 texB = texture2D(textureColor, vUv);\
		vec4 tex = texture2D(textureColor, (texB.rg*.021)+vec2(vUv.x*.4+offset,vUv.y));\
		vec4 texA = texture2D(textureAlpha, vUv+(.05-tex.rg*.1));\
		vec4 camNorm = vec4(vec3(wNormal),0.) * camMat;\
		gl_FragColor = vec4(vec3(min(1.0,max(0.0,pow(camNorm.z,1.5))))*tex.rgb*texA.a*tex.a*fader, 1.0);\
	}\
";


var facingMat2 = new THREE.ShaderMaterial( 
	{
	    uniforms: 
		{ 
			offset:   { type: "f", value: 1.0 },
			fade:   { type: "f", value: 0.0 },
			power:   { type: "f", value: 1.0 },
			camMat: {type: 'm4', value:new THREE.Matrix4()},
			textureColor: { type: "t", value: null },
			textureAlpha: { type: "t", value: null }
		},
		vertexShader:   facingVert2,
		fragmentShader: facingFrag2,
		// side: THREE.DoubleSide,
		blending: THREE.AdditiveBlending,
		transparent: true
	}   
);


var facingFrag3 = "\
	precision highp float;\
	uniform mat4 camMat;\
	uniform mat4 camMatInverse;\
	varying vec3 wNormal;\
	uniform vec3 Color1;\
	uniform vec3 Color2;\
	uniform vec3 Color3;\
	varying vec2 vUv;\
	uniform sampler2D textureColor;\
	uniform sampler2D textureAlpha;\
	uniform float offset;\
	uniform float offsetMult;\
	uniform float fade;\
	uniform float power;\
	uniform float repeat;\
	void main(void) {\
		float fader = pow((.5+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-.5))*1.0,power)*2.;\
		vec4 texA = texture2D(textureAlpha, vUv);\
		vec4 tex = texture2D(textureColor, vec2(texA.a,0.0)*.1+vec2(vUv.x*(repeat*.01)+offset*(offsetMult*.01),vUv.y));\
		vec3 col1 = Color1*tex.r;\
		vec3 col2 = Color2*tex.g;\
		vec3 col3 = Color3*tex.b;\
		vec3 col = col1+col2+col3;\
		vec4 camNorm = vec4(vec3(wNormal),0.) * viewMatrix;\
		gl_FragColor = vec4(vec3(min(1.0,max(0.0,min(1.0,abs(pow(camNorm.z,3.))))))*col*col*texA.a*fader, 1.0);\
	}\
";
//		gl_FragColor = vec4(vec3(min(1.0,max(0.0,min(1.0,camNorm.z*3.))))*col*col*texA.a*fader*10., 1.0);\

//		gl_FragColor = vec4(vec3(min(1.0,max(0.0,pow(camNorm.z,.1))))*col*col*texA.a*fader, 1.0);\

//		gl_FragColor = vec4(vec3(min(1.0,max(0.0,pow(camNorm.z,1.5))))*col*tex.a*fader, 1.0);\
//


var facingMat3 = new THREE.ShaderMaterial( 
	{
	    uniforms: 
		{ 
			offset:   { type: "f", value: 1.0 },
			offsetMult:   { type: "f", value: 100.0 },
			fade:   { type: "f", value: 0.0 },
			power:   { type: "f", value: 1.0 },
			warp:   { type: "f", value: 0.0 },
			warpSpeed:   { type: "f", value: 100.0 },
			repeat:   { type: "f", value: 100.0 },
			camMat: {type: 'm4', value:new THREE.Matrix4()},
			textureColor: { type: "t", value: null },
			textureAlpha: { type: "t", value: null },
			Color1:{type:"v3",value:new THREE.Vector3(0,0,0)},
			Color2:{type:"v3",value:new THREE.Vector3(0,0,0)},
			Color3:{type:"v3",value:new THREE.Vector3(0,0,0)},
		},
		vertexShader:   facingVert2,
		fragmentShader: facingFrag3,
		// side: THREE.DoubleSide,
		blending: THREE.AdditiveBlending,
		transparent: true,
		opacity:.5
	}   
);


var facingFragtunnel = "\
	precision highp float;\
	uniform vec3 Color1;\
	uniform vec3 Color2;\
	uniform vec3 Color3;\
	varying vec2 vUv;\
	uniform sampler2D textureColor;\
	uniform sampler2D textureAlpha;\
	uniform float offset;\
	uniform float fade;\
	uniform float power;\
	uniform float repeat;\
	void main(void) {\
		float fader = pow((.5+(cos(   ( max(0.0,min(1.0,(fade+vUv.x))) * 3.1415*2.))  *-.5))*1.0,power)*4.;\
		vec4 texA = texture2D(textureAlpha, vUv);\
		vec4 tex = texture2D(textureColor, vec2(texA.a,0.0)*.1+vec2(vUv.x*(repeat*.01)+offset,vUv.y));\
		vec3 col1 = Color1*tex.r;\
		vec3 col2 = Color2*tex.g;\
		vec3 col3 = Color3*tex.b;\
		vec3 col = col1+col2+col3;\
		gl_FragColor = vec4(col*col*texA.a*fader, 1.0);\
	}\
";

var facingMatTunnel = new THREE.ShaderMaterial( 
	{
	    uniforms: 
		{ 
			offset:   { type: "f", value: 1.0 },
			offsetMult:   { type: "f", value: 1.0 },
			fade:   { type: "f", value: 0.0 },
			power:   { type: "f", value: 1.0 },
			warp:   { type: "f", value: 0.0 },
			warpSpeed:   { type: "f", value: 1.0 },
			repeat:   { type: "f", value: 1.0 },
			camMat: {type: 'm4', value:new THREE.Matrix4()},
			textureColor: { type: "t", value: null },
			textureAlpha: { type: "t", value: null },
			Color1:{type:"v3",value:new THREE.Vector3(0,0,0)},
			Color2:{type:"v3",value:new THREE.Vector3(0,0,0)},
			Color3:{type:"v3",value:new THREE.Vector3(0,0,0)},
		},
		vertexShader:   facingVertTunnel,
		fragmentShader: facingFragtunnel,
		// side: THREE.DoubleSide,
		blending: THREE.AdditiveBlending,
		transparent: true,
		opacity:.5
	}   
);

