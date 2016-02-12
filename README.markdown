											<!-- compose By Owen -->
										  <!-- github: github.com/numerhero -->
# xgcyjd2014.github.io
2014信管创业教育基地官方博客

# 说明

先介绍一下脚手架~~

首先基于jekyll 语法，在根目录下一定要放一个名为`index.html` 的首页，而其他的页面则放在`pages`文件夹

本站所有的Css 都在 /assets/css/ 中
本站所有的Js  都在 /assets/js/  中

_config.yml 是本站的配置文件，已经配置完成，如需要folk 参考 请自行修改

_includes   包含一些重复且公用的html 布局，写好后直接 使用liquid命令`{% include xxx.html %}` 就能包含到一个页面中去

_layouts    包含一些基础且重要的布局，例如base.html 中包含了各个页面中所需的header 和 footer ，只要需要公用的header 和 footer 布局的页面 在开头使用`layout base` 就能将内容套入base.html 中

_posts      包含全部撰写的文章，下面我们再细说

_drafts     草稿文件夹，是被写入gitignore 中的文件夹，用于存放草稿，如果需要可以自己在根目录下新建一个文件用于存放草稿

.gitignore  是github 的配置文件，是命令github忽略上传的文件名列表

ie.html     是IeFucker |  lt Ie11 用户浏览器版本低于Ie11 的禁止访问

sitemap     是配置SEO 的文件

404         使用腾讯寻子页面，简单且也是必要的（个人认为人贩子都该重判！）

# 撰写博文

如果需要撰写博文，首先需要填写一些简单文章信息
---
layout: post
title: HelloWorld  
author: Owen
tagpic: helloworld.jpg
description: 用心铸造卓越Offer
category: other
---

layout      : 命令博文基于 post 布局，将写好的文章嵌入post.html 中
title       : 文章标题
author      : 作者名称（作者姓名开头大写）
tagpic      : 文章配图名（__包含后缀名称__）
description : 关于文章的简单描述（5 - 20个字）
category    : 文章类型（如不清楚分类，缺省为other类）

__以上都是必须填写__

如需撰写博文，首先和我（Owen）提交一下一个固定的作者名，我将作者名与css高亮文件匹配一下，就能开始撰写博文了

文章配图需要将图片裁切成 280 * 250，裁切好的图片添加到`/assets/img/index/post-list-imgs`文件夹
类型名称一定要同一（关系到css类名匹配）
例如：

css
html
js
other

等等

如果有需要添加新的文章类型，可以告诉我来进行添加

博文撰写就比较自由了，基于markdown 语法（不熟悉可以去百度了解下，很简单）
如果懒得学，直接打文字也行了，编码为__utf-8__

# 评论

因为有伟大的BFW存在，我就不使用Disqus了，多说很方便，不想注册就直接用QQ登录也行，基于不带颜色的基础上，本站言论很Open，如果发现不良评论，我将进行删除 

# Folk
如需要参考code 可以直接folk ,记得给小站一个__star__ 哦

# licence

没啥协议不协议的，都开源的东西，纯当交流分享~