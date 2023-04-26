// * Intialize slick slider
let bool = false;
$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slidesToScroll:1,
        nextArrow:'.next-btn',
        prevArrow:'.prev-btn',
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                }
            }
        ],
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    });
    $('.nav-trigger').click(()=>{
        $('.site-content-wrapper').toggleClass('scaled');
        bool = !bool;
        if(bool)
        {
            document.querySelector('.nav-trigger').children[0].src = './icons/icon-close-menu.svg';
            bool = true;
        }
        else
        {
            document.querySelector('.nav-trigger').children[0].src = './icons/icon-menu.svg';
            bool = false;
        }
    })
});