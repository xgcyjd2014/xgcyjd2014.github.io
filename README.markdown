
# 信管创业基地官方文档

## [点击访问 &rarr;](http://xgcyjd.com)

## 各版本特性

#### Version 1.0

* 重新设计、亦是从心设计。
* 展示页参考 [腾讯官网](https://www.tencent.com/zh-cn/index.html) 的页面风格，视觉效果与用户体验更佳。
* 化简为繁、简化逻辑。基地官网主要功能为阅读文章，将文章直接放置在首页中，按需翻页，效率更高。
* 文章列表参考 [腾讯ISUX](https://www.tencent.com/zh-cn/index.html) 的卡片风格，更加清新自然、赏心悦目。
* 网站底部信息板块参考 [segmentfault](https://segmentfault.com/) 的设计方案，并使用暗色格调，效果更加正式与官方。
* 合适位置使用流光效果，色彩不再单一乏味、页面效果更加丰富多彩。
* 全站使用鼠标点击特效，提高用户体验与观赏趣味。
* 文章阅读页面参考 Clean Blog 风格，减少不必要的视觉阻碍，阅读文章一气呵成。
* 自从多说停止服务后友言评论系统加载十分缓慢与不稳定，考虑到Disqus对与国内用户体验不太友好，经多次调查与测试决定更改为来必力，提高用户体验。
* 网站新增 了解我们 页。内容上包含宣传视频、基本介绍、百度地图、加入我们。设计上采用全屏翻滚效果，配合里面所包含的内容，能带来强烈视觉冲击。
* 培养方案包含项采用色块风格，色彩活泼。点击与展示效果采用位置弹出风格，用户体验更佳。
* 其他细节

## 说明文档

全站基于jekyll 语法，在根目录下有一个名为`index.html` 的首页，而其他的页面则放在`pages`文件夹

本站所有的css 都在 `/assets/css/` 中
本站所有的js  都在 `/assets/js/`  中

_config.yml 是本站的配置文件，已经配置完成，如需要folk 参考 请自行修改

_includes   包含一些重复且公用的html 布局，写好后直接 使用liquid命令`{% include xxx.html %}` 就能包含到一个页面中去

_layouts    包含一些基础且重要的布局，例如base.html 中包含了各个页面中所需的header 和 footer ，只要需要公用的header 和 footer 布局的页面 在开头使用`layout base` 就能将内容套入base.html 中

_posts      包含全部撰写的文章，下面我们再细说

_drafts     草稿文件夹，是被写入gitignore 中的文件夹，用于存放草稿，如果需要可以自己在根目录下新建一个文件用于存放草稿

.gitignore  是github 的配置文件，是命令github忽略上传的文件名列表

ie.html     是IeFucker |  lt Ie11 用户浏览器版本低于Ie11 的禁止访问

sitemap     是配置SEO 的文件

Rouge.css   高亮css脚本，控制高亮颜色，熊孩儿莫动~


# css、js 私有化

每一个需要base.html公用布局 的页面都有一套自己的私有css 和 js<br/>

文件路径是根据jekyll语法判断，所以一定要保证私有的css 和 js 文件名要与 html 相同

例如：<br/>
index.html<br/>
index.css<br/>
index.js<br/>

还有一些页面需要引入一些特殊的plugin 的<br/>

例如：<br/>
`easel.js`

这些与公有的Jquery无联系，就直接在页面的底部直接引用，以保证私有化 

# 撰写博文

如需撰写博文，首先和我（倪云港）提交一个固定的作者名（中英文）

每次编写博文之前，需要填写一些简单文章信息

---<br/>
layout: post <br/>
title: HelloWorld <br/>
author: 倪云港 <br/>
tagpic: helloworld.jpg <br/>
description: 用心铸造卓越Offer <br/>
category: other <br/>
---<br/>


layout      : 命令博文基于 post 布局，将写好的文章嵌入post.html 中<br/>
title       : 文章标题<br/>
author      : 作者名称（作者姓名开头大写）<br/>
tagpic      : 文章配图名（__包含后缀名称__）<br/>
description : 关于文章的简单描述（最好简单详细 20到400之间不等）<br/>
category    : 文章类型（如不清楚分类，可缺省为other类）<br/>

__以上都是必须填写__

文章配图最好将图片裁切成 280 * 250（设置了自动调节），裁切好的图片添加到`/assets/img/index/post-list-imgs`文件夹<br/>
类型名称一定要统一且正确（关系到css类名匹配）<br/>
例如：

css<br/>
html<br/>
js<br/>
other<br/>

等等

如果有需要添加新的文章类型，直接来告诉我就行。

博文撰写就比较自由了，基于markdown 语法（不熟悉可以去百度了解下，很简单）<br/>
如果懒得学，直接打文字也行了，编码为__utf-8__

## 博文样式

### 代码高亮
 
如果我们需要使用代码高亮，可以使用markdown语法

以3个` 加 语言类型（如JavaScript）开头
   
再以3个`结尾

中间写你需要高亮的代码


高亮样式

![screenshoot](/assets/img/ReadMe/highlight.png)

缩进标准为 tab-size: 2

### 大标题

文段大标题使用 `## 标题名` 使用


### 小标题

文段小标题使用 `### 标题名` 使用

注意： 博客书签 只支持如上两种标题，不要写 # 一级标题 和 #### 四级或以下的标题

### 引用样式

如果需要引用，可以用一个 > ，并在这个> 下写需要引用的东西 ，可以换行，但是一个代码块有且只有一个>


### ul

使用`* `符添加ul列表 注意`*`后面一定要有空格


### ol

使用`1. 2. 3.` 添加ol列表 注意`.` 后面一定要有空格！


### table

可以使用markdown 语法生成表格


### Caveat 

`① 注意，代码与上下文之间必须有一行空行！！`

`② 以上所有xxx代指语言 如：javascript , xxx语言必须小写！！`

# 评论留言

`Disqus`优点是：国际比较流行，界面也很大气、简介，如果有人评论，还能实时通知，直接回复通知的邮件就行了；缺点是：评论必须要去注册一个disqus账号，分享一般只有Facebook和Twitter，另外在墙内加载影响很大。

`多说` 优点是：支持国内各主流社交软件(微博，微信，豆瓣，QQ空间 ...)一键分享按钮功能，另外登陆比较方便，管理界面也是纯中文的，相对于disqus全英文的要容易操作一些；缺点是：已暂停服务

`来必力` 优点是：完成度很高，拥有和多说类似的功能，而且非常美观，看历史也不是很快就会死的服务。它的  UI 非常的现代化，而且在引用方面有一些比 Disqus 和多说都要方便的实现，总的来说是一个不错的产品。缺点是：韩国的一款社会化评论服务。要是没有这方面的考量，完全可以选择这个服务，

自从多说停止服务后友言评论系统加载十分缓慢与不稳定，考虑到Disqus对与国内用户体验不太友好(需翻墙)，经多次调查与测试决定将评论系统更改为 来必力，提高用户体验。

# 关于设计

保留有Owen先辈留下来的优秀设计思想。

网站整体框架设计参考 [百度FEX](http://http://fex.baidu.com/) 的风格。

展示页设计参考 [腾讯官网](https://www.tencent.com/zh-cn/index.html) 的风格。

文章列表设计参考 [腾讯ISUX](https://www.tencent.com/zh-cn/index.html) 的风格。

文章内容设计参考 Clean Blog 风格

网站底部信息板块参考 [segmentfault](https://segmentfault.com/) 的风格。

还有互联网中许许多多无私奉献的优秀设计

感谢以上

# Folk

如需要参考code 可以直接folk ,记得给小站一个__star__ 哦

# licence

![cc](/assets/img/ReadMe/cc.png) 

感谢您光临信管创业基地博文聚合, 这里所有资源均全部由信管创业基地提供。 所有资源全部服从Create Commons 知识共享协议（BY-NC） 所有资源转载必须署名，并禁止商用！