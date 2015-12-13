							
							/*--------------------------------------------*\
									  信管创业基地官网 宣传页js
							   		   Design And Build By Owen
							      Github:http://github.com/numerhero
							\*--------------------------------------------*/

window.console && console.log && console.log("%c          ___________             ___     ___\n         /   /       \\           /  /__  /  /__\n        /   /         \\         /_____/ /_____/\n       /    |__________\\       |    _______    |\n      /     |_________|        |_  |_______|  _|\n     /  /|  | | |___| |            |__________\n    /__/ |__| |_______|            |__________| \n \n        __    __                               __\n    ___|  |__|  |___            ___       __  |  | \n   |____   __    ___|          |   |     |  |_|  |__ \n  ___|____|_ _|____|___      __|   |__   |   _    __|\n |_____________________|    |___   ___|  |  | |  |\n   /  ____|___|____  \\         |   |     |  | |__|    _\n /___/  __|   |__  \\___\\   ____|   |__   |  |________| |\n      |___________|       |___________|  |_____________|","color:transparent;text-shadow:0 0 1px rgb(240,107,134);");
window.console && console.log && console.log("\n      欢迎加入信管创业基地 %c 面试时请附上console","font:15px/20px '微软雅黑';  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);-webkit-text-fill-color: transparent;-webkit-background-clip: text; color:red;");

// 开场动画(愿景页)
$(document).ready(function(){
	var oImg  = $(".page1-content img");
	var font1 = $(".page1-content-font1");
 	var font2 = $(".page1-content-font2");
 	var actionBtn = $(".actionBtn"); 

 	oImg.css("transform","translateZ(0) scale(1)");
 	oImg.css("webkTransform","translateZ(0) scale(1)");
 	oImg.css("opacity","1");
 	setTimeout(function(){
 		font1.css("transform","translateY(0px)");
 		font1.css("webkitTransform","translateY(0px)");
 		font1.css("opacity","1");
 	},500)

 	setTimeout(function(){
 		font2.css("transform","translateY(0px)");
 		font2.css("webkitTransform","translateY(0px)");
 		font2.css("opacity","1");
 	},1500);

 	setTimeout(function(){
 		actionBtn.css("transform","translateY(0px)");
 		actionBtn.css("webkitTransform","translateY(0px)");
 		actionBtn.css("opacity","1");
 	},2000);

 	// console.log(screen.availWidth);
 	// console.log(screen.availHeight);

 	// 禁止用户缩放
 	// $(document).on("scroll",scrollFunc);

 	// $(window).on("resize",function(){
 	// 	var h = document.documentElement.clientHeight;
 	// 	console.log(h)
 	// 	$(".page-lists li").height(h);
 	// }); 
      
});  

// logo动画
$(function(){
	var oMoveLogo = $("#move-logo");
	var oLogo = $("[name=logo]");
	var oFonts = $("[name=logo-fonts]");
	oMoveLogo.on("mouseover" , function(){
		oLogo.css("animation","6s movelogo cubic-bezier(0.250, 0.250, 0.000, 1.650) infinite");
		oFonts.each(function(i , value){
			var a = ".75s "+(0.2+(i*0.05))+"s movefont linear alternate";
			$(value).css("animation",".75s "+(0.2+(i*0.05))+"s movefont linear alternate infinite");
		});

		oLogo.css("webkitAnimation","6s movelogo cubic-bezier(0.250, 0.250, 0.000, 1.650) infinite");
		oFonts.each(function(i , value){
			var a = ".75s "+(0.2+(i*0.05))+"s movefont linear alternate";
			$(value).css("webkitAnimation",".75s "+(0.2+(i*0.05))+"s movefont linear alternate infinite");
		});
	});

	oMoveLogo.on("mouseout" , function(){
		oLogo.css("animation","none");
		oFonts.each(function(i , value){
			$(value).css("animation","none");
		});

		oLogo.css("webkitAnimation","none");
		oFonts.each(function(i , value){
			$(value).css("webkitAnimation","none");
		});
	})
});

