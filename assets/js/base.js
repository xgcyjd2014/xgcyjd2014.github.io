---
---
/*--------------------------------------------*\
				xgjd base js
   		   Design And Build By Owen
      Github:http://github.com/numerhero

\*--------------------------------------------*/

window.console && console.log && console.log("%c          ___________             ___     ___\n         /   /       \\           /  /__  /  /__\n        /   /         \\         /_____/ /_____/\n       /    |__________\\       |    _______    |\n      /     |_________|        |_  |_______|  _|\n     /  /|  | | |___| |            |__________\n    /__/ |__| |_______|            |__________| \n \n        __    __                               __\n    ___|  |__|  |___            ___       __  |  | \n   |____   __    ___|          |   |     |  |_|  |__ \n  ___|____|_ _|____|___      __|   |__   |   _    __|\n |_____________________|    |___   ___|  |  | |  |\n   /  ____|___|____  \\         |   |     |  | |__|    _\n /___/  __|   |__  \\___\\   ____|   |__   |  |________| |\n      |___________|       |___________|  |_____________|","color:transparent;text-shadow:0 0 1px #272822;");
window.console && console.log && console.log("\n      欢迎加入信管创业基地 %c 面试时请附上console","font:15px/20px '微软雅黑';  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);-webkit-text-fill-color: transparent;-webkit-background-clip: text; color:red;");

/* 遍历posts */ 
{% capture posts %}
	[
		{% for post in site.posts %}
		{
			"title"  : "{{ post.title }}",
			"url"    : "{{ post.url }}",
			"date"   : "{{ post.date | %Y%M | date_to_string }}",
			"content": "{{ post.content | escape }}",
			"category": "{{ post.category }}",
			"description": "{{ post.description }}",
			"author": "{{ post.author }}",
			"tagpic": "{{ post.tagpic }}",
			"description": "{{ post.description }}"
		}{% if forloop.last %}{% else %},{% endif %}
		{% endfor %}
	]
{% endcapture %}

var posts = {{ posts | strip_newlines }};

// init
$window = $(window);
M       = Math;
Cos     = M.cos;
Sin     = M.Sin;
random  = M.random;
dPI = M.PI * 2;
pr = window.devicePixelRatio || 1;
c = createjs;

/* 滚动视差 */ 
$(function() {
	$(".full-background").Parallax("center" , 0.4);
});

$.fn.Parallax = function( xpos , speed ) {
	var firstTop;  // 每个对象到document 顶端的距离
	var pos;       // 滚动轴距离

	return this.each(function( idx , value ) {
		var $this = $(value);
		
		// 缺省init
		(arguments.length < 1 || xpos === null)  && (xpos = "50%");
		(arguments.length < 2 || speed === null) && (speed = 0.4 );
		
		return ({
			update: function() {
				firstTop = $this.offset().top;
				pos      = $window.scrollTop();	
				$this.css("backgroundPosition" , xpos + " " + M.round(((firstTop - pos) * speed)) + "px");
			},
			init: function() {
				this.update();
				$window.on("scroll.Parallax" , this.update);
			}
		}.init());
	});
}

/* 绘制logo */ 
$(function() {
	var c = createjs;
	var oStage = new c.Stage("logo-c");
	var CanvasWidth = 1200;
	var CanvasHeight = 700;

	oStage.canvas.width = CanvasWidth;
	oStage.canvas.height = CanvasHeight;

	var run1 = [
		{x : 510, y : 270},
		{x : 410, y : 213},
		{x : 95, y : 392},
		{x : 95, y : 300},
		{x : 420, y : 116},
		{x : 684, y : 270},
		{x : 0, y : 658},
		{x : 0, y : 715},
		{x : 420, y : 950},
		{x : 840, y : 720},
		{x : 840, y : 400},
		{x : 318, y : 690},
	];

	var run2 = [
		{x : 318, y : 690},
		{x : 420, y : 750},
		{x : 737, y : 568},
		{x : 737, y : 660},
		{x : 420, y : 840},
		{x : 152, y : 685},
		{x : 840, y : 297},
		{x : 840, y : 240},
		{x : 420, y : 0},
		{x : 0, y : 240},
		{x : 0, y : 568},
		{x : 510, y : 270}
	];

	var runm = run1.concat(run2);
	var mp   = [];
	for( var i = 0; i<runm.length; i++ ) {
		mp.push(new c.Point(runm[i].x,runm[i].y));
	}

	var logoShape = new c.Shape();
	var Lg        = logoShape.graphics;
	oStage.addChild(logoShape);

	logoShape.x = CanvasWidth * 0.32;
	logoShape.y = CanvasHeight * 0.22;

	for( var i = 0; i<mp.length; i++ ) {
		mp[i] = dSacle(mp[i] , 0.5);
	}
	
	for( var i = 0 ; i<mp.length ; i++ ) {
		if( i == 0 ) {
			Lg.setStrokeStyle(8).beginStroke("#66D9B1").mt(mp[0].x , mp[0].y);
		} else {
			Lg.lt(mp[i].x , mp[i].y);
		}
	}

	logoShape.alpha = 0;
	var text = new c.Text();
	text.text      	  = "IM WEB";
	text.font         = "bold 180px Arial";
	text.textBaseline = "alphabetic";
	text.outline      = 3;
	text.color        = "#66D9B1";
	text.shadow       = "#000000,5,5,10";
	text.x            = CanvasWidth * 0.58;
	text.y            = CanvasHeight * 0.54;
	text.textAlign    = "center";
	text.alpha        = 0;
	
	oStage.addChild(text);


	TweenLite.to(logoShape , 1.5 , { alpha:1,x:CanvasWidth * 0.12 , y:CanvasWidth * 0.17 , scaleX: 0.5 , scaleY:0.5 , ease:Quad.easeInOut , onComplete:function(){
		TweenLite.to(text , 0.8 , { y: CanvasHeight * 0.56 , alpha:1 , ease:Quad.easeInOut,onComplete:function(){
			c.Ticker.removeEventListener("tick" , Update);
		}});

	}});

	function dSacle(o , scale) {
		var newPoint = o.clone();
			newPoint.x *= scale;
			newPoint.y *= scale;

			return newPoint;
	}

	c.Ticker.setFPS(60);
    c.Ticker.addEventListener("tick" , Update);
    function Update() {
    	oStage.update();
    }	
});

/* header滚动 */
$(function() {
	var iNow = 0;
	$("#header").headerScroll();
	
});

$.fn.headerScroll = function() {
	var $self     = $(this);
	var oHeader   = $("#header");
	var oHeaderUl = $("#guide-list");
	var oAs       = $("#guide-list li>a");
	return ({
		update: function() {
			var pos = $window.scrollTop();
			if( pos !== 0 ) {
				oHeader.addClass("header-transparent");
				oHeaderUl.addClass("tall-guide-list");
				oAs.addClass("tall-a");
			}else {
				oHeader.removeClass("header-transparent");
				oHeaderUl.removeClass("tall-guide-list");
				oAs.removeClass("tall-a");
			}
		},
		init: function() {
			this.update();
			$window.on("scroll.headerScroll" , this.update)
		}
	}.init());
}