var vertexShaderText =
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'',
'void main()',
'{',
' fragColor = vertColor;',
' gl_Position = vec4(vertPosition,0.0,1.0);',
'}'
].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
' gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');

var InitDemo = function() {
  console.log('This is working')

  var canvas = document.getElementById('game-surface');
  var gl = canvas.getContext('webgl');

  if (!gl) {
    console.log('WebGL not supported w/o experimental-webgl');
    gl = convas.getContext('experimental-webgl');
  }

  if (!gl) {
    alert('Your browser does not support WebGL');
  }

  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); //color and depth buffer we are rendering to

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  //set shader source
  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmentShader, fragmentShaderText);

  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
    return;
  }
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
    return;
  }

  //combine the shaders for graphics pipeline
  //tell OpenGL we want to use these by a graphic card program... shader is component

  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  //compile then link
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('ERROR LINKING PROGRAM', gl.getProgramInfoLog(program));
    return;
  }

  //validate program and catch errors in development/debugging
  gl.validateProgram(program);
  if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
    console.error('ERROR VALIDATING PROGRAM', gl.getProgramInfoLog(program));
    return;
  }

  //we have setup the graphics card program and ready to setup vertices
  //one attribute in vertex shader, vec2


  //
  // Create buffer
  //

  //create list of x,y variable that define triangle
  //counter clockwise
  //sitting on CPU
  //javascript, everything is a 64 bit floating point precision number... OpenGL expects 32 bit
  var triangleVertices =
  [ //X, Y        R,G,B
    0.0,0.5,      1.0, 1.0, 0.0,
    -0.5,-0.5,    0.7, 0.0, 1.0,
    0.5,-0.5,     0.1, 1.0, 0.6
  ];

  var triangleVertexBufferObject = gl.createBuffer(); //for GPU
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject); //active bufffer
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

  //only have to specify of attributes of shaders
  //handle to attribute
  var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
  var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');

  gl.vertexAttribPointer(
    positionAttribLocation, //Atrribute Location
    2, //num of elements per attribute
    gl.FLOAT, //type of elements
    gl.FALSE, //data is normalized
    5 * Float32Array.BYTES_PER_ELEMENT, //size of an individual vertex
    0 // offest from the beginning of a single vertex to this attribute
  );

  gl.vertexAttribPointer(
    colorAttribLocation, //Atrribute Location
    3, //num of elements per attribute
    gl.FLOAT, //type of elements
    gl.FALSE, //data is normalized
    5 * Float32Array.BYTES_PER_ELEMENT, //size of an individual vertex
    2 * Float32Array.BYTES_PER_ELEMENT// offest from the beginning of a single vertex to this attribute
  );

  //enables attribute for use
  gl.enableVertexAttribArray(positionAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);

  //
  // Main Render loop
  //
  //in a game it would be a while loop... javascript way... for animation

  gl.useProgram(program);
  //method of drawing (always triangles), how many vertexes to skip, how many are we drawing?
  gl.drawArrays(gl.TRIANGLES, 0, 3);

};
