						/*--------------------------------------------*\

						   		   Design And Build By Owen
						      Github:http://github.com/numerhero

						\*--------------------------------------------*/

window.console && console.log && console.log("%c          ___________             ___     ___\n         /   /       \\           /  /__  /  /__\n        /   /         \\         /_____/ /_____/\n       /    |__________\\       |    _______    |\n      /     |_________|        |_  |_______|  _|\n     /  /|  | | |___| |            |__________\n    /__/ |__| |_______|            |__________| \n \n        __    __                               __\n    ___|  |__|  |___            ___       __  |  | \n   |____   __    ___|          |   |     |  |_|  |__ \n  ___|____|_ _|____|___      __|   |__   |   _    __|\n |_____________________|    |___   ___|  |  | |  |\n   /  ____|___|____  \\         |   |     |  | |__|    _\n /___/  __|   |__  \\___\\   ____|   |__   |  |________| |\n      |___________|       |___________|  |_____________|","color:transparent;text-shadow:0 0 1px rgb(240,107,134);");
window.console && console.log && console.log("\n      欢迎加入信管创业基地 %c 面试时请附上console","font:15px/20px '微软雅黑';  background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);-webkit-text-fill-color: transparent;-webkit-background-clip: text; color:red;");

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


// 列表点击
$(function(){

});
