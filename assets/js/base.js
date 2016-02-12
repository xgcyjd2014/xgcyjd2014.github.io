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

	var markerArr = [
		{
			title:"IMWEB新生实验室",
			content:"黑龙江大学汇文楼6楼625室",
			point:"126.628348|45.715199",
			isOpen:1,
			icon:{w:23,h:25,l:0,t:21,x:9,lb:12}
		},
		{
			title:"IMWEB老生实验室",
			content:"黑龙江大学地下创业园b区8室",
			point:"126.630938|45.713444",
			isOpen:1,
			icon:{w:23,h:25,l:0,t:21,x:9,lb:12}
		}
	];
	function createIcon(json){
	    var icon = new BMap.Icon(
	    	"http://app.baidu.com/map/images/us_mk_icon.png", 
	    	new BMap.Size(json.w,json.h),
	    	{
	    		imageOffset: new BMap.Size(-json.l,-json.t),
	    		infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)
	    	});
	    return icon;
	}
	 function createInfoWindow(i){
	    var json = markerArr[i];
	    var route = '<form id="gotobaiduform" action="http://api.map.baidu.com/direction" target="_blank" method="get"><br><span class="input"><strong>起点：</strong><input class="outset" type="text" name="origin" value="北京站"><input class="outset-but" type="button" value="公交" onclick="gotobaidu(1)"><input class="outset-but" type="button" value="驾车" onclick="gotobaidu(2)"><a class="gotob" href="url=" http:="" api.map.baidu.com="" direction?destination="latlng:39.914887,116.403884|name:天安门&amp;region=北京&amp;output=html&quot;" target="_blank"></a></span><input type="hidden" value="北京" name="region"><input type="hidden" value="html" name="output"><input type="hidden" value="driving" name="mode"><input type="hidden" value="latlng:39.914887,116.403884|name:天安门" name="destination"></form>';
	    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content + "</div>");
	    return iw;
	}
	function addMarker(){
	    for(var i=0;i<markerArr.length;i++){
	        var json = markerArr[i];
	        var p0 = json.point.split("|")[0];
	        var p1 = json.point.split("|")[1];
	        var point = new BMap.Point(p0,p1);
	        var iconImg = createIcon(json.icon);
	        var marker = new BMap.Marker(point,{icon:iconImg});
	        var iw = createInfoWindow(i);
	        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
	        marker.setLabel(label);
	        map.addOverlay(marker);
	        label.setStyle({
	            borderColor:"#808080",
	            color:"#333",
	            cursor:"pointer",
	        });

	        (function(){
	            var index = i;
	            var _iw = createInfoWindow(i);
	            var _marker = marker;
	            _marker.addEventListener("click",function(){
	                this.openInfoWindow(_iw);
	            });
	            _iw.addEventListener("open",function(){
	                _marker.getLabel().hide();
	            })
	            _iw.addEventListener("close",function(){
	                _marker.getLabel().show();
	            })
	            label.addEventListener("click",function(){
	                _marker.openInfoWindow(_iw);
	            })
	            if(!!json.isOpen){
	                label.hide();
	                _marker.openInfoWindow(_iw);
	            }
	        })()
	    }
	}
	addMarker();
}); 


/* 博文聚合 */
$(function() {
	var oClassifyList = $("#classify-list");
	var oLis          = $("#classify-list li");
	var oAs           = $("#classify-list li a");
	var PaginationNum = 12;

	for(var i = 1 ;i<oAs.length; i++) {
		oAs[i].addEventListener("click" ,function() {
			var aTagname = $(this).html();
			var aLis      = [];
			posts.forEach(function( post ) {
				if( post.category == aTagname ) {
						aLis.push(post);
				}
			});
			var pageNum = 0;
			aLis.length >= PaginationNum ? pageNum = PaginationNum : pageNum = aLis.length;
			document.getElementById("post-list").innerHTML = '';
			for(var j = 0 ;j<pageNum; j++) {
				var aLi = document.createElement("li");
				aLi.className = "post-list-li";
				aLi.innerHTML = '<div class="post-tag"><a href="'+ aLis[j]["url"] +'" target="_blank"><img src="/assets/img/index/post-list-imgs/'+ aLis[j]["tagpic"] +'" alt="'+ aLis[j]["title"] +'"></a></div><div class="line"></div><div class="post-tag-description"><h1 class="post-tag-title"><a class="'+ aLis[j]["category"] +'-title" href="'+ aLis[j]["url"] +'" target="_blank">'+  aLis[j]["title"] +'</a></h1><h2 class="post-tag-author-date"><span class="remark"><a href="javascript:;" class="'+ aLis[j]["author"] +'" target="_blank">'+ aLis[j]["author"] +'</a> 发布于'+ aLis[j]["date"] +'</span></h2><div class="post-tag-short-line"></div><p>'+ aLis[j]["description"] +'</p></div>';
				document.getElementById("post-list").appendChild(aLi);
			}
		});
	}
	oAs[0].addEventListener("click" , function() {
		document.getElementById("post-list").innerHTML = '';
		var pageNum = 0;
		posts.length >= PaginationNum ? pageNum = PaginationNum : pageNum = posts.length;
		for(var j = 0;j<pageNum;j++) {
			var aLi = document.createElement("li");
			aLi.className = "post-list-li";
			aLi.innerHTML = '<div class="post-tag"><a href="'+ posts[j]["url"] +'" target="_blank"><img src="/assets/img/index/post-list-imgs/'+ posts[j]["tagpic"] +'" alt="'+ posts[j]["title"] +'"></a></div><div class="line"></div><div class="post-tag-description"><h1 class="post-tag-title"><a class="'+ posts[j]["category"] +'-title" href="'+ posts[j]["url"] +'" target="_blank">'+  posts[j]["title"] +'</a></h1><h2 class="post-tag-author-date"><span class="remark"><a href="javascript:;" class="'+ posts[j]["author"] +'" target="_blank">'+ posts[j]["author"] +'</a> 发布于'+ posts[j]["date"] +'</span></h2><div class="post-tag-short-line"></div><p>'+ posts[j]["description"] +'</p></div>';
			document.getElementById("post-list").appendChild(aLi);
		}
	});
});
