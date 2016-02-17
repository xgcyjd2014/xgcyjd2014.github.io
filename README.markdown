												<!-- compose By Owen -->
										  <!-- github: github.com/numerhero -->
# xgcyjd2014.github.io

2014信管创业教育基地官方博客

# 说明

先聊聊脚手架~~

首先基于jekyll 语法，在根目录下一定要放一个名为`index.html` 的首页，而其他的页面则放在`pages`文件夹

本站所有的Css 都在 `/assets/css/` 中
本站所有的Js  都在 `/assets/js/`  中

_config.yml 是本站的配置文件，已经配置完成，如需要folk 参考 请自行修改

_includes   包含一些重复且公用的html 布局，写好后直接 使用liquid命令`{% include xxx.html %}` 就能包含到一个页面中去

_layouts    包含一些基础且重要的布局，例如base.html 中包含了各个页面中所需的header 和 footer ，只要需要公用的header 和 footer 布局的页面 在开头使用`layout base` 就能将内容套入base.html 中

_posts      包含全部撰写的文章，下面我们再细说

_drafts     草稿文件夹，是被写入gitignore 中的文件夹，用于存放草稿，如果需要可以自己在根目录下新建一个文件用于存放草稿

.gitignore  是github 的配置文件，是命令github忽略上传的文件名列表

ie.html     是IeFucker |  lt Ie11 用户浏览器版本低于Ie11 的禁止访问

sitemap     是配置SEO 的文件

404         使用腾讯寻子页面，简单且也是必要的（个人认为人贩子都该重判！）

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

如需撰写博文，首先和我（Owen）提交一个固定的作者名，我将作者名与css高亮文件匹配一下，就能开始撰写博文了

每次编写博文之前，需要填写一些简单文章信息

---<br/>
layout: post <br/>
title: HelloWorld <br/>
author: Owen <br/>
tagpic: helloworld.jpg <br/>
description: 用心铸造卓越Offer <br/>
category: other <br/>
---<br/>


layout      : 命令博文基于 post 布局，将写好的文章嵌入post.html 中<br/>
title       : 文章标题<br/>
author      : 作者名称（作者姓名开头大写）<br/>
tagpic      : 文章配图名（__包含后缀名称__）<br/>
description : 关于文章的简单描述（5 - 20个字）<br/>
category    : 文章类型（如不清楚分类，可缺省为other类）<br/>

__以上都是必须填写__

文章配图需要将图片裁切成 280 * 250，裁切好的图片添加到`/assets/img/index/post-list-imgs`文件夹<br/>
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

# 评论

因为有伟大的BFW存在，我就不使用Disqus了。<br/>
多说很方便，不想注册就直接用QQ登录也行，基于不带颜色的基础上，本站言论很Open，如果发现不良评论，我将进行删除 

# 关于设计

不得承认，确实抄了很多网站的设计

感谢智唐、QQ、ali、baidu、umworks的设计师，给我提供素材

特别感谢__Matthew Wagerfield__ 提供的low-poly算法

不说了，我得滚回去预习 计算机图形学 ("T__T) 

# Folk

如需要参考code 可以直接folk ,记得给小站一个__star__ 哦

# licence

没啥协议不协议的，都开源的东西，纯当交流分享~