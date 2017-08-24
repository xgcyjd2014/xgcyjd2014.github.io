                    
                    /*--------------------------------------------*\
                                信管创业基地 index.js
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

// 欢迎
$(function(){
    window.addEventListener('load',function(){
        if(window.Notification && Notification.permission !== "granted"){
            Notification.requestPermission(function(status){
                if(Notification !== status ){
                    Notification.permission = status;
                }
            });
        }
    })
    if( window.Notification && Notification.permission === "granted" ){
        var n = new Notification("欢迎访问2015信管创业基地",{icon:"../../../assets/img/Notification-logo.png",body:"愿景：用心铸造卓越Offer"});
    }else if(window.Notification && Notification.permission !== "denied"){
        Notification.requestPermission(function (status){
            if (Notification.permission !== status){
                Notification.permission = status;
            }
            // 如果用户同意了
            if (status === "granted"){
                var n = new Notification("欢迎访问2015信管创业基地",{icon:"../../../assets/img/Notification-logo.png",body:"愿景：用心铸造卓越Offer"});
            }else{
                return;
            }
        });
    }
});

