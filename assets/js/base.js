								/*--------------------------------------------*\
												xgjd base js
								   		   Design And Build By Owen
								      Github:http://github.com/numerhero

								\*--------------------------------------------*/

window.console && console.log && console.log("%c          ___________             ___     ___\n         /   /       \\           /  /__  /  /__\n        /   /         \\         /_____/ /_____/\n       /    |__________\\       |    _______    |\n      /     |_________|        |_  |_______|  _|\n     /  /|  | | |___| |            |__________\n    /__/ |__| |_______|            |__________| \n \n        __    __                               __\n    ___|  |__|  |___            ___       __  |  | \n   |____   __    ___|          |   |     |  |_|  |__ \n  ___|____|_ _|____|___      __|   |__   |   _    __|\n |_____________________|    |___   ___|  |  | |  |\n   /  ____|___|____  \\         |   |     |  | |__|    _\n /___/  __|   |__  \\___\\   ____|   |__   |  |________| |\n      |___________|       |___________|  |_____________|","color:transparent;text-shadow:0 0 1px #272822;");
window.console && console.log && console.log("\n      欢迎加入信管创业基地 %c 面试时请附上console","font:15px/20px '微软雅黑';  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);-webkit-text-fill-color: transparent;-webkit-background-clip: text; color:red;");


/* index */

$(function() {
	var authorName = $(".remark a");

	// 设置自己的专属颜色
	if( authorName.html() == "Owen" ) {
		authorName.addClass("owen");
	}


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