---
layout: post
title: '浏览器从输入URL到页面展现都经过了什么'
author: 庞云龙
description: HTTP
bgpic: https://farm5.staticflickr.com/4906/45209290884_0cc9f4afa9_o.jpg
category: other 
---
# 浏览器从输入URL到页面展现都经过了什么 #

1. 在浏览器输入URL地址
2. 浏览器查看缓存,如果请求资源在缓存中且资源为最新,跳转到转码步骤
	1. 如果浏览器未缓存,发出新请求;
	2. 如果已缓存,且资源不为最新,则向服务器进行验证;
	3. 检验信息是否为最新,有两个HTTP头进行控制Expires和Cache-control:
		1. http1.0提供Expires,值为一个绝对时间表示缓存最新日期
		2. http1.1增加了Cache-control:max-age=,值为以秒为单位的最大最新时间
3. 浏览器解析URL获取协议,主机,端口,PATH
4. 浏览器组装一个HTTP(GET)请求报文
5. 浏览器获取主机ip地址,过程如下
	1. 浏览器缓存
	2. 本机缓存
	3. hosts文件
	4. 路由器缓存
	5. ISP DNS缓存
	6. DNS递归查询(可能存在负载均衡导致每次IP不一样)
6. 打开一个socket与目标IP地址,端口建立TCP链接,三次握手如下
	1. 客户端发送一个TCP的SYN=1,Seq=X的包到服务器端口
	2. 服务器发回SYN=1,ACK=X+1,Seq=Y的响应包
	3. 客户端发送ACk=Y+1,Seq=z
7. TCP链接建立后发送HTTP请求
8. 服务器接收请求并解析,将请求转发到服务程序,如虚拟主机实用HTTP Host头部判断请求的服务程序
9. 服务器检查HTTP请求头是否包含缓存验证信息(如果缓存验证信息为最新,返回304等对应状态码)
10. 处理程序读取完整请求并准备HTTP响应,可能需要查询数据库等操作
11. 服务器将响应报文通过TCP连接发送回浏览器
12. 浏览器接收HTTP响应,然后根据情况选择关闭TCP连接或者保留重用,关闭TCP链接的四次握手如下
	1. 主送方发送Fin=1,Ack=z,Seq=x报文
	2. 被送方发送ACK=x+1,Seq=z报文
	3. 被送方发送Fin=1,Ack=x,Seq=y报文
	4. 主送方发送ACk=y,Seq=x报文
13. 浏览器检查响应状态码:是否为1xx,3xx,4xx,5xx,这些情况与2xx不同
14. 如果资源可缓存,进行缓存
15. 对响应进行解码(例如zip压缩)
16. 根据资源类型决定如何处理(假设资源为HTML文档)
17. 解析HTML文档,构建DOM树,下载资源,构造CSSOM树,执行js脚本,这些操作没有严格的先后顺序,
18. 构建DOM树
	1. Tokenizing:根据HTML规范将字符解析为标记
	2. Lexing:词法分析将标记转换为对象并定义属性和规则
	3. DOM construction:根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片,样式表,js文件,启动下载
20. 构建CSSOM树
	1. Tokenizing 字符流转换为标记流
	2. Node:根据标记创建节点
	3. CSSOM:节点创建CSSOM树
21. 根据DOM树和CSSOM树构建渲染树
	1. 从DOM树的根节点遍历所有可见节点,不可见节点包括:1)script,meta这样本身不可见的标签,2)被css隐藏的节点(如:display:none;)
	2. 对每一个可见节点,找到恰当的CSSOM规则并应用
	3. 发布可视节点的内容和计算样式
22. js解析如下
	1. 浏览器创建Document对象并解析HTML,将解析到的元素和文本节点添加到文档中,此时document.readystate为loading
	2. HTMl解析器遇到没有async和defer的script时,将他们添加到文档中,然后执行行内或外部脚本.这些脚本会同步执行,并且在脚本下载和执行时解析器会暂停,这样就可以用document.write()将文本插入到输入流中,同步脚本经常简单定义函数和注册事件处理程序,他们可以遍历和操作script和他们之前的文档内容
	3. 当解析器遇到设置了async属性的script时,开始下载脚本并继续解析文档,脚本会在它下载完成后尽快执行,但是解析器不会停下等他下载,异步脚本进制实用document.write(),他们可以访问自己script和之前的文档元素
	4. 当文档完成解析,document.readystate变成interactive
	5. 所有defer脚本会按照在文档出现的顺序执行,延迟脚本能访问完整文档树,禁止使用document.write()
	6. 浏览器在document对象上触发DOMcontentloaded事件
	7. 此时文档完全解析完成,浏览器可能还在等待如图片等内容加载,等这些内容完成载入并且所有异步脚本完成载入和执行,document.readystate变为complete.window触发load事件
23. 显示页面(HTML解析过程中会逐步显示页面)
## HTTP request报文结构是怎样的 ##
rfc2616中进行了定义

1. 首行是Request-Line:请求方法,请求URL,协议版本,CRLF
2. 首行之后是若干行请求头,包括general-header,request-header或者entity-header,每个一行以CRLF结束
3. 请求头和消息实体之间有一个CRLF分隔
4. 根据实际请求需要可能包含一个消息实体 一个请求报文例子如下

    GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1

    Host:www.w3.org

    Connection:keep-alive

    Cache-Control:max-age=0

    Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8

    User-Agent:Mozilla/5.0(windows NT 6.1;WOW64)AppleWebKit/537.36(KHTML,like Gecko) Chrome/35.0.1916.153 Safari/53

    Referer:https://www.google.com.hk/

    Accept-Language:zh-CN,zh;q=0.8,en,q=0.6

    Cookie:authorstyle=yes

    If-None-Match:"2cc8-3e3073913b100"

    If-Modified-Since:wed,01 Sep 2004 13:24:52 GMT
    
    name = qiu && age = 25

## HTTP response报文结构是怎样的 ##
rfc2616中定义内容

1. 首行是状态行包括:HTTP版本,状态码,状态描述,后面跟一个CRLF
2. 首行之后是若干行响应头,包括:通用头部,响应头部,实体头部
3. 响应头部和响应实体之间用一个CRLF空行分隔
4. 最后是一个可能的消息实体 响应报文例子如下
    
    HTTP/1.1 200 OK
    
    Date:Tue,08 Jul 2014 05:28:43 GMT
    
    server:Apache/2
    
    Last-Modified:wed,01 Seq 2004 13:24:52 GMT
    
    ETag :"40d7-3e3073913b100"
    
    Accept-Ranges:bytes
    
    Content-Length:16599
    
    Cache-Control:max-age=21600
    
    Expires:Tue,08 Jul 2014 11:28:43 GMT
    
    P3P:policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
    
    Content-Type:text/html;charset=iso-8859-1
    
    {"name":"qiu","age":25}