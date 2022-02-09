/* 글로벌 메뉴 */

$('.global_img').click(function () {
    $('.global_txt').slideToggle();
    //$('.global_txt').addClass('on');

    //$('.global_txt').slideDown();
    $(this).toggleClass("on");
    //클릭하면 class="on" 추가
    //한번더 클릭하면 class="on" 제거
    $('.logo_box').toggleClass('on');
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




$('.s5b_2').mouseover(function(){
    $('.s5_fullbg').addClass('on')
})

$('.s5b_2').mouseout(function(){
    $('.s5_fullbg').removeClass('on')
})






$(document).ready(function(){
    $('.gnb_center').on("mouseenter",function(){
        $('.gnb_center_submenu').stop().addClass('on')
        $('.gnb').stop().addClass('bg')
    })
})

$(document).ready(function(){
    $('.gnb').on("mouseleave",function(){
        $('.gnb_center_submenu').stop().removeClass('on')
        $('.gnb').stop().removeClass('bg')
    })
})


