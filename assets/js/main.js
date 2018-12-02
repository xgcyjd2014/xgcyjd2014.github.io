							/*--------------------------------------------*\
																																																																	  	  信管创业基地 main.js
																																																															   		   Design And Build By 倪云港
																																																															   		   Email: yungangni@gmail.com
																																																															     Github: http://github.com/niyungang
																																																															\*--------------------------------------------*/

							//鼠标点击特效
							function beautiful() {
							    var html = document.getElementsByTagName("html")[0];
							    var body = document.getElementsByTagName("body")[0];

							    html.onclick = function(e) {
							        var b = document.createElement("b");
							        b.innerHTML = "❤";
							        body.append(b);

							        var x = e.pageX - 5;
							        var y = e.pageY - 20;

							        var n = Math.floor(Math.random() * 14 + 8);

							        b.style.zIndex = 2;
							        b.style.position = "absolute";
							        b.style.left = x + "px";
							        b.style.top = y + "px";
							        b.style.color = "red";
							        b.style.fontSize = n + "px";
							        b.style.userSelect = "none";

							        setTimeout(function() {
							            b.style.top = (y - 160) + "px";
							            b.style.opacity = "0";
							            b.style.transition = "1.6s";
							        }, 1)
							    }
							}
							beautiful();


							// 来自东方的神秘力量
							window.console && console.log && console.log([
							    "                   _ooOoo_",
							    "                  o8888888o",
							    "                  88\" . \"88",
							    "                  (| -_- |)",
							    "                  O\\  =  /O",
							    "               ____/`---'\\____",
							    "             .'  \\\\|     |//  `.",
							    "            /  \\\\|||  :  |||//  \\",
							    "           /  _||||| -:- |||||-  \\",
							    "           |   | \\\\\\  -  /// |   |",
							    "           | \\_|  ''\\---/''  |   |",
							    "           \\  .-\\__  `-`  ___/-. /",
							    "         ___`. .'  /--.--\\  `. . __",
							    "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
							    "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
							    "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
							    "======`-.____`-.___\\_____/___.-`____.-'======",
							    "                   `=---='",
							    "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
							    "         佛祖保佑       永无BUG"
							].join('\n'));