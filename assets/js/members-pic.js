										/*--------------------------------------------*\
														xgjd members-pic js
										   		   Design And Build By Owen
										      Github:http://github.com/numerhero

										\*--------------------------------------------*/
/* 对应文件夹名 22 */ 
var oMembersInfo = [
	{
		"name" : "AllenYang", 
		"duties" : "2014基地总负责人",
		"introduction" : "介绍"
	},{
		"name" : "Owen",
		"duties" : "前端组成员",
		"introduction" : "喜欢研究新技术"
	}];

iNow      = 0;
/* 图片选择列表加载 */
$(function () {
	var oMembersPicsList = $("#members-pics-list");
	var oShowPic  = $("#show-pic");
	var oBHeight = 10;
	
	// 加载小头像列表
	oMembersPicsList.loadTallPics( oMembersInfo );

	// 加载屏幕效果
	var screenEffect = oShowPic.loadPicInit();
	screenEffect.createFrameWork( oMembersInfo , 630/oBHeight );
	
	// 挂载点击函数
	var oLis = $("#members-pics-list>li");
	oLis.each(function (idx , value) {
		var $self = $(this);
		$self.on("click" , function() {
			screenEffect.clickHandle( oMembersInfo , idx );
		});
	});

});

$.fn.loadPicInit = function () {
	var $self = $(this);

	return ({
		createFrameWork: function ( obj , bnum ) {
			var oTop = $window.scrollTop();
			$.each( obj , function ( idx , value ) {
				var aLi = $('<li></li>').appendTo($self);
				var aDiv = $('<div></div>').appendTo(aLi);
				for( var i = 0 ; i<bnum ; i++ ) {
					var aB = $('<b data-load="false"></b>').appendTo(aDiv);
				}
			});
			this.scrollTopEffect( obj , 0 );
		},	
		show: function ( obj , shoX ) {
			var oB = $("#show-pic li:eq("+ shoX +") div b");
			oB.each(function (idx , value) {
				var $selfB = $(value);
				var boff   = $selfB.attr("data-load");
				if(!!boff) {
					$selfB.attr("data-load" , "true");
					$selfB.css("background","url(/assets/img/members-pic/members-pics/"+ obj[shoX]["name"] +"/"+ obj[shoX]["name"] +".png)");
					$selfB.css("backgroundPosition","0% -"+ idx*0.1 + "rem");
					$selfB.css("transition" , "0.35s "+ idx*0.045 +"s ease-out");	
				}
				setTimeout(function() {	
					$selfB.css("opacity" , "1");
				} , 20);
				iNow = shoX;
			});
		},
		clickHandle: function ( obj , thisIdx ) {
			if(thisIdx === iNow) {
				return;
			};
			var hidX = iNow;
			iNow = thisIdx;
			var oB = $("#show-pic li:eq("+ hidX +") div b");
			oB.each(function (idx , value) {
				var $selfB = $(value);
				$selfB.css("opacity" , "0");
			});
			this.show( obj , thisIdx );
		},
		scrollTopEffect: function ( obj , shoX ) {
			var mySelf = this;
			$window.on("scroll.PicsShow" , function() {
				var oTop = $window.scrollTop();
				if( oTop > $self.offset().top - $self.outerHeight() * 0.2 ) {
					$window.off("scroll.PicsShow");
					console.log(mySelf);
					mySelf.show( obj , 0 );
				}
			});
		}
	});
}

$.fn.loadTallPics = function ( obj ) {	
	var $self = $(this);
	
	return ({
		createFrameWork: function () {
			$.each( obj , function ( idx , value ) {
				var aLi = $('<li><div class="members-pics-mask clear-select"><h1>'+ value["name"] +'</h1><h1>'+ value["duties"] +'</h1></div></li>').appendTo($self);
				aLi.css("background" , "url(/assets/img/members-pic/members-pics/"+ value["name"] +"/"+ value["name"] +"-tall-pic.png) no-repeat")
				aLi.css("backgroundSize" , "cover");
				aLi.css("opacity" , "0");
				if( idx == 10) {
					$('<p id="special" class="clear-select"><span class="st1 text-stress">基地成员</span> <span class="st2 text-stress">Members</span></p>').appendTo($self);
				}
			});
			this.show();
		},
		show: function () {
			var oTop = $window.scrollTop();

			if( oTop > $self.offset().top - $self.outerHeight() * 0.2) {
				$window.off("scroll.TallPicsShow" , this.show);
				$("#members-pics-list li").each(function (idx , value) {
					var ValueSelf = $(value);
					ValueSelf.css("transition" , "1s "+ idx*0.1 +"s linear");
					ValueSelf.css("opacity" , "1");
					
					if( idx == 10 ) {
						var oP = $("#special");
						oP.css("transform" , "translateZ(0) scale(1)")
						oP.css("transition" , "1.3s 1s ease-in");
						oP.css("opacity" , "1");
					}
				});		
			}
		},
		init: function () {
			this.createFrameWork();
			$window.on("scroll.TallPicsShow" , this.show);
		}
	}.init());
}


