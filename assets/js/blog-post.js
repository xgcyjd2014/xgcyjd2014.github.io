---
---
/*--------------------------------------------*\
              xgjd blog-post js
           Design And Build By Owen
      Github:http://github.com/numerhero

\*--------------------------------------------*/

(function (jQuery) {
{% capture posts %}
    [
        {% for post in site.posts %}
        {
            "title"  : "{{ post.title }}",
            "url"    : "{{ post.url }}",
            "date"   : "{{ post.date | %Y%M | date_to_string }}",
            "content": "{{ post.content | escape }}",
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

console.log(posts);

$window = $(window);

var picNum = 3,
    oPicBg = $(".bg-wrap img")

var rN = Math.floor(Math.random()*picNum) +1;
oPicBg[0].src = "/assets/img/blog-post/bg"+ rN +".jpg";

// /assets/img/blog-post

$.fn.Drag = function (callback) {
    var $self = this;
    $self.on("mousedown" , function (ev) {
        var $left  = ev.clientX - $self.position().left,
            $top   = ev.clientY - $self.position().top,
            $$left = ev.clientX - $self.offset().left,
            $$top  = ev.clientY - $self.offset().top,
            cLeft = $self.offset().left,
            cTop  = $self.offset().top

        $(document).on("mousemove.drag" , function (ev) {
            var top = ev.clientY - $top,
                left = ev.clientX - $left,
                kTop = ev.clientY - $$top,
                kLeft = ev.clientX - $$left,
                dLeft = cLeft - left,
                dTop = cTop - top;

            callback && callback({
                top: top,
                left: left,
                kTop: kTop,
                kLeft: kLeft,
                cLeft: cLeft,
                cTop: cTop,
                pLeft : (left / cLeft) * 100,
                pTop  : (top / cTop) * 100,
                dLeft: dLeft,
                dTop: dTop
            });
        });

        $(document).on("mouseup.drag", function () {
            $(document).off("mousemove.drag");
            $self.off("mouseup.drag");
        });
    });
}

$.fn.Scroll = function (callback) {
    var ul = this.find("ul"),
        scrollBox = this.find(".scroll-bar-box"),
        scrollBar = scrollBox.find(".scroll-bar"),
        BoxHeight = 556,
        mH = ul.outerHeight(),
        minH = 556,
        dH   = mH - minH,
        pBoxHeight = (dH * BoxHeight) / mH,
        barRH = BoxHeight - pBoxHeight
    

    if(dH <= 0) {
        scrollBox.css("display","none"); 
        return;
    } else {
        scrollBar.css("height" , barRH); 
    }

    scrollBar.Drag(function (o) {
        var r = o.top;

            if (r > pBoxHeight) {
                r = pBoxHeight;
            } else if (r<= 0) {
                r = 0;
            }
        scrollBar.css("top",r);
        ul.css("marginTop" , -((r * dH)/pBoxHeight));
    });

    this.on("mousewheel" , function(ev , delta) {
        // 下滚是 -1 上滚是 1

        var k = scrollBar.position().top,
            scrollRadio = 10,
            r = k + (-delta * scrollRadio);
        
        if (r > pBoxHeight) {
            r = pBoxHeight;
        } else if (r<=0){
            r = 0;
        }

        scrollBar.css("top", r);
        ul.css("marginTop" , -((r * dH)/pBoxHeight));
        return false;
    });
}

var oArticle = $("article"),
    oTreeListWrap = $(".tree-list-wrap"),
    oTreeListBox = $(".tree-list-box"),
    oTreeListBoxHeight = 556,
    oTreeList = $(".tree-list"),
    oScrollBarBox = $(".scroll-bar-box"),
    oScrollBar = $(".scroll-bar"),
    oBtnsListWrap = $(".btns-list-wrap"),
    oPlaneWarp = $(".plane-wrap"),
    oBtBtn = $(".back-top-btn"),
    oPlane = $(".plane")

// 按钮列表Js 
$(function () {
    oBtnsListWrap.css("right" , 0.16*innerWidth);


    oPlaneWarp.hover(function () {
        oBtBtn.addClass("back-top-btn-active");
        oPlane.css("bottom" , "14px");
    },function () {
        oBtBtn.removeClass("back-top-btn-active");
        oPlane.css("bottom" , "-80px");
    });

    oPlaneWarp.on("click" , function () {
        oBtBtn.removeClass("back-top-btn-active");
        oBtnsListWrap.css("opacity" , "0");
        oPlaneWarp.animate({top : "-5000px"},500, function () {
            oPlaneWarp.css("top" , "-5px");
        });
        
        $('html,body').animate({scrollTop : "0"},800);
    });

    $window.on("scroll.btnList" , function () {
        var oTop = $window.scrollTop();
        if (oTop >= 600) {
            oBtnsListWrap.css("display","block");
            oBtnsListWrap.css("opacity" , "1");
        } else {
            oBtnsListWrap.css("opacity" , "0");
            setTimeout(function () {
                oBtnsListWrap.css("display","none");
            },500);
        }
    });
});


// 图片弹出层
$(function () {
    var picShow = $(".pic-show-wrap"),
        oPic = $(".pic-show-wrap img")

    oArticle.delegate("img" , "click" , function (ev) {
        picShow.removeClass("pic-show-hidden");
        oPic[0].src = ev.target.src;
    });

    picShow.on("click" , function (ev) {
        picShow.addClass("pic-show-hidden");
        ev.stopPropagation();
    });

    oPic.on("click" , function(ev) {
        ev.stopPropagation();
    });

    $window.on("resize" , function () {
        picShow.css("width" , innerWidth);
        picShow.css("height" , innerHeight);
    });
});

// 首屏滚动 + 书签列弹出
$(function () {
    $window.on("scroll" , function () {
        var oTop = $window.scrollTop();

        if (oTop <= 600) {
            oArticle.css("top" , 600-oTop);
        } else {
            oArticle.css("top" , 0);
        }
    });
});

// 书签栏
$(function () {
    var flags = [],
        temp = 0,
        nowObj = null,
        html = '',
        H3Num = 0
    
    var cW = innerWidth,
        treeWrapRadio = 0.14

    if(innerWidth < 1200) {
        cW = 1200;
    }
    oTreeListWrap.css("width" , cW * treeWrapRadio);   
    oTreeListWrap.css("right" , -cW);
    oTreeListWrap.css("transition","0.5s");

    // 获取标签索引和具体位移量
    $(".article-box").children("h2,h3").each(function () {
        var $self = $(this),
            tName = $(this).prop("tagName").toLowerCase()

        if(tName === "h2") {
            var newObj = {
                child: [],
                content: $self.html()
            },cName

            flags.push(newObj);

            cName = tName+"-"+flags.length            
            newObj["cName"] = cName;
            newObj["num"] = flags.length-1;

            $self.attr("id" , cName);
            
            nowObj = newObj;
        }

        if(tName === "h3") {
            var cName = tName+"-"+(++H3Num);
            $self.attr("id" , cName);
            
            nowObj.child.push({
                cName: cName,
                content: $self.html(),
                num: nowObj.child.length
            });
            ;
        }
    });
    
    // 循环生成列表
    $.each(flags , function (idx , value) {
        
        html += ''
        + '<li class="h2-tag">'
        + '<span class="tag-icon"></span>'
        + '<button data-tag-index="'+value.num+'" data-index="'+value.cName+'" >'+value.content+'</button>'
        + '</li>';

        if(value.child.length) {
            var $self = value;
            $.each(value.child, function (idx , value) {
                html += ''
                + '<li class="h3-tag">'
                + '<button data-father-index="'+$self.num+'" data-tag-index="'+value.num+'" data-index="'+value.cName+'" >'+value.content+'</button>'
                + '</li>';
            });
        }
    });

    oTreeList.html(html);

    // 挂载委托事件
    oTreeList.delegate( "button", "click" , function (ev) {
        var ele = ev.target,
            tIndex = ele.dataset.tagIndex,
            Index = ele.dataset.index,
            t = 0,
            target

            
            if(/^h3/.test(Index)) {
                var fIndex = ele.dataset.fatherIndex;
                target = $("#"+flags[fIndex].child[tIndex].cName);
                t = target.position().top;
            } else {
                target = $("#"+flags[tIndex].cName);
                t = target.position().top;
                if(tIndex == 0) {
                    t += 270; // 弥补背景卷上去的高度差
                } 
            }

        $('html,body').animate({scrollTop: t+"px"},800);
        target.addClass("title--move-active");
        setTimeout(function () {
            target.removeClass("title--move-active");
        },1300);
    });

    bindTreeListShowScrollEvent();
    
    function bindTreeListShowScrollEvent() {
        $window.on("scroll.treeListShow",treeListShow);
        treeListShow();
        function treeListShow() {
            var oTop = $window.scrollTop();

            if (oTop >= 320) {
                oTreeListWrap.css("transition-delay","0s");
                oTreeListBox.css("transition-delay","0.5s");
                oTreeListWrap.css("right" , 0);
                oTreeListBox.removeClass("tree-list-box-hidden");
            } else {
                oTreeListBox.css("transition-delay","0s");
                oTreeListWrap.css("transition-delay","0.8s");
                oTreeListBox.addClass("tree-list-box-hidden");
                oTreeListWrap.css("right" , -cW);
            }
        }
    }
});

// 书签栏拖拽
$(function () {
    oTreeListBox.Scroll();
    oTreeListBox.hover(function(){
        oScrollBarBox.removeClass("fade-in");
    },function () {
        oScrollBarBox.addClass("fade-in");
    });
})

// 上一页和下一页
$(function () {
    var oLast = $(".skip--last"),
        oLastA = oLast.find("a"),
        oLastName = oLastA.find("span"),
        oNext = $(".skip--next"),
        oNextA = oNext.find("a"),
        oNextName = oNextA.find("span")
        oTitle      = $(".article-title"),
        flag        = 0,
        origin   = window.location.origin

    for(var i = 0; i<posts.length; i++) {
        if(posts[i].description === oTitle.html()) {
            flag = i;
            break;
        }
    }

    if(flag === 0) {
        oLast.addClass("none");
        oNextA[0].href = origin + posts[flag+1].url;
        oNextName.html(posts[flag+1].description)
    } else if(flag === posts.length) {
        oNext.addClass("none");
        oLastA[0].href = origin + posts[flag-1].url;
        oLastName.html(posts[flag-1].description)
    } else if(flag === 0 && flag === posts.length) {
        oLast.addClass("none");
        oNext.addClass("none");
    }
})

})(jQuery);



(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);