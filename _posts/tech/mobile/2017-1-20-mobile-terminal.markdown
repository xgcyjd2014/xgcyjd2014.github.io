---
layout: post
title: 移动端de坑(一)
author: Owen
tagpic: mobile.jpg
description: 如何使用微信端打开内网开发页面？
category: mobile
keywords: 技术,mobile
---

## 移动端de坑(一)

### 如何使用微信端打开内网开发页面？

使用微信检测时，由于在内网环境，非百度自家应用，会无法打开页面，导致被重定向到 404 （或者显示活动已结束） ，如果不使用内网，则无法访问 rd 的计算机

手机微信 -> 访问rd计算机 -> 无法识别被重定向到其他页面

所以，需要 使用抓包工具 fiddler & Charles(和fiddler 一样也是抓包工具，颜值较高) 设置代理

原理是

手机微信 ->  fiddler  ->  识别rd地址 -> 转发网关到rd 计算机 -> 页面返回到fiddler -> fiddler将页面返回给手机微信

最后可以成功打开页面

### 入坑

虽然能够成功打开页面，但是页面中的 a 链接无法进行跳转，这是什么原因呢？

经过分析，原来由于手机微信 和 rd 计算机之间是进行的https通信，
fiddler 如果需要截获 手机和 rd机 之间的 https 通信，会起到一个中间人的作用

1. fiddler 和 服务端 fiddler使用自己生成一个 对等密钥进行正常的https通信（首先也会完成对服务器端CA 证书检验，对等密钥交换等过程） 

2. fiddeler 和 手机端 之间建立独自的https 连接，fiddler 使用自己的 CA 证书与手机端通信，手机端产生的对等密钥被fiddler截获进行通信

因此问题就出来了，由于手机端没有装 fiddler CA 证书，会对来自fiddler的信息产生怀疑，并进行保护，所以来自fiddler 提供的页面的a 链接都无法被点击跳转。

解决方案：fiddler 或 Charles 手机上安装CA证书

当然，这个是不会影响线上用户的使用的，但是，在QA 不懂的情况下，会将这个提成BUG 反馈。在FE 不懂的情况下，会抓狂半天。

### fiddler 的好处

fiddler 可以使用autoResponder 对通信的信息进行修改，例如我们可以使用本地的代码进行线上替换，或者是copy 线上的js代码到本地，然后进行替换。这样我们就能够动态的在本地修改调试线上的js代码