							
							/*--------------------------------------------*\
									  	  信管创业基地 main.js
							   		   Design And Build By 倪云港
							   		   Email: yungangni@gmail.com
							     Github: http://github.com/niyungang
							\*--------------------------------------------*/


// 导航 + 地球
$(function(){
    var nav = $(".mainNav");
    var win = $(window);
    var sc = $(document);
    var navUl = $(".navUl");
    var logo = $(".logo");
    var can = $(".can");

    // 导航栏响应
    win.scroll(function(){
        if( sc.scrollTop() ){
            nav.addClass("fixedNav"); 
            navUl.addClass("fixedNav_ul");
            logo.addClass("fixedNav_logo");
            can.addClass("fixedNav_can");
        }else{
            nav.removeClass("fixedNav");
            navUl.removeClass("fixedNav_ul");
            logo.removeClass("fixedNav_logo");
            can.removeClass("fixedNav_can");
        }
    });


    //Globe
    (function() {
      var globe = planetaryjs.planet();
      globe.loadPlugin(autorotate(10));
      globe.loadPlugin(planetaryjs.plugins.earth({
        topojson: { file:   '/assets/js/world-110m-withlakes.json' },
        oceans:   { fill:   '#085DC0' },
        land:     { fill:   '#7db4f4' },
        borders:  { stroke: '#3366CC' }
      }));
      globe.loadPlugin(lakes({
        fill: '#085DC0'
      }));
      globe.loadPlugin(planetaryjs.plugins.pings());
      globe.loadPlugin(planetaryjs.plugins.drag({
        onDragStart: function() {
          this.plugins.autorotate.pause();
        },
        onDragEnd: function() {
          this.plugins.autorotate.resume();
        }
      }));
      globe.projection.scale(750).translate([750, 850]).rotate([0, -10, 0]);

      var colors = ['red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'];
      setInterval(function() {
        var lat = Math.random() * 45 + 40;
        var lng = Math.random() * 360 - 180;
        var color = colors[Math.floor(Math.random() * colors.length)];
        globe.plugins.pings.add(lng, lat, { color: color, ttl: 2000, angle: Math.random() * 14 });
      }, 150);

      var canvas = document.getElementById('rotatingGlobe');
      if (window.devicePixelRatio == 2) {
        canvas.width = 800;
        canvas.height = 800;
        context = canvas.getContext('2d');
        context.scale(2, 2);
      }
      globe.draw(canvas);

      function autorotate(degPerSec) {
        return function(planet) {
          var lastTick = null;
          var paused = false;
          planet.plugins.autorotate = {
            pause:  function() { paused = true;  },
            resume: function() { paused = false; }
          };
          planet.onDraw(function() {
            if (paused || !lastTick) {
              lastTick = new Date();
            } else {
              var now = new Date();
              var delta = now - lastTick;
              var rotation = planet.projection.rotate();
              rotation[0] += degPerSec * delta / 1000;
              if (rotation[0] >= 180) rotation[0] -= 360;
              planet.projection.rotate(rotation);
              lastTick = now;
            }
          });
        };
      };

        function lakes(options) {
        options = options || {};
        var lakes = null;

        return function(planet) {
          planet.onInit(function() {
            var world = planet.plugins.topojson.world;
            lakes = topojson.feature(world, world.objects.ne_110m_lakes);
          });

          planet.onDraw(function() {
            planet.withSavedContext(function(context) {
              context.beginPath();
              planet.path.context(context)(lakes);
              context.fillStyle = options.fill || 'black';
              context.fill();
            });
          });
        };
        };
    })();
});


//鼠标点击特效
function beautiful(){
	var html = document.getElementsByTagName("html")[0];
	var body = document.getElementsByTagName("body")[0];

	html.onclick = function(e){
		var b = document.createElement("b");
		b.innerHTML = "❤";
		body.append( b );

		var x = e.pageX - 5;
		var y = e.pageY - 20;

		var n = Math.floor(Math.random() * 14 + 8);

		b.style.zIndex = 2;
		b.style.position = "absolute";
		b.style.left = x + "px";
		b.style.top = y + "px";
		b.style.color = "red";
		b.style.fontSize = n + "px";
		b.style.userSelect = "none";

		setTimeout(function(){
			b.style.top = (y - 160) + "px";
			b.style.opacity = "0";
			b.style.transition = "1.6s";
		},1)
	}
}
beautiful();


// console
window.console && console.log && console.log("\n %c 黑大信管创业基地 \n","font:15px/20px '微软雅黑';  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);-webkit-text-fill-color: transparent;-webkit-background-clip: text; color:red;");