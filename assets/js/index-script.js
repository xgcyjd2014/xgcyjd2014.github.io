							
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

 	})
	// 愿景页
	var oHeaderIcoContent = $('.header-ico-content');
	var oHeaderIcoBg = $('.header-ico-bg');
	var oSlideA = $(".slideborder a");
	var actionBtn = $(".actionBtn");

	// 报名页
	var oEnrollShowList = $("#enroll-show-list");
	var oEnrollBg       = $("#enroll-bg");

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
		enrollResponsive();
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
			enrollResponsive();
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
			enrollResponsive();
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

	// 报名页开场动画
	function enrollResponsive()
	{
		if( iNow == 3 )
		{
			setTimeout(function(){
				oEnrollBg.css("opacity" , ".7");
				oEnrollBg.css("transform" , "translateX(0px) scale(1)");
				oEnrollBg.css("webkitTransform" , "translateX(0px) scale(1)");
			},800);
			setTimeout(function(){
				oEnrollShowList.css("transform" , "scale(1)");
				oEnrollShowList.css("webkitTransform" , "scale(1)");
			},1800)
			
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
	var EnrollInow = 0;

	var enrollShowListArrow = $(".enroll-show-list-arrow");

	enrollShowListArrow.eq(0).on("click" , function(){
		if(EnrollInow == 0)
		{
			return;
		}

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
	});

	enrollShowListArrow.eq(1).on("click" , function(){
		if(EnrollInow == moveElements.length - 1)
		{
			return;
		}

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
	});

});


// 禁止用户缩放视窗
function scrollFunc(ev){ 
	ev = ev || window.event; 
	if(ev.wheelDelta && ev.ctrlKey) //IE/Opera/Chrome 
	{
		console.log(1);
		ev.returnValue=false;
	}else if(ev.detail && ev.ctrlKey)  //Firefox
	{ 
		ev.returnValue=false; 
	} 
}  