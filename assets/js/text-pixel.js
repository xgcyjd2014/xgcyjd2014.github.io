window.onload = function() {
	var c = createjs;
	var M = Math;
	var ran = Math.random;
	var oStage = new c.Stage("content-us");
	var mapBox = document.querySelector("#map"); 
	var CanvasWidth = window.innerWidth;
	var CanvasHeight = mapBox.clientHeight;

	var colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2']; // 彩球颜色

	oStage.canvas.width = CanvasWidth * 0.56;
	oStage.canvas.height = CanvasHeight;

    function animate() {
        oStage.update();
        requestAnimationFrame(animate);
    }


    var path = createText();

    ball(path);

    animate();
    function ball( path ) {
        for(var i=0; i<path.length; i++) {
            var circle = new createjs.Shape();
            var r = 3;
            var x = CanvasWidth*ran();
            var y = CanvasHeight*ran();
            var color = colors[Math.floor(ran()*colors.length)];
            circle.alpha = 1;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            // 注意这里不能设置xy  否则Tween 会自动赋值！！！
            circle.originX = path[i].x;
            circle.originY = path[i].y;
            tweenCircle(circle);
            oStage.addChild(circle);
        }
  
    }

    
    
	function tweenCircle(c) {
	if(c.tween) c.tween.kill();
	// 运动对象  运动时间间距  运动位置 xy  运动执行方式

	c.tween = TweenLite.to(c, 0.05, {x: c.originX + M.floor(-0.5+ran()*1) , y: c.originY + M.floor(-0.5+ran()*1), ease:Quad.easeInOut, onComplete: function() {
            tweenCircle(c);
        }});
	}


    // 生成文字，获取文字路径
    function createText() {
    	var textStageW = CanvasWidth;
    	var textStageH = CanvasHeight;
    	var t = "Contect Us";

    	var textPixels = [];
    	var fontSize = 860/(t.length);
        if (fontSize > 160) fontSize = 160;
    	
    	var textStage = new c.Stage("path-text");

    	// 这里颜色一定要设置，不然就getImageData 就无法获取到像素点
    	var text = new c.Text(t, "900 "+ fontSize +"px Arial", "#eee");
    	text.textAlign = 'center';
    	text.x = CanvasWidth * 0.2;
        text.y = CanvasHeight * 0.01;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('path-text').getContext('2d');
        var pixel = ctx.getImageData(0,0,CanvasWidth,200).data;
        
        for( var i = pixel.length; i>=0 ;i-=4 ) {
        	if( pixel[i] != 0 ) {
        		var x = (i / 4) % CanvasWidth;
        		var y = M.floor(M.floor(i/CanvasWidth)/4);

        		// 减少一些像素点
        		if((x && x%6 == 0) && (y && y%6 == 0)) {
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

    document.addEventListener("resize" , function() {
    	console.log(0);
    	mapBox = document.querySelector("#map"); 
		CanvasWidth = window.innerWidth;
		CanvasHeight = mapBox.clientHeight;
		oStage.canvas.width = CanvasWidth * 0.56;
		oStage.canvas.height = CanvasHeight;
    });
}

