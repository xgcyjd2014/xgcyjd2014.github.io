/*--------------------------------------------*\
				xgjd index js
   		   Design And Build By Owen
      Github:http://github.com/numerhero

\*--------------------------------------------*/

/* 博文聚合 */
$(function() {
	var oPostList     = $("#post-list"), 
        oClassifyList = $("#classify-list"),
	    oAs           = $("#classify-list li a"),
	    PaginationNum = 12;
    
    oId('all');
    oClassifyList.delegate('a', 'click', function (ev) {
        var oId = ev.target.dataset.id,
            showNum = PaginationNum,
            html = '',
            filterArr = posts;

            render(oId);
    })

    function render(oId) {
        if(!(oId === "all")) {
                filterArr = posts.filter(function(value, idx) {
                    return value.category === oId;
                });
            }
            
        (filterArr.length <= PaginationNum) ? showNum = filterArr.length : 1;

        for(var i = 0; i<showNum; i++) {
            html += ''
                + '<li class="post-list-li">'
                +   '<div class="post-tag">'
                +     '<a href="'+filterArr[i].url+'" target="_blank">'
                +      '<img src="/assets/img/index/post-list-imgs/'+filterArr[i].tagpic+'" alt="22">'
                +     '</a>'
                +   '</div>'
                +   '<div class="line"></div>'
                +   '<div class="post-tag-description">'
                +     '<h1 class="post-tag-title">'
                +       '<a href="'+filterArr[i].url+'" target="_blank">'+filterArr[i].title+'</a>'
                +     '</h1>'
                +     '<h2 class="post-tag-author-date">'
                +       '<span class="remark"><a href="javascript:;" target="_blank">'+filterArr[i].author+'</a> 发布于'+filterArr[i].date+'</span>'
                +     '</h2>'
                +     '<div class="post-tag-short-line"></div>'
                +     '<p>'+filterArr[i].description+'</p>'
                +   '</div>'
                + '</li>'
        }


        oPostList.addClass("hidden");
        setTimeout(function () {
            oPostList.html(html);
            oPostList.removeClass("hidden")
        },350)
    }
});

/* baidu map */
$(function() {
	// 地图
	var map = new BMap.Map("allmap");
	
	// 地图中心点
	var mapPoint = new BMap.Point(126.627000,45.714530);
	map.centerAndZoom(mapPoint, 18);

	// 坐标信息
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

// 开头欢迎
$(function (){
  window.addEventListener('load',function(){
    if(window.Notification && Notification.permission !== "granted")
    {
      Notification.requestPermission(function(status)
      {
        if(Notification !== status )
        {
          Notification.permission = status;
        }
      });
    }
  })
  if( window.Notification && Notification.permission === "granted" )
  {

    var n = new Notification("欢迎访问2014信管创业基地",{icon:"../../../assets/img/Notification-logo.png",body:"愿景：用心铸造卓越Offer"});
  }
  else 
    if(window.Notification && Notification.permission !== "denied")
    {
      Notification.requestPermission(function (status){
          if (Notification.permission !== status)
          {
            Notification.permission = status;
          }

          // 如果用户同意了
          if (status === "granted")
          {
            var n = new Notification("欢迎访问2014信管创业基地",{icon:"../../../assets/img/Notification-logo.png",body:"愿景：用心铸造卓越Offer"});
          }
          else 
          {
            return;
          }
        });
    }
});


// 记数
$(function () {
    var nums = $(".nums"),
        sR   = $("#map").offset().top
    
    nums.eq(0).Count( 300, sR);
    nums.eq(1).Count( 100, sR);
    nums.eq(2).Count( 30, sR);
    nums.eq(3).Count( 55, sR);

});

$.fn.Count = function (target , scrollRange , speed) {
    speed = speed || 5;
    var $self = $(this),
        timer = null

    return ({
        update: function () {
            var pos = $window.scrollTop(),
                val = ~~$self.html()

            if (pos >= scrollRange) {
                timer = setTimeout(animationCount,speed);
            }

            function animationCount() {
                if (val < target) {
                    $self.html(++val);
                    switch(true) {
                        case val < (target - 5): 
                            timer = setTimeout(animationCount,speed);
                            break;
                        case val >= (target - 5) && val < (target - 3):
                            timer = setTimeout(animationCount,speed+120);
                            break;
                        case val >= (target - 3) && val < (target - 1):
                            timer = setTimeout(animationCount,speed+240);
                            break;
                        case val >= (target - 1) && val < target:
                            timer = setTimeout(animationCount,speed+360);
                    }
                }
            }
            
        },
        init: function () {
            this.update();
            $window.on("scroll.Count" , this.update);
        }
    }.init());
}