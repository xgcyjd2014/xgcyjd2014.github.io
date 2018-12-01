/*--------------------------------------------*\
        信管创业基地 index.js
        Design And Build By 倪云港
        Email: yungangni@gmail.com
    Github: http://github.com/niyungang
\*--------------------------------------------*/
// 欢迎
$(function() {
    window.addEventListener('load', function() {
        if (window.Notification && Notification.permission !== "granted") {
            Notification.requestPermission(function(status) {
                if (Notification !== status) {
                    Notification.permission = status;
                }
            });
        }
    })
    if (window.Notification && Notification.permission === "granted") {
        var n = new Notification("欢迎访问2015信管创业基地", {
            icon: "../../../assets/img/Notification-logo.png",
            body: "愿景：用心铸造卓越Offer"
        });
    } else if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function(status) {
            if (Notification.permission !== status) {
                Notification.permission = status;
            }
            // 如果用户同意了
            if (status === "granted") {
                var n = new Notification("欢迎访问2015信管创业基地", {
                    icon: "../../../assets/img/Notification-logo.png",
                    body: "愿景：用心铸造卓越Offer"
                });
            } else {
                return;
            }
        });
    }
});
//移动端导航栏切换
$('#menu-bar').click(function() {
    $('.navUl').hasClass('navUlshow') ? $('.navUl').removeClass('navUlshow') :
        $('.navUl').addClass('navUlshow')
    console.log($('.navUl').css('right'))
})