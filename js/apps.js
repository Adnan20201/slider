$(function (){
    $('#slider-container').slick({
        prevArrow:'<i class="slide-arrow slide-arrow-left fas fa-caret-left"></i>',
        nextArrow:'<i class="slide-arrow slide-arrow-right fas fa-caret-right"></i>',
        autoplay:true,
        autoplaySpeed: 3000,
        dots:true,
        dotsClass: 'slide_dots',
    });
    $('#counter').counterUp({
        time:3000,
    })
})