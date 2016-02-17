                          /*--------------------------------------------*\
                                        xgjd low-poly js
                              Design And Build By Matthew Wagerfield
                                Github:https://github.com/wagerfield

                          \*--------------------------------------------*/
(function() {
  //------------------------------
  // Mesh Properties
  //------------------------------
  // width: 单个网格宽度
  // height: 单个网格的高度
  // mesh : 网格
  // depth: 深度
  // segments: 段，将整个舞台分割成多个网格， 数目为 2*n 个
  // slices: 每个网格被分成的片数
  // xRange: 网格的宽变形度
  // yRange: 网格的高变形度
  // speed : 变化速度
  // ambient: 环境颜色
  // diffuse: 弥漫色
  // slices: 将每一个网格分成 n 个三角形
  var MESH = {
    width: 1.2,
    height: 1.9,
    depth: 10,
    segments: 16,
    slices: 8,
    xRange: 0.8,
    yRange: 0.1,
    zRange: 1.0,
    speed: 0.0002,
    ambient: "#16b5e6",
    diffuse: "#d9a2a2"
  }
  //------------------------------
  // Light Properties
  //------------------------------
  // count: 光源点数
  // zOffset: z轴的发散度
  // ambient: 环境颜色
  // diffuse: 弥漫色
  // gravity: 光源重力
  // dampening: 光度控制
  var LIGHT = {
    count: 2,
    zOffset: 65,
    ambient: "#101750",
    diffuse: "#2acdcd",
    speed: 0.0005,
    gravity: 1200,
    dampening: 0.95,
    minLimit: 10,
    maxLimit: 50,
    // 大小距离
    minDistance: 20,
    maxDistance: 800,
    autopilot: true,
    // 范围
    draw: false,
    bounds: FSS.Vector3.create(),
    // 位置
    step: FSS.Vector3.create(
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0)
    ),
    xyScalar: 1
  };
  //------------------------------
  // Render Properties
  //------------------------------
  // 设置渲染模式
  var WEBGL = 'webgl';
  var CANVAS = 'canvas';
  var SVG = 'svg';
  var RENDER = {
    renderer: CANVAS
  };
  //------------------------------
  // Global Properties
  //------------------------------
  var now, start = Date.now();            // 时间差
  var center = FSS.Vector3.create();      // 中心点
  var attractor = FSS.Vector3.create();   // 吸引子
  var container = document.getElementById('low-poly-container');  // canvas容器
  var output = document.getElementById('output');        // 导出舞台 
  var renderer, scene, mesh, geometry, material;      // 渲染，场景，网格，几何，材质
  var webglRenderer, canvasRenderer, svgRenderer;     // 渲染模式

  // 初始化场景
  function initialise () {
    createRenderer();
    createScene();
    createMesh();
    createLights();
    addEventListeners();
    resize(container.offsetWidth, container.offsetHeight);
    animate();
  }

  function createRenderer () {
    canvasRenderer = new FSS.CanvasRenderer();
    setRenderer(RENDER.renderer);
  }

  // 设置渲染器
  function setRenderer (index) {
    if( renderer ) {
      output.removeChild( renderer.element );
    }

    switch(index) {
      case WEBGL:
        renderer = webglRenderer;
        break;
      case CANVAS:
        renderer = canvasRenderer;
        break;
      case SVG:
        renderer = svgRenderer;
        break;
    }
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    output.appendChild(renderer.element);
  }

  function createScene () {
    scene = new FSS.Scene();
  }

  function createMesh () {
    // 清屏，场景初始化，渲染器初始
    scene.remove(mesh);
    renderer.clear();
    
    // 生成几何模型实例
    geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);

    // vertices 顶点

    // 初始材质
    material = new FSS.Material(MESH.ambient, MESH.diffuse);
    mesh     = new FSS.Mesh(geometry , material);
    scene.add(mesh);

    // 在原有顶点基础上，增加更多顶点 用于运动
    // anchor 锚点
    var v,vertex;
    for( v = geometry.vertices.length - 1 ; v>=0 ; v-- ) {
      vertex = geometry.vertices[v];

      // 复制 矢量点坐标
      vertex.anchor = FSS.Vector3.clone(vertex.position);
      
      // 重新 产生一个随机点
      vertex.step = FSS.Vector3.create(
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0)
      );

      // 随机 0 到 2π 产生一个随机数 
      vertex.time = Math.randomInRange(0, Math.PIM2);
    }
  }

  function createLights () {
      var l,light;

      // 清空所有的光源
      for( l = scene.lights.length - 1; l>=0 ; l-- ) {
        light = scene.lights[l];
        scene.remove(light);
      }

      // 清空一遍渲染器
      renderer.clear();

      for( l = 0; l < LIGHT.count ; l++ ) {
        light = new FSS.Light(LIGHT.ambient , LIGHT.diffuse);

        // 颜色格式化
        light.ambientHex = light.ambient.format();
        light.diffuseHex = light.diffuse.format();
        scene.add(light);

        // 光源质量？
        light.mass = Math.randomInRange(0.5, 1);
        
        // 光源速度
        light.velocity = FSS.Vector3.create();
        
        // 光源加速度
        light.acceleration = FSS.Vector3.create();            
        
        // 光源力度
        light.force = FSS.Vector3.create();

        // Ring SVG Circle
        light.ring = document.createElementNS(FSS.SVGNS, 'circle');
        light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
        light.ring.setAttributeNS(null, 'stroke-width', '0.5');
        light.ring.setAttributeNS(null, 'fill', 'none');
        light.ring.setAttributeNS(null, 'r', '10');

        // Core SVG Circle
        light.core = document.createElementNS(FSS.SVGNS, 'circle');
        light.core.setAttributeNS(null, 'fill', light.diffuseHex);
        light.core.setAttributeNS(null, 'r', '4');
      }
  }

  function resize ( width , height ) {
    // 重新设置画布大小
    renderer.setSize(width , height);
    FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);

    // 重新生成网格
    createMesh();
  }

  function animate () {
    // 产生时间差
    now = Date.now() - start;
    
    // 更新
    update();

    // 渲染
    render();

    // 动画框架
    requestAnimationFrame(animate);
  }

  function update() {
    var ox , oy , oz , l , light , v , vertex , offset = MESH.depth/2;

    // 更新边界
    FSS.Vector3.copy(LIGHT.bounds , center);

    // 中心点
    FSS.Vector3.multiplyScalar(LIGHT.bounds , LIGHT.xyScalar); 

    // 更新吸引子
    FSS.Vector3.setZ(attractor, LIGHT.zOffset);

    // 光源随机运动点位置
   
    ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
    oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
    FSS.Vector3.set(attractor,
      LIGHT.bounds[0]*ox,
      LIGHT.bounds[1]*oy,
      LIGHT.zOffset);
    

    // 光源运动
    for( l = scene.lights.length - 1; l >= 0; l-- ) {
      light = scene.lights[l];

      // 重新设置光源的Z轴距离
      FSS.Vector3.setZ(light.position, LIGHT.zOffset);
      
      // low-poly算法
      // force Luke  计算原力 （词源于星战）
      var D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);

      var F = LIGHT.gravity * light.mass / D;
      FSS.Vector3.subtractVectors(light.force, attractor, light.position);
      FSS.Vector3.normalise(light.force);
      FSS.Vector3.multiplyScalar(light.force, F);

      // 更新 光源位置
      FSS.Vector3.set(light.acceleration);
      FSS.Vector3.add(light.acceleration, light.force);
      FSS.Vector3.add(light.velocity, light.acceleration);
      FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
      FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
      FSS.Vector3.add(light.position, light.velocity);
    }

    // 网格顶点运动
    for( v = geometry.vertices.length - 1; v >=0; v-- ) {
      vertex = geometry.vertices[v];
      
      ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
      oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
      oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);

      FSS.Vector3.set(vertex.position,
        MESH.xRange*geometry.segmentWidth*ox,
        MESH.yRange*geometry.sliceHeight*oy,
        MESH.zRange*offset*oz - offset);
      FSS.Vector3.add(vertex.position, vertex.anchor);
    }

    geometry.dirty = true;
  }

  function render() {
    renderer.render(scene);
  }

  function addEventListeners() {
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize (event) {
    resize(container.offsetWidth, container.offsetHeight);
    render();
  }

  initialise();

})();