
(function ($) {
	"use strict"


$(document).ready(function () {
	
		$('.header-area').slicknav({
			brand : '<a href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>',
			duration: 1000,
			prependTo:'header',
			closedSymbol: "&#x2b;",
			openedSymbol: "&#x2212;"	
		});


			
	//		start fixed-menu
/* 		var nav = $('.header-area');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 550) {
				nav.addClass("fixed-menu");
			} else {
				nav.removeClass("fixed-menu");
			}
		}); */
	//		end fixed-menu
 
 
		//	start main slider
		
		$(".team-slider").owlCarousel({
            items: 4,
            nav: false,
            margin:30,
            dots: true,
            autoplay: false,			
            loop: true,
        });
 
 
 
});


}(jQuery));