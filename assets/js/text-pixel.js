window.onload = function() {
	var M = Math,
	    ran = Math.random,
        c = createjs,
	    oStage = new c.Stage("content-us"),
	    mapBox = document.querySelector("#map-title"),
	    CanvasWidth = mapBox.clientWidth,
	    CanvasHeight = mapBox.offsetHeight,
        isFormed     = false,
	    colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2']; // 彩球颜色

	oStage.canvas.width = CanvasWidth;
	oStage.canvas.height = CanvasHeight;

    c.Ticker.setFPS(60);
    c.Ticker.addEventListener("tick" , function() {
        oStage.update();
    });

    var path = createText();

    initball( path );

    function initball( path ) {
        for(var i=0; i<path.length; i++) {
            var circle = new createjs.Shape();
            var r = 5;
            var x = CanvasWidth*ran();
            var y = CanvasHeight*ran();
            var color = colors[Math.floor(ran()*colors.length)];
            circle.id    = i;
            circle.alpha = 1;
            circle.radius = r;
            switch(M.floor(ran()*2)) {
                case 0:
                    circle.graphics.beginFill(color).drawCircle(0, 0, r);
                    break;
                case 1:
                    circle.graphics.beginStroke(color).drawCircle(0, 0, r);   
                    break;
            }
            // 注意这里不能设置xy  否则Tween 会自动赋值！！！
            circle.x = x;
            circle.y = y;
            circle.originX = path[i].x;
            circle.originY = path[i].y;
            circle.movement = "float";
            tweenCircle(circle);
            oStage.addChild(circle);
        }
    }

    function FormedBall ( path ) {
        for( var i = 0 ; i<path.length; i++) {

            oStage.getChildAt(i).movement = "in";
            tweenCircle(oStage.getChildAt(i));
        }
    }
    
    function noFormedBall ( path ) {
        for( var i = 0 ; i<path.length; i++) {
            oStage.getChildAt(i).movement = "out";
            tweenCircle(oStage.getChildAt(i));
        }
    }
	function tweenCircle(c) {
	   if(c.tween) {
            c.tween.kill();
        }
	   // 运动对象  运动时间间距  运动位置 xy  运动执行方式
        switch(c.movement) {
            case "float": 
                c.tween = TweenLite.to(c, 5 + ran()*3.5, {x: c.x + -100+ran()*200, y: c.y + -100+ran()*200, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                        onComplete: function() {
                            tweenCircle(c);
                        }});
                break;
            case "jiggle": 
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + M.floor(-0.5+ran()*1) , y: c.originY + M.floor(-0.5+ran()*1), ease:Quad.easeInOut, onComplete: function() {
                        tweenCircle(c);
                    }});
                break;
            case "out": 
                c.tween = TweenLite.to(c, 0.8, {x: CanvasWidth*ran(), y: CanvasHeight*ran(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                    c.movement = 'float';
                    tweenCircle(c);
                }});
                break;
            case "in":
                c.tween = TweenLite.to(c, 0.8, {x: c.originX, y: c.originY, ease:Quad.easeInOut,scaleX: 0.8, scaleY: 0.8, alpha: 1, radius: 5 , onComplete: function() {
                    c.movement = 'jiggle';
                    tweenCircle(c);
                }});
                break;
        }
	}

    // 生成文字，获取文字路径
    function createText() {
    	var textStageW = CanvasWidth;
    	var textStageH = CanvasHeight;
    	var t = "联 系 我 们";

    	var textPixels = [];
    	var fontSize = 860/(t.length);
        if (fontSize > 160) fontSize = 160;
    	
    	var textStage = new c.Stage("path-text");

    	// 这里颜色一定要设置，不然就getImageData 就无法获取到像素点
    	var text = new c.Text(t, "900 "+ fontSize +"px 微软雅黑", "#eee");
    	text.textAlign = 'center';
    	text.x = 600;
        text.y = 0;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('path-text').getContext('2d');
        var pixel = ctx.getImageData(0,0,CanvasWidth,200).data;
        
        for( var i = pixel.length; i>=0 ;i-=4 ) {
        	if( pixel[i] != 0 ) {
        		var x = (i / 4) % CanvasWidth;
        		var y = M.floor(M.floor(i/4)/CanvasWidth);

        		// 减少一些像素点
        		if((x && x%10 == 0) && (y && y%10 == 0)) {
        			textPixels.push({
        				x : x,
        				y : y
        			})
        		}
        	}
        }


        text.text = "";
        textStage.update();
        return textPixels
    }

    var oMap = document.getElementById("map");
    window.addEventListener("scroll" , scrollShow);

    function scrollShow() {
        var oTop = document.documentElement.scrollTop || document.body.scrollTop;
        var oStagePos = getOffTop(oStage.canvas);

        var oStageHeight = oStage.canvas.offsetHeight;
        var oMapHeight   = oMap.offsetHeight;
        var showRange = oStagePos + oStageHeight + 70 + oMapHeight;
        if( oTop > oStagePos * 0.9 && oTop < showRange ) {
           if( !isFormed ) {
                // 聚形
                FormedBall( path );
                isFormed = true;
           }
        }else {
            if( isFormed ) {
                // 散形
                noFormedBall( path );
                isFormed = false;
            }
        }
    }
    document.addEventListener("resize" , function() {
    	mapBox = document.querySelector("#map"); 
		CanvasWidth = window.innerWidth;
		CanvasHeight = mapBox.clientHeight;
		oStage.canvas.width = CanvasWidth * 0.56;
		oStage.canvas.height = CanvasHeight;
    });

    function getOffTop(obj) {
        var result = 0;
        while( obj ) {
            result += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return result;
    }
}