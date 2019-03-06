                    /*--------------------------------------------*\
                             信管创业基地 blogs-list.js
                             Design And Build By 倪云港
                             Email: yungangni@gmail.com
                         Github: http://github.com/niyungang
                    \*--------------------------------------------*/



/* 遍历posts */ 


var posts =     [                {            "title"  : "归并算法",            "url"    : "/other/2019/03/06/merge-algorithm.html",            "date"   : '2019-03-06',            "category": "other",            "description": "algorithm",            "author": "季智成",            "tagpic": "algorithm.jpg",            "description": "algorithm"        },                {            "title"  : "浏览器从输入URL到页面展现都经过了什么",            "url"    : "/other/2018/09/07/after-input-URL.html",            "date"   : '2018-09-07',            "category": "other",            "description": "HTTP",            "author": "庞云龙",            "tagpic": "",            "description": "HTTP"        },                {            "title"  : "JAVAWeb-动态网页开发",            "url"    : "/other/2018/09/07/JAVAWeb-dynamic-web-development.html",            "date"   : '2018-09-07',            "category": "other",            "description": "JAVAWeb",            "author": "代秀强",            "tagpic": "other.jpg",            "description": "JAVAWeb"        },                {            "title"  : "Emmet",            "url"    : "/other/2018/09/06/Emmet.html",            "date"   : '2018-09-06',            "category": "other",            "description": "Emmet",            "author": "庞云龙",            "tagpic": "",            "description": "Emmet"        },                {            "title"  : "Es2017 将会给我们带来什么？",            "url"    : "/js/2017/08/24/es7.html",            "date"   : '2017-08-24',            "category": "js",            "description": "简要介绍 Es 2017 新语法和用法",            "author": "Owen",            "tagpic": "js.jpg",            "description": "简要介绍 Es 2017 新语法和用法"        },                {            "title"  : "考研 or 工作？ 致每一个迷茫中的大学生",            "url"    : "/other/2017/08/09/.pubmed-or-work.html",            "date"   : '2017-08-09',            "category": "other",            "description": "谨以此篇文章告知各位我是如何打破迷茫期，确定自己的人生方向，如何在考研还是工作的问题上选择",            "author": "顿泽",            "tagpic": "other.jpg",            "description": "谨以此篇文章告知各位我是如何打破迷茫期，确定自己的人生方向，如何在考研还是工作的问题上选择"        },                {            "title"  : "React V16 给我们带来了那些东西 ？",            "url"    : "/js/2017/08/08/react-fiber.html",            "date"   : '2017-08-08',            "category": "js",            "description": "简要介绍React version 0.16 的新特性",            "author": "Owen",            "tagpic": "js.jpg",            "description": "简要介绍React version 0.16 的新特性"        },                {            "title"  : "安利贴：如何使用protobuf",            "url"    : "/js/2017/07/20/how-usr-protobuf.html",            "date"   : '2017-07-20',            "category": "js",            "description": "简要基于介绍 proto v3 ，nodejs 环境的数据结构构建",            "author": "Owen",            "tagpic": "js.jpg",            "description": "简要基于介绍 proto v3 ，nodejs 环境的数据结构构建"        },                {            "title"  : "如何获取屏幕的缩放比例",            "url"    : "/js/2017/07/18/how-get-dpr.html",            "date"   : '2017-07-18',            "category": "js",            "description": "分析屏幕缩放比例原理，以及在标准浏览器和IE浏览器下如何获取屏幕缩放比例",            "author": "Owen",            "tagpic": "js.jpg",            "description": "分析屏幕缩放比例原理，以及在标准浏览器和IE浏览器下如何获取屏幕缩放比例"        },                {            "title"  : "简单理解洋葱模型",            "url"    : "/js/2017/05/18/understand-the-onion-modal.html",            "date"   : '2017-05-18',            "category": "js",            "description": "",            "author": "Owen",            "tagpic": "js.jpg",            "description": ""        },                {            "title"  : "AJAX与数据传输",            "url"    : "/js/2017/05/16/Ajax.html",            "date"   : '2017-05-16',            "category": "js",            "description": "解析AJAX技术这把利器",            "author": "倪云港",            "tagpic": "js.jpg",            "description": "解析AJAX技术这把利器"        },                {            "title"  : "JSON学习笔记",            "url"    : "/js/2017/04/30/JSON.html",            "date"   : '2017-04-30',            "category": "js",            "description": "解析JSON与XML",            "author": "倪云港",            "tagpic": "js.jpg",            "description": "解析JSON与XML"        },                {            "title"  : "深入理解 flex 布局以及计算",            "url"    : "/css/2017/04/06/flexbox.html",            "date"   : '2017-04-06',            "category": "css",            "description": "理解flex",            "author": "Owen",            "tagpic": "css.jpg",            "description": "理解flex"        },                {            "title"  : "深入了解Flexbox",            "url"    : "/css/2017/03/26/Flex.html",            "date"   : '2017-03-26',            "category": "css",            "description": "动图效果展示",            "author": "倪云港",            "tagpic": "css.jpg",            "description": "动图效果展示"        },                {            "title"  : "CSS居中完全指南",            "url"    : "/css/2017/03/09/all-center.html",            "date"   : '2017-03-09',            "category": "css",            "description": "居中解决方案",            "author": "倪云港",            "tagpic": "css.jpg",            "description": "居中解决方案"        },                {            "title"  : "文字流光效果",            "url"    : "/css/2017/03/08/linear-gradient.html",            "date"   : '2017-03-08',            "category": "css",            "description": "了解linear-gradient属性及效果展示",            "author": "倪云港",            "tagpic": "css.jpg",            "description": "了解linear-gradient属性及效果展示"        },                {            "title"  : "Console",            "url"    : "/js/2017/03/05/console.html",            "date"   : '2017-03-05',            "category": "js",            "description": "了解console",            "author": "倪云港",            "tagpic": "js.jpg",            "description": "了解console"        },                {            "title"  : "Preferences.sublime-settings",            "url"    : "/other/2017/03/05/Preferences.sublime-settings.html",            "date"   : '2017-03-05',            "category": "other",            "description": "sublime设置英文翻译",            "author": "倪云港",            "tagpic": "other.jpg",            "description": "sublime设置英文翻译"        },                {            "title"  : "一起画只百度熊吧",            "url"    : "/css/2017/02/16/baidu-bear.html",            "date"   : '2017-02-16',            "category": "css",            "description": "技术,svg,动画",            "author": "Owen",            "tagpic": "css.jpg",            "description": "技术,svg,动画"        },                {            "title"  : "移动端de坑(一)",            "url"    : "/mobile/2017/01/20/mobile-terminal.html",            "date"   : '2017-01-20',            "category": "mobile",            "description": "如何使用微信端打开内网开发页面？",            "author": "Owen",            "tagpic": "mobile.jpg",            "description": "如何使用微信端打开内网开发页面？"        },                {            "title"  : "移动端de坑(一)",            "url"    : "/mob/2017/01/20/mobile-terminal.html",            "date"   : '2017-01-20',            "category": "mob",            "description": "如何使用微信端打开内网开发页面？",            "author": "Owen",            "tagpic": "mobile.jpg",            "description": "如何使用微信端打开内网开发页面？"        },                {            "title"  : "百度糯米面试经历",            "url"    : "/other/2016/12/15/nuomi-interview.html",            "date"   : '2016-12-15',            "category": "other",            "description": "",            "author": "Owen",            "tagpic": "other.jpg",            "description": ""        },                {            "title"  : "基地官网文章上传的解决方案",            "url"    : "/other/2016/12/09/passage.html",            "date"   : '2016-12-09',            "category": "other",            "description": "自己写了一些文章，想要上传到官网需要怎么做？",            "author": "倪云港",            "tagpic": "other.jpg",            "description": "自己写了一些文章，想要上传到官网需要怎么做？"        },                {            "title"  : "如何制作霓虹灯动画？",            "url"    : "/js/2016/12/07/neon-light.html",            "date"   : '2016-12-07',            "category": "js",            "description": "使用canvas 绘制霓虹灯小动画",            "author": "Owen",            "tagpic": "js.jpg",            "description": "使用canvas 绘制霓虹灯小动画"        },                {            "title"  : "如何制作水球动画图？",            "url"    : "/js/2016/11/13/water-bubble.html",            "date"   : '2016-11-13',            "category": "js",            "description": "使用canvas 绘制水波加载小动画",            "author": "Owen",            "tagpic": "js.jpg",            "description": "使用canvas 绘制水波加载小动画"        },                {            "title"  : "关于排序原生js实现",            "url"    : "/js/2016/11/09/sort-Algorithm.html",            "date"   : '2016-11-09',            "category": "js",            "description": "9种经典排序算法的javascript 实现",            "author": "Owen",            "tagpic": "js.jpg",            "description": "9种经典排序算法的javascript 实现"        },                {            "title"  : "DIY 一个自己的 REPL 工具",            "url"    : "/js/2016/09/02/how-diy-repl.html",            "date"   : '2016-09-02',            "category": "js",            "description": "教你如何定制REPL工具 来实现各种自动化的功能！",            "author": "Owen",            "tagpic": "nodejs.png",            "description": "教你如何定制REPL工具 来实现各种自动化的功能！"        },                {            "title"  : "Java知识集锦",            "url"    : "/java/2016/08/21/java-basics.html",            "date"   : '2016-08-21',            "category": "java",            "description": "关于java的一些基础",            "author": "ZhaoJun",            "tagpic": "java.png",            "description": "关于java的一些基础"        },                {            "title"  : "使用NodeJs 实现新闻Rss爬虫",            "url"    : "/js/2016/07/28/get-rss.html",            "date"   : '2016-07-28',            "category": "js",            "description": "从具体思路到代码实现，Owen教你如何通过nodeJS获取Rss新闻数据。",            "author": "Owen",            "tagpic": "nodejs.png",            "description": "从具体思路到代码实现，Owen教你如何通过nodeJS获取Rss新闻数据。"        },                {            "title"  : "用C++函数对象代替函数指针",            "url"    : "/c++/2016/07/28/function-object.html",            "date"   : '2016-07-28',            "category": "c++",            "description": "c++中用函数对象代替函数指针，方便简洁。教你如何定义了一个简单的函数对象模板",            "author": "Willow",            "tagpic": "c++.jpg",            "description": "c++中用函数对象代替函数指针，方便简洁。教你如何定义了一个简单的函数对象模板"        },                {            "title"  : "C++语言与C语言的区别",            "url"    : "/c++/2016/07/27/c++pattern.html",            "date"   : '2016-07-27',            "category": "c++",            "description": "初学c++语法后也许会觉得c++语法太多太复杂，其实在开发中并不是所有都用得到。这篇文章谈了几种常见的开发模式，给刚学完c++语法基础的同学理一理思路，总结下刚学完的复杂又有点凌乱的语法。",            "author": "Willow",            "tagpic": "c++.jpg",            "description": "初学c++语法后也许会觉得c++语法太多太复杂，其实在开发中并不是所有都用得到。这篇文章谈了几种常见的开发模式，给刚学完c++语法基础的同学理一理思路，总结下刚学完的复杂又有点凌乱的语法。"        },                {            "title"  : "Understanding The CSS Property Value Syntax",            "url"    : "/css/2016/07/25/Understanding-The-CSS-Property-Value-Syntax.html",            "date"   : '2016-07-25',            "category": "css",            "description": "深入理解W3C 标准下Css属性语法",            "author": "Xukm",            "tagpic": "css.jpg",            "description": "深入理解W3C 标准下Css属性语法"        },                {            "title"  : "读CSS2.1规范之需求和推荐标准（三）",            "url"    : "/css/2016/07/15/css2.1-3.html",            "date"   : '2016-07-15',            "category": "css",            "description": "深入理解css2.1规范(三)",            "author": "xiaoyu7",            "tagpic": "css.jpg",            "description": "深入理解css2.1规范(三)"        },                {            "title"  : "读CSS2.1规范之需求和推荐标准（二）",            "url"    : "/css/2016/07/14/css2.1-2.html",            "date"   : '2016-07-14',            "category": "css",            "description": "深入理解css2.1规范（二）",            "author": "xiaoyu7",            "tagpic": "css.jpg",            "description": "深入理解css2.1规范（二）"        },                {            "title"  : "读CSS2.1规范之需求和推荐标准（一）",            "url"    : "/css/2016/07/13/css2.1-1.html",            "date"   : '2016-07-13',            "category": "css",            "description": "深入理解css2.1规范（一）",            "author": "xiaoyu7",            "tagpic": "css.jpg",            "description": "深入理解css2.1规范（一）"        },                {            "title"  : "Thinking in React",            "url"    : "/js/2016/06/20/thinking-in-React.html",            "date"   : '2016-06-20',            "category": "js",            "description": "关于reactJs 的一些学习历程",            "author": "Xukm",            "tagpic": "react.png",            "description": "关于reactJs 的一些学习历程"        },                {            "title"  : "如何使用css 绘制三角形？",            "url"    : "/css/2016/06/07/css-arrow.html",            "date"   : '2016-06-07',            "category": "css",            "description": "三种使用css绘制三角形的方法",            "author": "Owen",            "tagpic": "css.jpg",            "description": "三种使用css绘制三角形的方法"        },                {            "title"  : "Es6 对象Proxy",            "url"    : "/js/2016/05/22/es6-proxy.html",            "date"   : '2016-05-22',            "category": "js",            "description": "关于Es6 Proxy api 详解 和 一些栗子",            "author": "Owen",            "tagpic": "js.jpg",            "description": "关于Es6 Proxy api 详解 和 一些栗子"        },                {            "title"  : "create方法和new方法的异同",            "url"    : "/js/2016/05/22/Object.create-and-new.html",            "date"   : '2016-05-22',            "category": "js",            "description": "关于比较create方法和new 方法之间的异同，并对创建对象进行一些总结",            "author": "Owen",            "tagpic": "js.jpg",            "description": "关于比较create方法和new 方法之间的异同，并对创建对象进行一些总结"        },                {            "title"  : "客户端识别与Cookie机制",            "url"    : "/http/2016/05/03/HTTP_7.html",            "date"   : '2016-05-03',            "category": "http",            "description": "关于Http 系列的基础知识(7)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(7)"        },                {            "title"  : "URL(Uniform Resource Locator)",            "url"    : "/http/2016/04/29/HTTP_6.html",            "date"   : '2016-04-29',            "category": "http",            "description": "关于Http 系列的基础知识(6)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(6)"        },                {            "title"  : "内容编码和传输编码",            "url"    : "/http/2016/04/27/HTTP_5.html",            "date"   : '2016-04-27',            "category": "http",            "description": "关于Http 系列的基础知识(5)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(5)"        },                {            "title"  : "浏览器缓存",            "url"    : "/http/2016/04/27/HTTP_4.html",            "date"   : '2016-04-27',            "category": "http",            "description": "关于Http 系列的基础知识(4)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(4)"        },                {            "title"  : "浏览器缓存",            "url"    : "/http/2016/04/26/HTTP_3.html",            "date"   : '2016-04-26',            "category": "http",            "description": "关于Http 系列的基础知识(3)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(3)"        },                {            "title"  : "Content-Type实体首部字段",            "url"    : "/http/2016/04/25/HTTP_2.html",            "date"   : '2016-04-25',            "category": "http",            "description": "关于Http 系列的基础知识(2)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(2)"        },                {            "title"  : "详解promise",            "url"    : "/js/2016/04/13/promise.html",            "date"   : '2016-04-13',            "category": "js",            "description": "关于Es6 Promise api 详解 和 一些栗子",            "author": "Owen",            "tagpic": "js.jpg",            "description": "关于Es6 Promise api 详解 和 一些栗子"        },                {            "title"  : "函数柯里化",            "url"    : "/js/2016/03/28/currying.html",            "date"   : '2016-03-28',            "category": "js",            "description": "关于柯里化和反柯里化",            "author": "Owen",            "tagpic": "js.jpg",            "description": "关于柯里化和反柯里化"        },                {            "title"  : "requireJs使用心得",            "url"    : "/js/2016/03/12/amd.html",            "date"   : '2016-03-12',            "category": "js",            "description": "关于requreJS的基本使用方法和插件管理",            "author": "Owen",            "tagpic": "requireJs.png",            "description": "关于requreJS的基本使用方法和插件管理"        },                {            "title"  : "HelloWorld",            "url"    : "/other/2016/02/04/HelloWorld.html",            "date"   : '2016-02-04',            "category": "other",            "description": "用心铸造卓越Offer",            "author": "Owen",            "tagpic": "helloworld.jpg",            "description": "用心铸造卓越Offer"        },                {            "title"  : "通过控制data属性，为游戏小人显示得分",            "url"    : "/css/2015/12/14/data-use.html",            "date"   : '2015-12-14',            "category": "css",            "description": "控制小人显现游戏分数得失",            "author": "Owen",            "tagpic": "littleman.png",            "description": "控制小人显现游戏分数得失"        },                {            "title"  : "认识Web和HTTP",            "url"    : "/http/2014/04/24/HTTP_1.html",            "date"   : '2014-04-24',            "category": "http",            "description": "关于Http 系列的基础知识(1)",            "author": "YanLong",            "tagpic": "http.jpg",            "description": "关于Http 系列的基础知识(1)"        }            ];
// 根据需求分页，压栈
// 每页显示 5个
var paginationNum = 5,  // 分页显示个数
    allNum        = 0,  // 总页数（动态获取）
    nowPage       = 1,  // 当前页标
    stack = [],
    oArticleList = $(".passage");
    