// 滚轮 + 列表点击 + header切换 + 各页面的开场动画
$(function(){
	var iNow = 0;

	var boff = true;
	var oPageLists = $("#page-lists");
	var oH = $(".page-lists-lis").outerHeight();

	$(window).on("resize" , function(){
		$(".page-lists-lis").css("height" , viewHeight());
		$(".page-lists-lis").css("width" , viewWidth());
		oH = viewHeight();
		oPageLists.css("top",-iNow*oH);
 	});


	// 愿景页
	var oHeaderIcoContent = $('.header-ico-content');
	var oHeaderIcoBg = $('.header-ico-bg');
	var oSlideA = $(".slideborder a");
	var actionBtn = $(".actionBtn");

	$(document).mousewheel(function(event , delta){
		
		// delta 大于0向上 小于0向下
		if(boff)
		{
			boff = false;
			if(delta > 0)
			{
				up();
			}else{
				down();
			}
		}else{
			return;
		}

	});

	function up()
	{
		if(iNow == 0)
		{
			boff = true;
			return;
		}else{
			iNow--;
		}
		
		oPageLists.css("top",-iNow*oH);
		Change();
		Responsive();
		oPageLists.on("transitionend",function(){
			boff = true;
		});
	}

	function down()
	{
		if(iNow == $(".page-lists-lis").length -1 )
		{
			boff = true;
			return;
		}else{
			iNow++;
		}
		oPageLists.css("top",-iNow*oH);
		Change();
		Responsive();
		oPageLists.on("transitionend",function(){
			boff = true;
		});
	}

	oHeaderIcoContent.on("click" , function(){
		if(boff)
		{
			boff = false;
			iNow = oHeaderIcoContent.index($(this));
			oPageLists.css("top",-iNow*oH);
			Change();
			Responsive();
			oPageLists.on("transitionend",function(){
				boff = true;
			});
		}else{
			return;
		}
	});

	oSlideA.on("click" , function(){
		if(boff)
		{
			boff = false;
			iNow = oSlideA.index($(this));
			oPageLists.css("top",-iNow*oH);
			Change();
			Responsive();
			oPageLists.on("transitionend",function(){
				boff = true;
			});
		}else{
			return;
		}
	})

	actionBtn.on("click" , function(){
		if(boff){
			iNow = 1;
			oPageLists.css("top",-iNow*oH);
			Change();
			Responsive();
			oPageLists.on("transitionend",function(){
			boff = true;
		});
		}else{
			return;
		}
		
	})
	

	function Change()
	{
		oHeaderIcoContent.each(function(i , value){
			$(this).removeClass("header-ico-active");
		});
		oHeaderIcoContent.eq(iNow).addClass("header-ico-active");
		
		oHeaderIcoBg.each(function(i , value){
			$(this).removeClass("header-ico-bg-show");
		})
		oHeaderIcoBg.eq(iNow).addClass("header-ico-bg-show");

		oSlideA.each(function(i , value){
			$(this).removeClass("pagecount-active");
		})
		oSlideA.eq(iNow).addClass("pagecount-active");
	}

	// 各个页的响应式开场动画
	function Responsive()
	{
		// 介绍页
		var oIntroduction   = $("#introduction");
		var oLongLine       = $(".long-line");
		// 报名页
		var oEnrollShowList = $("#enroll-show-list");
		var oEnroll       = $("#enroll-3d-show-stage");

		// 发展页
		var oDevelopmentHead= $("#development-head");
		var oDevelopmentList= $("#development-list");

		// 资源页
		var oResource= $("#resource");

		if( iNow == 1)
		{
			setTimeout(function(){
				oIntroduction.css("opacity" , "1");
				oIntroduction.css("transform" , "translateY(0)");
				oIntroduction.css("webkitTransform" , "translateY(0)");
			},800);
			setTimeout(function(){
				oLongLine.css("transform" , "scale(1,1)");
				oLongLine.css("webkitTransform" , "scale(1,1)");
			},1600);
		}
		if( iNow == 2 )
		{
			setTimeout(function()
			{
				oDevelopmentHead.css("opacity" , "1");
				oDevelopmentHead.css("transform" , "translateY(0px)");
				oDevelopmentHead.css("webTransform" , "translateY(0px)");	
			},800);
			setTimeout(function(){
				oDevelopmentList.css("opacity" , "1");
				oDevelopmentList.css("transform" , "translateY(0px)");
				oDevelopmentList.css("webkitTransform" , "translateY(0px)");
			},1600);
		}

		if( iNow == 3 )
		{
			setTimeout(function(){
				oEnroll.css("opacity" , ".7");
				oEnroll.css("transform" , "translateY(0px) scale(1)");
				oEnroll.css("webkitTransform" , "translateY(0px) scale(1)");
			},800);
			setTimeout(function(){
				oEnrollShowList.css("transform" , "scale(1)");
				oEnrollShowList.css("webkitTransform" , "scale(1)");
			},1800)
			
		}

		if( iNow == 4 )
		{
			setTimeout(function(){
				oResource.css("opacity" , "1");
				oResource.css("transform","translateY(0)");
				oResource.css("webkitTransform","translateY(0)");
				
			},1300);
		}
	}
});

