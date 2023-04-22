// * Intialize slick slider
$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slidesToScroll:1,
        nextArrow:'.next-btn',
        prevArrow:'.prev-btn',
    });
});