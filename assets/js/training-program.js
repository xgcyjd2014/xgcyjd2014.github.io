/*--------------------------------------------*\
          xgjd training-program js
           Design And Build By Owen
      Github:http://github.com/numerhero

\*--------------------------------------------*/

$(function () {
    var $window = $(window),
        title = $(".wobble-title"),
        fe = $(".front-end-tp"),
        feC = $(".front-end-tp .circle"),
        be = $(".back-end-tp"),
        beC = $(".back-end-tp .circle"),
        cpp = $(".cpp-tp"),
        cppC = $(".cpp-tp .circle"),
        feCon = $(".mod .fe-con"),
        beCon = $(".mod .be-con"),
        cppCon = $(".mod .cpp-con"),
        modCon = $(".mod .mod-con"),
        oMod = $(".mod");

    oMod.css("width" , innerWidth);
    oMod.css("height" , innerHeight);

    $window.on("resize", function () {
        oMod.css("width" , innerWidth);
        oMod.css("height" , innerHeight);
    },false);

    modCon.on("click" , function (event) {
        event.stopPropagation()
    })

    fe.on("click" , function (event) {
        feCon.removeClass("none");
        oMod.addClass("mod-show");
    });

    be.on("click" , function (event) {
        beCon.removeClass("none");
        oMod.addClass("mod-show");
    });

    cpp.on("click" , function (event) {
        cppCon.removeClass("none");
        oMod.addClass("mod-show");
    });

    oMod.on("click" , function (ev) {
        feCon.addClass("none");
        beCon.addClass("none");
        cppCon.addClass("none");
        oMod.removeClass("mod-show");
    });

    $window.on("scroll.circle-move" , scrollfunc);

    function scrollfunc() {
        var pos = $window.scrollTop();
        if (pos > title.offset().top - 50) {
            stageShow();
            $window.off("scroll.circle-move");
        }
    }

    function stageShow() {
        cppshow(function () {
            beshow(function () {
                feC.addClass("circle-show");
            });
        });
     }   

     function cppshow(callback) {
        cppC.addClass("circle-show");
        setTimeout(function () {
            cpp.addClass("cpp-tp-position");
            setTimeout(function() {
                callback();
            },1000);
        },500);
     }

     function beshow(callback) {
        beC.addClass("circle-show");
        setTimeout(function () {
            be.addClass("back-end-tp-position");
            setTimeout(function() {
                callback();
            },1000);
        },500);
     }
    scrollfunc();

});