+function calcPagination() {
    for(var i = 0, v = []; i<posts.length; i++) {
        v.push(posts[i]);
        if((i+1) % paginationNum === 0 && i !== 0) {
            stack.push(v);
            v = [];
        }
    }
    if(v.length !== 0) {
        stack.push(v);
    }
}()

allNum = stack.length;

// 渲染
// function render() {
//     var data           = stack[nowPage-1],
//         html           = "",
//         paginationHtml = "";
//         decs           = encodeURIComponent('分享来自信管创业基地博文聚合，转载请服从Creative Commons（BY-NC）知识共享协议');

//         for(var i = 0; i<data.length; i++) {
//             html += '<section class="article-item article-item--hidden">';
            
//             var encodeURL = encodeURIComponent(data[i].url), 
//                 encodeAuthor = encodeURIComponent(data[i].author)

//             // header__block
//             html += "" 
//             + '<div class="article-item__header">'
//             +   '<p class="header-title">'
//             +       '{'
//             +           '<span class="title-content">'+data[i].title+'</span>'
//             +       '}'
//             +   '</p>'       
//             +   '<div class="tags ">'
//             +      '<i class="tags-clock"></i>'   
//             +      '发表于：<time>'+data[i].date+'</time>'
//             +      ' By <span class="author">'+data[i].author+'</span>'
//             +  '</div>' 
//             + '</div>';

