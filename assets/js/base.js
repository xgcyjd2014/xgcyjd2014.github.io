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

/* index */
$(function() {

	/* 按钮间补 */ 
	var oBtn = $("#map-content-list li a");
	var oDir = $("#map-content-list .directions");


	// 地图
	var map = new BMap.Map("allmap");
	
	// 地图中心点
	var mapPoint = new BMap.Point(126.627000,45.714530);
	map.centerAndZoom(mapPoint, 18);

	var pointA = new BMap.Point(126.628400,45.715200);
	var markerA = new BMap.Marker(pointA); 
	            
	
	var pointB = new BMap.Point(126.630938,45.713444)
	var markerB = new BMap.Marker(pointB);
	map.addOverlay(markerA);
	map.addOverlay(markerB);

	var opts = [{
	  width : 200,     // 信息窗口宽度
	  height: 100,     // 信息窗口高度
	  title : "黑龙江大学汇文楼" , // 信息窗口标题
	  enableMessage:false,//设置允许信息窗发送短息
	  message:"新生培训基地"
	},
	{
	  width : 200,     // 信息窗口宽度
	  height: 100,     // 信息窗口高度
	  title : "黑龙江大学地下创业园" , // 信息窗口标题
	  enableMessage:false,//设置允许信息窗发送短息
	  message: "老生研究场所"
	}];

	var infoWindowA = new BMap.InfoWindow("地址：汇文楼625", opts[0]);  // 创建信息窗口对象 
	var infoWindowB = new BMap.InfoWindow("地址：地下创业园b8", opts[1]);
	
	// markerA.addEventListener("click", function(){          
	// 	map.openInfoWindow(infoWindowA,pointA); //开启信息窗口
	// });

	// markerB.addEventListener("click", function(){          
	// 	map.openInfoWindow(infoWindowB,pointB); //开启信息窗口
	// });

}); 


/* tag分类 */
$(function() {
	var oClassifyList = $("#classify-list");
	var oLis          = $("#classify-list li");
	var oAs           = $("#classify-list li a");
	for(var i = 1 ;i<oAs.length; i++) {
		oAs[i].addEventListener("click" ,function() {
			var aTagname = $(this).html();
			var aLis      = [];
			posts.forEach(function( post ) {
				if( post.category == aTagname ) {
					aLis.push(post);
				}
			});

			document.getElementById("post-list").innerHTML = '';
			for(var j = 0 ;j<aLis.length; j++) {
				var aLi = document.createElement("li");
				aLi.className = "post-list-li";
				aLi.innerHTML = '<div class="post-tag"><a href="'+ aLis[j]["url"] +'" target="_blank"><img src="/assets/img/index/post-list-imgs/'+ aLis[j]["tagpic"] +'" alt="'+ aLis[j]["title"] +'"></a></div><div class="line"></div><div class="post-tag-description"><h1 class="post-tag-title"><a class="'+ aLis[j]["category"] +'-title" href="'+ aLis[j]["url"] +'" target="_blank">'+  aLis[j]["title"] +'</a></h1><h2 class="post-tag-author-date"><span class="remark"><a href="javascript:;" class="'+ aLis[j]["author"] +'" target="_blank">'+ aLis[j]["author"] +'</a> 发布于'+ aLis[j]["date"] +'</span></h2><div class="post-tag-short-line"></div><p>'+ aLis[j]["description"] +'</p></div>';
				document.getElementById("post-list").appendChild(aLi);
			}
		});
	}
	oAs[0].addEventListener("click" , function() {
		document.getElementById("post-list").innerHTML = '';
		for(var j = 0;j<posts.length;j++) {
			var aLi = document.createElement("li");
			aLi.className = "post-list-li";
			aLi.innerHTML = '<div class="post-tag"><a href="'+ posts[j]["url"] +'" target="_blank"><img src="/assets/img/index/post-list-imgs/'+ posts[j]["tagpic"] +'" alt="'+ posts[j]["title"] +'"></a></div><div class="line"></div><div class="post-tag-description"><h1 class="post-tag-title"><a class="'+ posts[j]["category"] +'-title" href="'+ posts[j]["url"] +'" target="_blank">'+  posts[j]["title"] +'</a></h1><h2 class="post-tag-author-date"><span class="remark"><a href="javascript:;" class="'+ posts[j]["author"] +'" target="_blank">'+ posts[j]["author"] +'</a> 发布于'+ posts[j]["date"] +'</span></h2><div class="post-tag-short-line"></div><p>'+ posts[j]["description"] +'</p></div>';
			document.getElementById("post-list").appendChild(aLi);
		}	
	});
});
