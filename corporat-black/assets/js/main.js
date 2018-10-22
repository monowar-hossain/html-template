$(document).ready(function(){
  /*
		Slider Crousel
		============================*/ 
		$('.vedio-play').magnificPopup({
			type:'video',
			});
		$('.projects-popup-link').magnificPopup({
			type:'image',
			gallery: {
				  enabled: true
				},
			});
				
			
		$(".slider-area").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: false,			
            loop: true,
            navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });
        
        $(".owl-carousel").on("translate.owl.carousel", function(){
            $(".slider-text span").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slider-text p").removeClass("animated fadeInDown").css("opacity", "0");
            $(".slider-text a").removeClass("animated fadeInUp").css("opacity", "0");
        });
        
        $(".owl-carousel").on("translated.owl.carousel", function(){
            $(".slider-text span").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".slider-text p").addClass("animated fadeInDown").css("opacity", "1");
            $(".slider-text a").addClass("animated fadeInUp").css("opacity", "1")
        });

		
				jQuery(".projects-title ul li").on('click', function() {
            $(".projects-title ul li").removeClass("active");
            $(this).addClass("active");
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
               filter: selector 
            });
        });
		
  /*=====about-carousel=========*/ 
		$(".about-carousel").owlCarousel({
            items: 1,
            nav: true,
            dots: false,
            autoplay: true,			
            loop: true,
            navText:["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        });
  /*=====Logo Crousel=========*/ 
		$(".slide-client").owlCarousel({
            nav: false,
            dots: false,
            autoplay: true,			
            loop: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
				},
				600:{
					items:4,
				},
				1000:{
					items:5,
				}
			}
        });
  /*=====testimonial Crousel=========*/ 
		$(".slide-testimonial").owlCarousel({
			margin:20,
            nav: true,
            dots: false,
            autoplay: true,			
            loop: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
        });
		
  /*=====related-portfolio Crousel=========*/ 
		$("#related-portfolio").owlCarousel({
			margin:20,
            nav: false,
            dots: true,
            autoplay: false,
            loop: true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,
				},
				1000:{
					items:3,
				}
			}
        });
		

		
		
  	//start counter number
	$('.count').counterUp({
		delay: 10,
		time: 2000
	});
	//end counter number
		
	//		start fixed-menu
		var nav = $('.header-area');
		$(window).scroll(function () {
			if ($(this).scrollTop() > 125) {
				nav.addClass("fixed-menu");
			} else {
				nav.removeClass("fixed-menu");
			}
		});
	//		end fixed-menu
	
	      /***
          Preloader
      ***/
       $('body').addClass('preloader-active');
      
      $(window).on('load', function() { 
          $('.preloader').fadeOut();
          $('.preloader-spinner').delay(350).fadeOut('slow');
          $('body').removeClass('preloader-active');
      }); 
	
	
	
});

	$(function(){
		$('.mainmenu').slicknav({
			brand : '<a href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>'
		});
	});

	
		//		start scrollTop
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
	  
    var topPos = $(this).scrollTop();
	
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
	  
    } else {
      $(scrollTop).css("opacity", "0");
    }

  });
  
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
	
  });
	//		end scrollTop