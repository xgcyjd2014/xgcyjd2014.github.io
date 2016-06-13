/*--------------------------------------------*\
                xgjd members-pic js
           Design And Build By Owen
      Github:http://github.com/numerhero

\*--------------------------------------------*/
/* 人员信息 30 */ 
let oMembersInfo = [
    {
        "name" : "AllenYang", 
        "duties" : "2014基地总负责人",
        "pic" : "/assets/img/members-pic/members-pics/AllenYang/AllenYang.png"
    },{
        "name" : "Owen",
        "duties" : "前端组成员",
        "pic" : "/assets/img/members-pic/members-pics/Owen/Owen.png"        
    },{
        "name" : "Snow",
        "duties" : "前端组成员",
        "pic" : "/assets/img/members-pic/members-pics/Snow/Snow.png"
    },{
        "name" : "YanLong",
        "duties" : "Web组成员",
        "pic" : "/assets/img/members-pic/members-pics/YanLong/YanLong.png"
    },{
        "name" : "Niklaus",
        "duties" : "前端组成员",
        "pic" : "/assets/img/members-pic/members-pics/Niklaus/Niklaus.png"
    },{
        "name" : "lianghongchao",
        "duties" : "安卓组成员",
        "pic" : "/assets/img/members-pic/members-pics/lianghongchao/lianghongchao.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    },{
        "name" : "期待你的加入",
        "duties" : "",
        "pic" : "/assets/img/members-pic/members-pics/noman.png"
    }];


let $window = $(window),
    oW = innerWidth,
    oH = innerHeight,
    iNow = 0,
    oContainer = $(".container"),
    oScrollWrap = $(".scroll-wrap"),
    oLis = $(".scroll-wrap li"),
    oKnowUs = $(".know-us"),
    oCircleExhibition = $(".circle-exhibition"),
    oCircles = $(".circle-exhibition .circle"),
    oSecondStage = $(".second-stage"),
    oImWeb = $(".imweb"),
    oShards = $(".shard"),
    oGroup1 = $(".shard-wrap .group-1"),
    oGroup2 = $(".shard-wrap .group-2"),
    oGroup3 = $(".shard-wrap .group-3"),
    oMemberInfo = $(".member-info"),
    oMemberName = $(".member-info .member-name"),
    oMemberDuties = $(".member-info .member-duties"),
    oNeedYouBtn = $(".we-need-you"),
    oImWebLogo = $(".imweb-logo"),
    oImWebFont = $(".imweb-font"),
    oJoinUs = $(".join-us")

// 让所有球都归为初始位置
oCircles.css("transform" ,"rotate(0) translateY(0)");

// 整体宽高 动态获取
$(function () {
    function resizeHandle() {
        oW = innerWidth;
        oH = innerHeight;
        oContainer.css("width" , oW);
        oContainer.css("height" , oH);
        oLis.css("height", oH);
        oScrollWrap.css("marginTop", iNow * -oH);
    };
    resizeHandle();
    $window.on("resize" , resizeHandle);
});

// 认识我们按钮
$(function () {
    oKnowUs.on("click" , function() {
        iNow = 1;
        changeScreen();   
    });
});

// 展示效果
$(function () {
    let temp = 1;

    oCircles.hover(function (ev) {     // 碎片聚化
        let num = ev.target.dataset.member;
        
        oMemberName.html(oMembersInfo[num].name);
        oMemberDuties.html(oMembersInfo[num].duties);

        if(temp === 3) {
            temp = 1;
        } else {
            ++temp; 
        }
        switch(temp) {
            case 1:
                oGroup1.addClass("thogether-shard");
                oGroup1.css("background",'url('+oMembersInfo[num].pic+')');
                oGroup1.css("zIndex","5201314");
            break;
            case 2:
                oGroup2.addClass("thogether-shard");
                oGroup2.css("background",'url('+oMembersInfo[num].pic+')');
                oGroup2.css("zIndex","5201314");
            break;
            case 3:
                oGroup3.addClass("thogether-shard");
                oGroup3.css("background",'url('+oMembersInfo[num].pic+')');
                oGroup3.css("zIndex","5201314");
            break;

        }
        oMemberInfo.removeClass("hidden");
        oImWeb.addClass("hidden");
    },function () { // 碎片散开
        oImWeb.removeClass("hidden");
        switch(temp) {
            case 1:
                oGroup1.removeClass("thogether-shard");
                oGroup1.removeAttr("style");
                break;
            case 2:
                oGroup2.removeClass("thogether-shard");
                oGroup2.removeAttr("style");
                break;
            case 3:
                oGroup3.removeClass("thogether-shard");
                oGroup3.removeAttr("style");
                break;
        }
        oMemberInfo.addClass("hidden");
    });
});

// 我们需要你
$(function () {
    oNeedYouBtn.on("click" , function () {
        Promise.resolve()
            .then(() => {
                oNeedYouBtn.addClass("none");
                oShards.addClass("thogether-shard");
                oShards.addClass("hidden");
                oImWeb.addClass("hidden");
            })
            .then(() => {
                setTimeout(function () {
                    oShards.addClass("none");
                    oImWeb.addClass("none");

                    oCircles.css("transform" ,"rotate(0) translateY(0)");
                    oCircles.addClass("hidden");
                },600);
            })
            .then(() => {
                setTimeout(function () {
                    oCircles.addClass("none");
                    oImWebLogo.addClass("wobble");

                    oJoinUs.removeClass("none");
                },2100);
            })
            .then(() => {
                setTimeout(function (){
                    oImWebLogo.css("top","-250px");
                    oImWebFont.removeClass("hidden");
                    oImWebFont.addClass("wobble");
                    oJoinUs.removeClass("hidden")
                },2400);
            }) 
    });

    oJoinUs.on("click" , function () {
        window.open("http://xgcyjd.com/pages/enroll-page.html")
    });
});



function changeScreen () {
    if(iNow === 1) {
        oSecondStage.css("transform","scale(1,1)");
        oSecondStage.css("opacity" , "1");
        oCircles.removeAttr("style");
        setTimeout(function () {
            oImWeb.css("transform","scale(1,1)");
        },2000);
    }
    oScrollWrap.css("marginTop", iNow * -oH);
}