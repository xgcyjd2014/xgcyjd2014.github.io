var FZFVIDEO = 
	'<div id="fz-videoBox">'+
		'<div class="fz-loading">'+
			'<div id="bfBtn" style="visibility:hidden;opacity:0;">'+
				'<div class="spinner">'+
				  	'<div class="rect1"></div>'+
				  	'<div class="rect2"></div>'+
				  	'<div class="rect3"></div>'+
				  	'<div class="rect4"></div>'+
				  	'<div class="rect5"></div>'+
				'</div>'+
				'<div id="sptxt">'+
					'msg...'+
				'</div>'+
			'</div>'+
		'</div>'+
		'<video src="" id="fz-videoAct"></video>'+
		'<div id="videoState">'+
			'<div id="videoStateBox">'+
				'<div id="playOrStop">'+
					'<i class="iconfont" id="playIcon">&#xe600;</i>'+
				'</div>'+
				'<div id="currentTimeBox">'+
					'<span id="currentTimers">0:00</span>'+
					'<span>/</span>'+
					'<span id="allTimers">0:00</span>'+
				'</div>'+
				'<div id="percentage">'+
					'<div id="currentPerc">'+
					'</div>'+
					'<div id="currentPercentage">'+
					'</div>'+
					'<div id="currentAll">'+
					'</div>'+
					'<div id="currentBG">'+
					'</div>'+
				'</div>'+
				'<div id="videoSpeed">'+
					'<div class="videoBoxRe">'+
						'<i class="iconfont">&#xe603;</i>'+
						'<ul id="videoSpeedList">'+
							'<li class="videoSpeedStup" id="bs4">2.5倍</li>'+
							'<li class="videoSpeedStup" id="bs3">2.0倍</li>'+
							'<li class="videoSpeedStup" id="bs2">1.5倍</li>'+
							'<li class="videoSpeedStup" id="bs1">默认</li>'+
						'</ul>'+
					'</div>'+
				'</div>'+
				'<div id="videoSound">'+
					'<div id="videoSoundBox">'+
						'<i class="iconfont" id="videoSoundStop">&#xe605;</i>'+
						'<div id="soundBar">'+
							'<div id="currentSound">'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>';

