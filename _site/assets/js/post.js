                            
                            /*--------------------------------------------*\
                                          信管创业基地 post.js
                                       Design And Build By 倪云港
                                       Email: yungangni@gmail.com
                                 Github: http://github.com/niyungang
                            \*--------------------------------------------*/

$(function(){

    // 随机切换背景图片
    var picNum = 4;
    var oBg = $(".post-img");
    var rN = Math.floor(Math.random()*picNum) +1;
    oBg.attr('src', '/assets/img/post/bg' + rN + '.jpg');

    // 滑动固定
    window.onload = function(){
        var po2 = oBg.height();
        var catalog = $(".catalog");
        $(window).scroll(function(){
            if( $(document).scrollTop() >= po2 ){
                catalog.addClass("fixed");
            }else{
                catalog.removeClass("fixed");
            }
        });
    }

    // 书签目录
    var catalogList = $(".catalog-list");
    var postBody = $(".post-body");

    var flags = [],
        temp = 0,
        nowObj = null,
        html = '',
        H3Num = 0;
    

    // 获取标签索引和具体位移量
    postBody.children("h2,h3").each(function(){
        var $self = $(this),
            tName = $(this).prop("tagName").toLowerCase()

        if(tName === "h2"){
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
        }
    });
    
    // 循环生成列表
    $.each(flags, function(idx, value){
        html += ''
        + '<li class="h2-tag">'
        + '<a data-tag-index="'+value.num+'" data-index="'+value.cName+'" >'+value.content+'</a>'
        + '</li>';

        if(value.child.length){
            var $self = value;
            $.each(value.child, function (idx , value) {
                html += ''
                + '<li class="h3-tag">'
                + '<a data-father-index="'+$self.num+'" data-tag-index="'+value.num+'" data-index="'+value.cName+'" >'+value.content+'</a>'
                + '</li>';
            });
        }
    });
    catalogList.html(html);

    // 点击定位
    catalogList.delegate( "a", "click" , function(ev){
        var ele = ev.target,
        tIndex = ele.dataset.tagIndex,
        Index = ele.dataset.index,
        po = $(".post-header").innerHeight(),
        t = 0;

            
        if(/^h3/.test(Index)) {
            var fIndex = ele.dataset.fatherIndex;
            target = $("#"+flags[fIndex].child[tIndex].cName);
            t = target.position().top + po;
        }else{
            target = $("#"+flags[tIndex].cName);
            t = target.position().top + po;
        }

        $('html,body').animate({scrollTop: t+"px"},800);
        target.addClass("active");
        setTimeout(function(){
            target.removeClass("active");
        },1300);
    });


});