//             // body__block
//             html += ""
//             + '<div class="article-item__body">'
//             +   '<p>'+ data[i].description +'</p>'
//             +   '<a href="http://xgcyjd2014.github.io'+data[i].url+'" target="__blank" class="read-more">Read More</a>'
//             +   '<div class="line"></div>'
//             + '</div>'

//             // footer__block
//             html += ""
//             + '<div class="article-item__footer">'
//             +   '<div class="type">'
//             +       '<i></i>'
//             +       '<span> '+data[i].category+'</span>'
//             +   '</div>'
//             +   '<ul class="share">'
//             +       '<li>'
//             +           '<span>分享到:</span>'
//             +      '</li>'
//             +       '<li>'
//             +           '<a class="qzone" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://xgcyjd2014.github.io'+encodeURL+'&title=《'+data[i].title+'》 作者：'+encodeAuthor+' 发布日期：'+data[i].date+'&desc='+decs+'&pics=http://xgcyjd2014.github.io/assets/img/share-logo.png&site=http://xgcyjd2014.github.io" target="__blank" title="分享到QQ空间"></a>'
//             +       '</li>'
//             +       '<li class="ml">'
//             +           '<a class="weibo" href="http://service.weibo.com/share/share.php?url=http://xgcyjd2014.github.io'+encodeURL+'&title=《'+data[i].title+'》 作者：'+encodeAuthor+' 发布日期：'+data[i].date+' '+decs+' &pic=http://xgcyjd2014.github.io/assets/img/share-logo.png&site=http://xgcyjd2014.github.io" target="__blank" title="分享到微博"></a>'
//             +       '</li>'
//             +       '<li class="ml">'
//             +           '<a class="twitter" href="https://twitter.com/intent/tweet?url=http://xgcyjd2014.github.io'+encodeURL+'&text=《'+data[i].title+'》 作者：'+encodeAuthor+' 发布日期：'+data[i].date+' '+decs+' " target="__blank" title="分享到推特"></a>'
//             +       '</li>'
//             +       '<li class="ml">'
//             +           '<a class="qq" href="http://connect.qq.com/widget/shareqq/index.html?url=http://xgcyjd2014.github.io'+encodeURL+'&pics=http://xgcyjd2014.github.io/assets/img/share-logo.png&title=《'+data[i].title+'》 作者：'+encodeAuthor+' 发布日期：'+data[i].date+'&summary='+decs+'" target="__blank" title="分享到推特"></a>'
//             +       '</li>'
//             +   '</ul>'
//             + '</div>';