function createVideo(dn,obj){
	//节点池
	var fzPools = {

	}

	//点击后停止现实缓冲动画标记
	var hcqStop = 0;

	//获取节点
	this.D		= function(dms){
		var dom_	= document.getElementById(dms);
		return dom_;
	}

	//设置播放器地址
	this.setUrl		= function(url){
		this.D('fz-videoAct').src = url;
	}

	//初始化播放器属性
	this.init		= function(){
		//设置播放器地址
		this.setUrl(obj.url);

		//判断是否自动播放
		if(obj.autoplay){
			this.videoDOM.autoplay = true;
		} else {
			this.videoDOM.autoplay = false;
		}

		//容器点击事件
		fzPools.VIDEO_DOM.onclick = function(){
			stopOrplay();
		}

		//时间改变事件
		fzPools.VIDEO_DOM.ontimeupdate = function(){
			if( fzPools.VIDEO_DOM.paused ){
				fzPools.playIcon.innerHTML = "&#xe602";
			} else {
				fzPools.playIcon.innerHTML = "&#xe600";
			}
			fzPools.work.style.width 	= videoCurrentTime() + "%";
			fzPools.work2.style.width 	= videoCurrentTime() + "%";
			fzPools.currentTm.innerHTML = timeConversion(parseInt(fzPools.VIDEO_DOM.currentTime));
			fzPools.allTime.innerHTML 	= timeConversion(parseInt(videoAllTime()));
			if( hcqStop == 0 ){
				var hcq  = parseInt((fzPools.VIDEO_DOM.buffered.end(0) / videoAllTime()).toFixed(2) * 100);
				fzPools.currentBG.style.width = hcq + "%";
			} else {
				fzPools.currentBG.style.width = 100 + "%";
			}
		}

		//缓冲暂停事件
		fzPools.VIDEO_DOM.onwaiting = function(){
			openLoading("on","加载中");
		}

		//缓冲完毕继续播放事件
		fzPools.VIDEO_DOM.onplaying = function(){
			openLoading("off");
		}

		//音量改变事件
		fzPools.VIDEO_DOM.onvolumechange = function(){
			var soundSize 		= fzPools.VIDEO_DOM.volume;
			var soundBarWidth 	= getDomWidth('soundBar') * soundSize;
			fzPools.soundBar.style.width = soundBarWidth + "px";
		}

		//进度条点击事件
		fzPools.percentage.onclick	= function(){
			var widthCurr 	= mouseCurrentX('percentage')/getDomWidth('percentage');
			fzPools.VIDEO_DOM.currentTime = videoAllTime() * widthCurr;
			hcqStop = 1;
		}

		//播放按钮
		fzPools.playOrStop.onclick = function(){
			if( fzPools.VIDEO_DOM.paused ){
				fzPools.VIDEO_DOM.play();
				fzPools.playIcon.innerHTML = "&#xe600";
			} else {
				fzPools.VIDEO_DOM.pause();
				fzPools.playIcon.innerHTML = "&#xe602";
			}
		}

		//音量调节
		fzPools.soundBarBox.onclick = function(){
			var soundBarWidth 	= getDomWidth('soundBar');
			var clickWidth 		= mouseCurrentX('soundBar');
			fzPools.VIDEO_DOM.volume = clickWidth/soundBarWidth.toFixed(2);
			
		}

		//音量按钮
		fzPools.vSoundStop.onclick = function(){
			if( fzPools.VIDEO_DOM.muted ){
				fzPools.VIDEO_DOM.muted = false;
				fzPools.VIDEO_DOM.volume = 0.99;
				fzPools.vSoundStop.innerHTML = '&#xe605;';
			} else {
				fzPools.VIDEO_DOM.muted = true;
				fzPools.VIDEO_DOM.volume = 0;
				fzPools.vSoundStop.innerHTML = '&#xe604;';
			}
		}
		//倍速按钮
		fzPools.bs1.onclick = function(){
			fzPools.VIDEO_DOM.playbackRate = 1;
		}
		fzPools.bs2.onclick = function(){
			fzPools.VIDEO_DOM.playbackRate = 1.5;
		}
		fzPools.bs3.onclick = function(){
			fzPools.VIDEO_DOM.playbackRate = 2;
		}
		fzPools.bs4.onclick = function(){
			fzPools.VIDEO_DOM.playbackRate = 2.5;
		}
	}

	//创建播放器
	this.createDom  = function(){
		if( this.D("fz-videoBox") == null ){
			this.D(dn).innerHTML 	= FZFVIDEO;
			this.videoDOM 			= this.D("fz-videoAct");
			saveDom();
			this.init();
		} else {
			console.log("播放器节点已存在");
			return;
		}
	}

	//销毁实例
	this.overVideo = function(){
		var ovDom = document.getElementById(dn);
		var childs = ovDom.childNodes;
		var  length = childs.length;
		for( var i = 0; i < length; i++ ){
			ovDom.removeChild(childs[0]);
		}
		FZ_VIDEO = '';
	}
/*--------------------------------------方法-------------------------------------*/
	//将节点存入节点池
	function saveDom(){
		fzPools.VIDEO_DOM 	= document.getElementById("fz-videoAct");
		fzPools.work 		= document.getElementById("currentPercentage");
		fzPools.work2 		= document.getElementById("currentPerc");
		fzPools.currentTm   = document.getElementById("currentTimers");
		fzPools.allTime 	= document.getElementById("allTimers");
		fzPools.percentage 	= document.getElementById("percentage");
		fzPools.playOrStop	= document.getElementById("playOrStop");
		fzPools.playIcon 	= document.getElementById("playIcon");
		fzPools.bfBtn 		= document.getElementById("bfBtn");
		fzPools.sptxt 		= document.getElementById("sptxt");
		fzPools.soundBarBox = document.getElementById("soundBar");
		fzPools.soundBar  	= document.getElementById("currentSound");
		fzPools.vSoundStop 	= document.getElementById("videoSoundStop");
		fzPools.currentBG   = document.getElementById("currentBG");
		fzPools.bs1 		= document.getElementById("bs1");
		fzPools.bs2 		= document.getElementById("bs2");
		fzPools.bs3 		= document.getElementById("bs3");
		fzPools.bs4 		= document.getElementById("bs4");
	}

	//获取元素的宽度
	function getDomWidth(dmNm){
		var ddmm 	= document.getElementById(dmNm);
		return parseInt(ddmm.width||ddmm.offsetWidth||ddmm.clientWidth);
	}

	//计算鼠标相对元素X坐标
	function mouseCurrentX(dmNm,event){
		var e = event || window.event;
		var ddmm = document.getElementById(dmNm);
		var p_Left  = parseInt(ddmm.getBoundingClientRect().left);
		return e.clientX - p_Left;
	}

	//计算鼠标相对元素Y坐标
	function mouseCurrentY(dmNm,event){

	}
	//播放或暂停
	function stopOrplay(state){
		switch (state){
			case "play":
				fzPools.VIDEO_DOM.play();
				break;
			case "stop":
				fzPools.VIDEO_DOM.pause();
				break;
			default:
				if(fzPools.VIDEO_DOM.paused){
					fzPools.VIDEO_DOM.play();
				} else {
					fzPools.VIDEO_DOM.pause();
				}
				break;
		}
	}

	//当前播放进度
	function videoCurrentTime(){
		return (fzPools.VIDEO_DOM.currentTime / videoAllTime()).toFixed(3) * 100;
	}

	//视频总时长
	function videoAllTime(){
		return fzPools.VIDEO_DOM.duration;
	}

	//秒数转时分秒
	function timeConversion(tim){
		var second  = tim % 60;				// 秒
		var min 	= parseInt(tim / 60);	// 分 
		return (Array(2).join(0)+min).slice(-2) + ':' + (Array(2).join(0)+second).slice(-2);
	}

	//打开或关闭加载
	function openLoading(states,msg){
		if( states == "on" ){
			fzPools.bfBtn.style.visibility = "visible";
			fzPools.bfBtn.style.opacity = "1";
			fzPools.sptxt.innerHTML = msg;
		} else {
			fzPools.bfBtn.style.visibility = "hidden";
			fzPools.bfBtn.style.opacity = "0";
			fzPools.sptxt.innerHTML = '';
		}
	}
	this.createDom();
}