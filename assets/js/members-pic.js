var oMembersInfo = [{
    "name": "AllenYang",
    "duties": "2014基地负责人",
    "pic": "/assets/img/members-pic/members-pics/AllenYang/AllenYang.png"
}, {
    "name": "Owen",
    "duties": "2014前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Owen/Owen.png"
}, {
    "name": "Snow",
    "duties": "2014前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Snow/Snow.png"
}, {
    "name": "YanLong",
    "duties": "2014Web组成员",
    "pic": "/assets/img/members-pic/members-pics/YanLong/YanLong.png"
}, {
    "name": "Niklaus",
    "duties": "2014前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Niklaus/Niklaus.png"
}, {
    "name": "lianghongchao",
    "duties": "2014安卓组成员",
    "pic": "/assets/img/members-pic/members-pics/lianghongchao/lianghongchao.png"
}, {
    "name": "willow",
    "duties": "2014C++组成员",
    "pic": "/assets/img/members-pic/members-pics/willow/willow.png"
}, {
    "name": "QingFeng",
    "duties": "2014安卓组成员",
    "pic": "/assets/img/members-pic/members-pics/QingFeng/qingfeng.png"
}, {
    "name": "DemoCiMo",
    "duties": "2014Web组成员",
    "pic": "/assets/img/members-pic/members-pics/DemoCiMo/democimo.png"
}, {
    "name": "Claire",
    "duties": "2014前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Claire/Claire.png"
}, {
    "name": "CuiRan",
    "duties": "2014基地秘书长",
    "pic": "/assets/img/members-pic/members-pics/CuiRan/cuiran.png"
}, {
    "name": "Joy",
    "duties": "2014前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Joy/joy.png"
}, {
    "name": "Yoto",
    "duties": "2015基地负责人",
    "pic": "/assets/img/members-pic/members-pics/Yoto/Yoto.jpg"
}, {
    "name": "Neo",
    "duties": "2015基地前端组长",
    "pic": "/assets/img/members-pic/members-pics/Neo/Neo.png"
}, {
    "name": "Candy",
    "duties": "2015基地小秘",
    "pic": "/assets/img/members-pic/members-pics/Candy/Candy.jpg"
}, {
    "name": "Selly",
    "duties": "2015前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Selly/Selly.jpg"
}, {
    "name": "Cici",
    "duties": "2015前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Cici/Cici.jpg"
}, {
    "name": "zhangmeng",
    "duties": "2015前端组成员",
    "pic": "/assets/img/members-pic/members-pics/zhangmeng/zhangmeng.jpg"
}, {
    "name": "yemengshan",
    "duties": "2015C++组成员",
    "pic": "/assets/img/members-pic/members-pics/yemengshan/yemengshan.jpg"
}, {
    "name": "Laurance",
    "duties": "2015前端组成员",
    "pic": "/assets/img/members-pic/members-pics/Laurance/Laurance.jpg"
}, {
    "name": "Lillian",
    "duties": "2015JAVA组成员",
    "pic": "/assets/img/members-pic/members-pics/Lillian/Lillian.jpg"
}, {
    "name": "Boy",
    "duties": "2015前端组成员",
    "pic": "/assets/img/members-pic/members-pics/boy/boy.jpeg"
}, {
    "name": "Maria",
    "duties": "2015JAVA组成员",
    "pic": "/assets/img/members-pic/members-pics/Maria/Maria.jpg"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}, {
    "name": "期待你的加入",
    "duties": "",
    "pic": "/assets/img/members-pic/members-pics/noman.png"
}];
var $window = $(window),
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
    oJoinUs = $(".join-us");
stageCover = $('.scroll-wrap li .first-stage-cover')
oCircles.css("transform", "rotate(0) translateY(0)");
$(function() {
    function resizeHandle() {
        oW = innerWidth;
        oH = innerHeight;
        oContainer.css("width", oW);
        oContainer.css("height", oH);
        oLis.css("height", oH);
        oScrollWrap.css("marginTop", iNow * -oH)
    }
    resizeHandle();
    $window.on("resize", resizeHandle)
});
$(function() {
    oKnowUs.on("click", function() {
        iNow = 1;
        changeScreen()
    });

    function changeScreen() {
        if (iNow === 1) {
            oSecondStage.css("transform", "scale(1,1)");
            oSecondStage.css("opacity", "1");
            oCircles.removeAttr("style");
            stageCover.addClass('first-stage-cover-end-index');
            setTimeout(function() {
                oImWeb.css("transform", "scale(1,1)")

            }, 2000)
        }
        oScrollWrap.css("marginTop", iNow * -oH)
    }
});
$(function() {
    var temp = 1;
    oCircles.hover(function(ev) {
        var num = ev.target.dataset.member;
        oMemberName.html(oMembersInfo[num].name);
        oMemberDuties.html(oMembersInfo[num].duties);
        if (temp === 3) {
            temp = 1
        } else {
            ++temp
        }
        switch (temp) {
            case 1:
                oGroup1.addClass("thogether-shard");
                oGroup1.css("background", "url(" + oMembersInfo[num].pic + ")");
                oGroup1.css("zIndex", "5201314");
                break;
            case 2:
                oGroup2.addClass("thogether-shard");
                oGroup2.css("background", "url(" + oMembersInfo[num].pic + ")");
                oGroup2.css("zIndex", "5201314");
                break;
            case 3:
                oGroup3.addClass("thogether-shard");
                oGroup3.css("background", "url(" + oMembersInfo[num].pic + ")");
                oGroup3.css("zIndex", "5201314");
                break
        }
        oMemberInfo.removeClass("hidden");
        oImWeb.addClass("hidden")
    }, function() {
        oImWeb.removeClass("hidden");
        switch (temp) {
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
                break
        }
        oMemberInfo.addClass("hidden")
    })
});
$(function() {
    oNeedYouBtn.on("click", function() {
        Promise.resolve().then(function() {
            oNeedYouBtn.addClass("none");
            oShards.addClass("thogether-shard");
            oShards.addClass("hidden");
            oImWeb.addClass("hidden")
        }).then(function() {
            setTimeout(function() {
                oShards.addClass("none");
                oImWeb.addClass("none");
                oCircles.css("transform", "rotate(0) translateY(0)");
                oCircles.addClass("hidden")
            }, 600)
        }).then(function() {
            setTimeout(function() {
                oCircles.addClass("none");
                oImWebLogo.addClass("wobble");
                oJoinUs.removeClass("none")
            }, 2300)
        }).then(function() {
            setTimeout(function() {
                oImWebLogo.css("top", "-250px");
                oImWebFont.removeClass("hidden");
                oImWebFont.addClass("wobble");
                oJoinUs.removeClass("hidden")
            }, 2600)
        })
    });
    oJoinUs.on("click", function() {
        window.open("/pages/enroll-page.html")
    });
    let backgroundPromise = new Promise((resolve, reject) => {
        let bg = new Image();
        bg.onload = () => {
            resolve(bg)
        }
        bg.src = '/assets/img/members-pic/bg.png';
    }).then((bg) => {
        $('.scroll-wrap li .first-stage').css('background', `url('${bg.src}') no-repeat`)
        setTimeout(() => {
            $('.scroll-wrap li .first-stage-cover').addClass('first-stage-cover-end');
        }, 500);
    })
});