function viewHeight() {
	return window.innerHeight || document.documentElement.clientHeight; //兼容标准浏览器和非标准浏览器
}
function viewWidth() {
	return window.innerWidth || document.documentElement.clientWidth; //兼容标准浏览器和非标准浏览器
}

// 报名页
$(function(){
	var moveElements = $(".enroll-show-elements");
	var X = 800;
	var Z = 400;
	var EnrollInow           = 0;
	var oEnrollShowListA     = $(".list-btns");
	var oEnrollShowListTitle = $(".list-btns span");
	var oEnrollShowListI     = $(".list-btns i");

	var enrollShowListArrow  = $(".enroll-show-list-arrow");

	oEnrollShowListA.on("click" , function() {
		var Index = $(this).index();
		if( Index - 1 == EnrollInow )
		{
			return;
		}
		var t = Index - EnrollInow - 1;
		for(var i = 0 ; i < Math.abs(t); i++)
		{
			if(t > 0) {
				nextPage();
			}else {
				lastPage();
			}
		}
	});
	enrollShowListArrow.eq(0).on("click" , function(){
		if(EnrollInow == 0)
		{
			return;
		}
		lastPage();
		
	});

	enrollShowListArrow.eq(1).on("click" , function(){
		if(EnrollInow == moveElements.length - 1)
		{
			return;
		}

		nextPage();
	});


	function lastPage() {
		moveElements.eq(EnrollInow).css("transform" , "translateX("+X+"px) translateZ("+Z+"px) rotateY(-80deg)");
		moveElements.eq(EnrollInow).css("webkitTransform" , "translateX("+X+"px) translateZ("+Z+"px) rotateY(-80deg)");
		
		moveElements.eq(EnrollInow).css("opacity" , "0");
		for(var i = 0; i<EnrollInow; i++)
		{
			moveElements.eq(i).css("transform" , "translateX(-"+(EnrollInow-i-1)*X+"px) translateZ("+Z+"px) rotateY(80deg)");
			moveElements.eq(i).css("webkitTransform" , "translateX(-"+(EnrollInow-i-1)*X+"px) translateZ("+Z+"px) rotateY(80deg)");
		}
		


		EnrollInow--;

		moveElements.eq(EnrollInow).css("transform" , "translateX(0) translateZ(10px) rotateY(0)");	
		moveElements.eq(EnrollInow).css("webkitTransform" , "translateX(0) translateZ(10px) rotateY(0)");	
		
		moveElements.eq(EnrollInow).css("opacity" , "1");

		for(var i =  moveElements.length - 1 ; i>EnrollInow ; i--)
		{
			moveElements.eq(i).css("transform" , "translateX("+ (i - EnrollInow) *X +"px) translateZ("+Z+"px) rotateY(-80deg)")
			moveElements.eq(i).css("webkitTransform" , "translateX("+ (i - EnrollInow) *X +"px) translateZ("+Z+"px) rotateY(-80deg)")
		}
		active();
	}

	function nextPage() {
		for(var i = 0; i<EnrollInow; i++)
		{
			moveElements.eq(i).css("transform" , "translateX(-"+(EnrollInow + 1 -i)*X+"px) translateZ("+Z+"px) rotateY(80deg)");
			moveElements.eq(i).css("webkitTransform" , "translateX(-"+(EnrollInow + 1 -i)*X+"px) translateZ("+Z+"px) rotateY(80deg)");
		}
		moveElements.eq(EnrollInow).css("transform" , "translateX(-"+X+"px) translateZ("+Z+"px) rotateY(80deg)");
		moveElements.eq(EnrollInow).css("webkitTransform" , "translateX(-"+X+"px) translateZ("+Z+"px) rotateY(80deg)");
		
		moveElements.eq(EnrollInow).css("opacity" , "0");

		EnrollInow++;

		moveElements.eq(EnrollInow).css("transform" , "translateX(0) translateZ(10px) rotateY(0)");	
		moveElements.eq(EnrollInow).css("webkitTransform" , "translateX(0) translateZ(10px) rotateY(0)");	
		
		moveElements.eq(EnrollInow).css("opacity" , "1");

		for(var i =  moveElements.length - 1 ; i>EnrollInow ; i--)
		{
			moveElements.eq(i).css("transform" , "translateX("+ (i - EnrollInow) *X +"px) translateZ("+Z+"px) rotateY(-80deg)")
			moveElements.eq(i).css("webkitTransform" , "translateX("+ (i - EnrollInow) *X +"px) translateZ("+Z+"px) rotateY(-80deg)")
		
		}
		active();
	}
	
	function active() {
		oEnrollShowListI.removeClass("active-i");
		oEnrollShowListTitle.removeClass("active-title");

		oEnrollShowListI.eq(EnrollInow).addClass("active-i");
		oEnrollShowListTitle.eq(EnrollInow).addClass("active-title");
	}
});

