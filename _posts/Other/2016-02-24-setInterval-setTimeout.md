---
layout: post
title: setInterval解决使用函数名作为调用句柄时不能带参数问题
author: AllenYang
tagpic: js.jpg
description: 从今日起正式开始写博客，每日一篇，聊一聊技术，谈谈诗和远方
category: other
---
刚刚写了一个小demo，发现了一个奇怪的现象,setInterVal(fn(a),1000)，setInterVal函数参数列表的fn带上参数后，竟然无法使用了！！

这个问题，以前从来没有注意过，setInterval参数列表中的fn只能使用函数名调用，但是有的时候，fn函数必须要能够传参,于是便写了这篇博客总结一下:

## 方法一(推荐)

	window.setInterval(function(){
		fn(id);
	},1000); 

先来看一下原理，setInterval的参数列表中的函数是一个匿名函数，而在这个匿名函数中调用fn

这种方法最为简单，易记。



## 方法二

	function foo(id)
	{
		alert(id);
	}
	function _foo(id)
	{
		return function(){foo(id);}
	}
	window.setInterval(_foo(id),1000); 


## 方法三

	function foo(id)
	{
		alert(id);
	}
	var _sto = setInterval;
	window.setInterval = function(callback,timeout,param)
	{
		var args = Array.prototype.slice.call(arguments,2);
		var _cb = function()
		{
		callback.apply(null,args);
		}
		_sto(_cb,timeout);
	}
	window.setInterval(hello,3000,userName); 


























