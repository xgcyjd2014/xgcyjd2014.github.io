										/*--------------------------------------------*\
														xgjd members-pic js
										   		   Design And Build By Owen
										      Github:http://github.com/numerhero

										\*--------------------------------------------*/
/* 图片加载特效 */ 
$(function() {
	var iNow      = 0;
	var oLiHeight = 10;
	var membersName = ["Owen", "AllenYang"];
	var oShowPic  = $(".show-pic");

	for( var i = 0 ;i<membersName.length; i++) {
		$("<li><div></div></li>").appendTo(oShowPic);
	}
	var oLiDivs      = $(".show-pic li>div");

	// oLiDivs.loadPicInit( 630/oLiHeight );
});

$.fn.loadPicInit = function( num ) {
	return this.each(function( idx , value ) {
		var $this = $(value);

		return ({
			createFrameWork: function() {

				for(var i = 0; i<num ;i++) {
					$("<b></b>").appendTo($this);
				}
			},
			loadpic: function() {
				// var 
			}
		}.createFrameWork());
	});
}


/* 图片动态 */
$(function() {
	var omembersPics = $(".members-pics li");
	
});


