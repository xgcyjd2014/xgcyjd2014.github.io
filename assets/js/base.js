---
---
/*--------------------------------------------*\
				xgjd base js
   		   Design And Build By Owen
      Github:http://github.com/numerhero

\*--------------------------------------------*/

// window.console && console.log && console.log("%c          ___________             ___     ___\n         /   /       \\           /  /__  /  /__\n        /   /         \\         /_____/ /_____/\n       /    |__________\\       |    _______    |\n      /     |_________|        |_  |_______|  _|\n     /  /|  | | |___| |            |__________\n    /__/ |__| |_______|            |__________| \n \n        __    __                               __\n    ___|  |__|  |___            ___       __  |  | \n   |____   __    ___|          |   |     |  |_|  |__ \n  ___|____|_ _|____|___      __|   |__   |   _    __|\n |_____________________|    |___   ___|  |  | |  |\n   /  ____|___|____  \\         |   |     |  | |__|    _\n /___/  __|   |__  \\___\\   ____|   |__   |  |________| |\n      |___________|       |___________|  |_____________|","color:transparent;text-shadow:0 0 1px #272822;");
window.console && console.log && console.log("%c\n                                               +   o+                                               \n                                              ::: :::  ::                                           \n                                      ::  oo/:ooo/+oo/:oo+ /o:                                      \n                                      ::  //: +++:/++::/+: :/:                                      \n                                 :++ /oo+/ooo/ooo/+oo/+ooo/ooo:ooo: /:                              \n                                 :/: :++/:+++ ///:///::++/:+++ /+/  ::                              \n                         /+: +oo:ooo//oo+/ooo:/o+ :oo :oo//ooo:ooo:ooo+ oo:  :                      \n                         :/: /++ /++::++/:/// :::  ::  //::/+/ +++:/++/ //: :::                     \n                 /: :oo/:ooo:ooo/ooo//oo/  /            :  /o/ ooo:+oo+/oo+:ooo :+/                 \n                 :: :++::+++ +++:/++:://:  :               :/: +++:/++/:++/:+++ :/:                 \n         :  /+/ +oo/+oo+:ooo +o+  +/                            :  :++ /oo+:ooo:ooo//++: //         \n         :  :// +++//++/:+++ /+/  ::                               :// /++/:+++:+++:/++: :/         \n    ++:/oo+:ooo:+oo//oo+ :/:               :  :+/  //                   ::  +++ +oo/+oo//oo+ +++  : \n    //::+++:+++:+++//++/ :/                :  ://  //                   ::  ++/ +++:+++//+++ +++    \n:: /+++:+++:+++::+/   :               :/ :+++:+o+:+oo/:++/  :                :  /++ +++//+++:+++::+/\n:: /+++:oo+:+++:://   :               // :oo+:+oo:+oo/:++/  :                :  /++ +oo//oo+:+++:://\n:  /++/:+++  :                :  /++:/++/:+++:+++:/++: ::                   //: +++:/++/:+++ ++/  : \n/: /oo+/ooo  /                /  /o+:/oo+:oo+:ooo:/++: ::                :  /+/ ooo/+oo//oo+ +++  /:\n:  /++/:+++              //: +++:/++//++/ ++/  :                   :// /++/:+++:+++:/++/ //:        \n/: /oo+/ooo  :        :  ++/:ooo:+oo//oo+ oo+  /                :  :++ /oo+:ooo:ooo/+oo/ ++:  :     \n:  /++/:+++  :  :// /++/:++/ +++:/++/ ::                   ::  /// /++//++/:+++ ://                 \n/: +oo+/ooo :+: :++ +oo+:ooo:ooo/ooo/ //                   /+: +oo:ooo+/oo+:ooo /o+  ::             \n   /++/:++/ /// ///:/++/:+++ :/:  :                    //::/// /++:/++:://:  :                      \n/: +oo+/ooo:ooo:ooo/+oo+:ooo /o+  ::               /: :oo//ooo:ooo:ooo+:oo/ :/                :   : \n   :++/:++/ /++ /++:://: ::                    :: ///::///:++/ ///  ::                       //:  ::\n/: +oo+/ooo:ooo:ooo+/oo/ :+               :+  /o+ +oo/+ooo/ooo:ooo: ++                   /+  ooo /oo\n   :///:/+/ /// :::                   :: :/// /// /++::++/ :::                      ::: ://: ///  ::\n+: +ooo/ooo:ooo: ++               ::  oo:/ooo/ooo/+oo/+ooo /o:                   +: +oo//ooo/ooo:/oo\n   ://: :::                      ://:://::++/ /++ ://  :::                  ::: :// ://::++/ ++/  ::\n/: /oo/ /+:                  :+/ ooo+/oo+/ooo/ooo/:oo  ::               // :ooo:ooo/ooo+/oo+/ooo:/oo\n    ::                   ::: :/: /++::++/ //: :::                      :::: /// /++:/++::++/:++/  ::\n    ::               ++ :ooo:ooo/ooo+/oo+ +o/  :                :  :oo +ooo:ooo:ooo/ooo+/oo+/ooo:/o+\n                 :: ://: /// +++:/++:://: ::                   ::: :// :++/:+++ /// ://::++/:++/  ::\n             /: +oo:+oo+/ooo:ooo/+oo: //               ::  +o/ ooo:ooo++ooo:ooo :+/  /: /oo+/ooo:/o+\n            ::: ://:/++/:++/ /// :::                   ::  //: +++:/++::/// ///         :++/:+++  ::\n    ::  +o/:ooo:ooo/+oo+:oo+ :+/                   ++ :oo//ooo:ooo:ooo+ oo:  :          :oo+/ooo:/++\n    ::  //: +++ /++::/// //:  :                    /: ://::+++ +++ ///: ::              :///:+++  ::\n:  +oo+/ooo:ooo:ooo/ ++:  :                /  +oo +oo/+ooo/ooo:+oo: ::               /: /oo+/ooo:/++\n   /++/:+++ +++:+++: :/                    :  /++ /++:/++/:++/ ://                   :: :++/:+++ :/:\n:  /oo+/ooo:ooo:+oo/ ++:                  ++::ooo:+oo/:oo/ :/                :  /+/ +oo//oo+/ooo::++\n   /++/:+++ +++:+++/ //:                  :/: +++:/++:://:  :                :  :// /++/:++/:+++ :/:\n    ::  ++/:ooo:+oo//oo+:+++  /                /   ::               :   ++::ooo:ooo/+oo//oo+ :+:    \n    ::  /+/ +++:+++//oo+:++/  ::               :   ::               :   //::+o+:+oo:/++/:++/ :/:    \n             :  /++:/oo+:oo+:+oo:/++: ::                        /: /++:/oo+:oo+:+oo: ++             \n             :  /++:/+++:+++:ooo:/++: ::                       :/: /++:/oo+:+o+:+++: //             \n                     // :++/ +o+:+++//++/ /+:  :       //  ++/ +++:+++//oo+ /+:  :                  \n                     // :+++:ooo:+oo//oo+ /+:  :       //  +o+ ooo:+oo//oo+ //:  :                  \n                             :// +++//++/:+++:+++:/++:/+++:+++ +++::++: ::                          \n                          :  /+/ +oo//oo+/ooo:ooo:/oo:/oo+:ooo:ooo:/oo: ::                          \n                                      // :+++:+++:/++:/++/ /+/  /:                                  \n                                  :   ++:/ooo:ooo:+oo/+oo+:oo+ :+/                                  \n                                           :  /// ://: ::                                           \n                                          :/  ooo +oo: ++   :                                    ","color:#1c86d1;text-shadow:0 0 1px #272822;");
window.console && console.log && console.log("\n                              欢迎加入信管创业基地 %c 面试时请附上console","font:15px/20px '微软雅黑';  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);-webkit-text-fill-color: transparent;-webkit-background-clip: text; color:red;");

/* 遍历posts */ 
{% capture posts %}
	[
		{% for post in site.posts %}
		{
			"title"  : "{{ post.title }}",
			"url"    : "{{ post.url }}",
			"date"   : "{{ post.date | %Y%M | date_to_string }}",
			"category": "{{ post.category }}",
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
				$this.css("backgroundPosition" , xpos + " " + Math.round(((firstTop - pos) * speed)) + "px");
			},
			init: function() {
				this.update();
				$window.on("scroll.Parallax" , this.update);
			}
		}.init());
	});
}

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