// 资源页
$(function(){
	
	// 资源列表
	var oShowResourceList= $("#show-resource-list");

	// Ul 控制滚动
	var oUl= $("#show-resource-list ul");

	// 电脑屏幕
	var oShowResourceScreen = $("#show-resource-screen");
	
	// 资源列表Li
	var oShowResourceLis = $(".show-resource-lis");
	var oLisheight = oShowResourceLis.length * (oShowResourceLis.outerHeight() + 8);
	
	// 滚轴按钮
	var oParacllxMousemove = $("#paracllx-mousemove");
	
	// 滚动轴
	var oShowResourceListParacllx = $("#show-resource-list-paracllx");

	// 跳转按钮
	var oResourceButton = $("#resource-button");

	// 复制链接
	var oResourceCloudButton = $("#resource-cloud button");
	var oResourceCloud       = $("#resource-cloud span");

	if(oLisheight > 400)
	{
		var oPercentage =  parseFloat(oShowResourceScreen.height() / oLisheight);
		var oMouseMoveHeight =  oShowResourceListParacllx.height() * oPercentage;

		oParacllxMousemove.css("height" , oMouseMoveHeight);

		oParacllxMousemove.on("mousedown" , function(ev){

			var disY = ev.clientY;
			$(this).css("background" , "#2E6DA4");
			$(document).on("mousemove" , function(ev)
			{
				 var oY=ev.clientY;
				 var oT=disY - oY;
				 var d
				 var old_PmT = parseInt(oParacllxMousemove.css("top"));
				 var old_UlT = parseInt(oUl.css("top"));
				 
				 // 往上拉
				 if(oT > 0)
				 {	
				 	d = 1;
				 }else{
				 	d = -1;
				 }

				 oParacllxMousemove.css("top" , old_PmT-d*2);
				 oUl.css("top" , -(old_UlT+d*2 / oPercentage));
				 
				 if(parseInt(oParacllxMousemove.css("top")) <= 2)
				 {
				 	oParacllxMousemove.css("top" , 2);
				 	oUl.css("top", 10);
				 }else if(parseInt(oParacllxMousemove.css("top")) + parseInt(oParacllxMousemove.css("height"))  >= oShowResourceListParacllx.height()){
				 	oParacllxMousemove.css("top" , oShowResourceListParacllx.height() - oMouseMoveHeight - 2 );
				 	oUl.css("top" , -(oShowResourceListParacllx.height() - oMouseMoveHeight - 2) / oPercentage);
				 }
			});

			$(document).on("mouseup" , function(ev)
			{
				$(document).off("mousemove");
				oParacllxMousemove.off("mouseup");
				oParacllxMousemove.css("background" , "#383B4A");	
			});	
			return false; 
		});
	}else{
		oShowResourceListParacllx.css("display" , "none");
	}
	

	oShowResourceScreen.mousewheel(function(event , delta){
		
		var old_PmT = parseInt(oParacllxMousemove.css("top"));
		var old_UlT = parseInt(oUl.css("top"));

		oParacllxMousemove.css("top" , old_PmT-delta*10);
		oUl.css("top" , ( old_UlT+delta*10/ oPercentage));


		 if(parseInt(oParacllxMousemove.css("top")) <= 2)
		 {
		 	oParacllxMousemove.css("top" , 2);
		 	oUl.css("top", 10);
		 }else if(parseInt(oParacllxMousemove.css("top")) + parseInt(oParacllxMousemove.css("height"))  >= oShowResourceListParacllx.height()){
		 	oParacllxMousemove.css("top" , oShowResourceListParacllx.height() - oMouseMoveHeight - 2 );
		 	oUl.css("top" , -(oShowResourceListParacllx.height() - oMouseMoveHeight - 2 / oPercentage));
		 }
		return false;
	});

	oResourceButton.on("click" , function() {
		window.open("http://pan.baidu.com/s/1mgO1n2g");
	});

	// 复制链接
	new Clipboard('.clip');
});	

// 禁止用户缩放视窗
// function scrollFunc(ev){ 
// 	ev = ev || window.event; 
// 	if(ev.wheelDelta && ev.ctrlKey) //IE/Opera/Chrome 
// 	{
// 		ev.returnValue=false;
// 	}else if(ev.detail && ev.ctrlKey)  //Firefox
// 	{ 
// 		ev.returnValue=false; 
// 	} 
// }  



