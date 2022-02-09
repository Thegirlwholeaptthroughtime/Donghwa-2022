/* 글로벌 메뉴 */

$('.global_img').click(function () {
    $('.global_txt').slideToggle();

    //$('.global_txt').slideDown();
    $(this).toggleClass("on");
})




/* 와우 애니메이션 */

var wow = new WOW({

    boxClass: 'wow', // animated element css class (default is wow)

    animateClass: 'animated', // animation css class (default is animated)

    offset: 0, // distance to the element when triggering the animation (default is 0)

    mobile: true, // trigger animations on mobile devices (default is true)

    live: true, // act on asynchronously loaded content (default is true)

    callback: function (box) {

        // the callback is fired every time an animation is started

        // the argument that is passed in is the DOM node being animated

    },

    scrollContainer: null, // optional scroll container selector, otherwise use window,

    resetAnimation: true, // reset animation on end (default is true)

});

wow.init();



/* 지앤비 */

$('.gnbc').hover(
    function () {
        $(this).find('.submenu').stop().slideDown();
    },
    function () {
        $(this).find('.submenu').stop().slideUp();
    }
);



/* 탭메뉴 */

$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
});


/* 푸터 붙여넣기 */

$(document).ready(function () {
    $('#header').load("../header.html")
    $('#footer').load("../footer.html")
});






$(function () {
    var lastScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 100) {
            //이벤트를 적용시킬 스크롤 높이
            $(".gnb").addClass("active");
        } else {
            $(".gnb").removeClass("active");
        }
        lastScroll = scroll;
    });


});





//모달창
$('.box .txt .button').click(function(){
    $(this).children('.modal').fadeToggle();

});

//.box .txt .button 를 클릭하면 그 자식인 'modal'을 찾아서 fadeToggle 시킨다