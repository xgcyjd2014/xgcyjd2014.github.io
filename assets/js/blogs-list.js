---
---

                    /*--------------------------------------------*\
                             信管创业基地 blogs-list.js
                             Design And Build By 倪云港
                             Email: yungangni@gmail.com
                         Github: http://github.com/niyungang
                    \*--------------------------------------------*/



/* 遍历posts */ 
{% capture posts %}
    [
        {% for post in site.posts %}
        {
            "title"  : "{{ post.title }}",
            "url"    : "{{ post.url }}",
            "date"   : '{{ post.date | date: "%Y-%m-%d" }}',
            "category": "{{ post.category }}",
            "description": "{{ post.description }}",
            "author": "{{ post.author }}",
            "tagpic": "{{ post.tagpic }}",
            "description": "{{ post.description }}"
        }{% if forloop.last %}{% else %},{% endif %}
        {% endfor %}
    ]
{% endcapture %}

var posts = {{ posts | strip_newlines }};
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