//             html += "</section>";
//         }

//         html += '<section class="article-pagination">'
//         + '<ol class="article-pagination-list clearfix">'

//         html += pagination(); 

//         html += '</ol>'
//         + '</section>'
        
//         oArticleList.innerHTML = html;
// }

// 渲染分页
function pagination() {
    var html    = "",
        halfNum = ~~(paginationNum/2)

    html += '<section class="article-pagination">'
    + '<ol class="article-pagination-list clearfix">';

    if(allNum < paginationNum) {
        for(var i = 1; i<=allNum; i++) {
            html += renderLi(i)
        }
    } else if(nowPage <= halfNum+1) {
        for(var i = 1; i<=paginationNum; i++) {
            html += renderLi(i);
        }

        html += '<li>'
        + '<a href="#page_'+allNum+'" data-page='+allNum+' title="尾页">尾页</a>'
        + '</li>';
        
    } else if(nowPage > halfNum+1 && nowPage < (allNum - halfNum)) {
        html += '<li>'
        + '<a href="#page_'+1+'" data-page='+1+' title="首页">首页</a>'
        + '</li>';

        for(var i = nowPage-halfNum; i<=nowPage+halfNum; i++) {
            html += renderLi(i);
        }

        html += '<li>'
        + '<a href="#page_'+allNum+'" data-page='+allNum+' title="尾页">尾页</a>'
        + '</li>';
    } else {
        html += '<li>'
        + '<a href="#page_'+1+'" data-page='+1+' title="首页">首页</a>'
        + '</li>';
        
        for(var i = (allNum - paginationNum)+1; i<=allNum;i++) {
            html += renderLi(i);
        }
    }

    html += '</ol>'
    + '</section>';

    return html;

    function renderLi(i) {
        var html = "";

        if(i === nowPage) {
            return (html += '<li class="active">'
            + '<a href="#page_'+i+'" data-page='+i+' title="第'+i+'页">'+i+'</a>'
            + '</li>');
        } else {
            return (html += '<li>'
            + '<a href="#page_'+i+'" data-page='+i+' title="第'+i+'页">'+i+'</a>'
            + '</li>');    
        }
    }
}

// bind 分页点击委托
+function () {
    oArticleList.addEventListener("click", function (ev) {
        var num = ~~ev.target.dataset.page
        if(ev.target.nodeName.toLowerCase() === "a" && num) {
            if(num !== nowPage) {
                nowPage = num;
                render();
                scrollAnimate();
                setTimeout(function () {
                    stepFadeOut();
                },800)
            }
        }
    })
}()

// 页面滚动动画
function scrollAnimate() {
    var top = document.body.scrollTop || document.documentElement.scrollTop,
        step = Math.floor(top/30),
        articleTop = oArticleList.offsetTop;
        firstItemTop  = articleTop - 350; 

    +function () {
        top -= step;
        scrollTo(0,top);
        if(top > firstItemTop) {
            setTimeout(arguments.callee,1000/60);
        }
    }()
}


render();
stepFadeOut();

function $ ( v,d ) {
    d = d || document;
    return d.querySelector(v);
}

function $$ ( v,d ) {
    d = d || document;
    return d.querySelectorAll(v);   
}