$(document).ready(function() {
	var NavY = $('.header').offset().top;
    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
	   if (ScrollY > NavY) {

        $('.scrolltop').addClass('scrollshow');
        $('.scrolltop').removeClass('scrollhide');
				$('.header').addClass('sticky');
        $('.logo').addClass('logomove');
        $('.header-main-menu-left').addClass('menuleftmove');
        $('.header-main-menu-right').addClass('menurightmove');
        $('.logo').removeClass('logoback');
        $('.header-main-menu-left').removeClass('menuleftback');
        $('.header-main-menu-right').removeClass('menurightback');
        $('.header').removeClass('stickyback');
	   } else {
        $('.scrolltop').addClass('scrollhide');
        $('.scrolltop').removeClass('scrollshow');
				$('.header').removeClass('sticky');
        $('.logo').removeClass('logomove');
        $('.logo').addClass('logoback');
        $('.header').addClass('stickyback');
        $('.header-main-menu-left').removeClass('menuleftmove');
        $('.header-main-menu-right').removeClass('menurightmove');
        $('.header-main-menu-left').addClass('menuleftback');
        $('.header-main-menu-right').addClass('menurightback');
	   }
	};
    var flaga1 = 0;
    var flaga2 = 0;
    var flaga3 = 0;
    var clickicons = function(){
        $('.icon-heart').click(function(){
            if(flaga1 === 0){
                $('.showtext1').addClass('showtext1move');
                $('.showtext1').removeClass('showtext1back');
                $('.icon-heart').removeClass('textnormal');
                $('.icon-heart').addClass('texton');
                $('.icon-star').addClass('textoff');
                $('.icon-graduation-cap').addClass('textoff');
                $('.icon-star').removeClass('textnormal');
                $('.icon-graduation-cap').removeClass('textnormal');
                flaga1 = 1;
                flaga2 = 2;
                flaga3 = 2;
            }else if(flaga1 === 1){
                $('.showtext1').addClass('showtext1back');
                $('.icon-heart').removeClass('texton');
                $('.showtext1').removeClass('showtext1move');
                $('.icon-star').addClass('textnormal');
                $('.icon-star').removeClass('textoff');
                $('.icon-graduation-cap').addClass('textnormal');
                $('.icon-graduation-cap').removeClass('textoff');
                flaga1 = 0;
                flaga2 = 0;
                flaga3 = 0;
            }
        });
        $('.icon-star').click(function(){
            if(flaga2 === 0){
                $('.showtext2').addClass('showtext2move');
                $('.showtext2').removeClass('showtext2back');
                $('.icon-star').removeClass('textnormal');
                $('.icon-star').addClass('texton');
                $('.icon-heart').addClass('textoff');
                $('.icon-graduation-cap').addClass('textoff');
                $('.icon-heart').removeClass('textnormal');
                $('.icon-graduation-cap').removeClass('textnormal');
                flaga2 = 1;
                flaga1 = 2;
                flaga3 = 2;
            }else if(flaga2 === 1){
                $('.icon-star').removeClass('texton');
                $('.showtext2').addClass('showtext2back');
                $('.showtext2').removeClass('showtext2move');
                $('.icon-heart').addClass('textnormal');
                $('.icon-heart').removeClass('textoff');
                $('.icon-graduation-cap').addClass('textnormal');
                $('.icon-graduation-cap').removeClass('textoff');
                flaga2 = 0;
                flaga1 = 0;
                flaga3 = 0;
            }
        });
        $('.icon-graduation-cap').click(function(){
            if(flaga3 === 0){
                $('.showtext3').addClass('showtext3move');
                $('.showtext3').removeClass('showtext3back');
                $('.icon-graduation-cap').removeClass('textnormal');
                $('.icon-graduation-cap').addClass('texton');
                $('.icon-star').addClass('textoff');
                $('.icon-heart').addClass('textoff');
                $('.icon-heart').removeClass('textnormal');
                $('.icon-star').removeClass('textnormal');
                flaga3 = 1;
                flaga1 = 2;
                flaga2 = 2;
            }else if(flaga3 === 1){
                $('.icon-graduation-cap').removeClass('texton');
                $('.showtext3').addClass('showtext3back');
                $('.showtext3').removeClass('showtext3move');
                $('.icon-star').addClass('textnormal');
                $('.icon-star').removeClass('textoff');
                $('.icon-heart').addClass('textnormal');
                $('.icon-heart').removeClass('textoff');
                flaga3 = 0;
                flaga1 = 0;
                flaga2 = 0;
            }
        });
    };
    var scrolltotop = function(){
        $('.scrolltop').click(function(){
            $('body,html').animate({
				scrollTop: 0
			}, 1000);
        });
    };
    stickyNav();
    scrolltotop();
    clickicons();
    $(window).scroll(function() {
		stickyNav();
	});
});
