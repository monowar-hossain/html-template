(function ($) {
	"use strict"
	
	$(document).ready(function(){

		$('#nav').slicknav();

		/* One Page Nav*/
        if ($.fn.onePageNav) {
            $('#nav').onePageNav({
                scrollThreshold: 0.2,
            });
        }




	});

	

	$(window).on("load", function() {

		/* Portfolio Isotope */
		$('.portfolio_list').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.portfolio_item',
		  percentPosition: true,
		  masonry: {
		    // use element for option
		    columnWidth: '.portfolio_item'
		  }
		});


		/* Blog Isotope */
		$('.blog_list').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.blog_item',
		  percentPosition: true,
		  masonry: {
		    // use element for option
		    columnWidth: '.blog_item'
		  }
		});





	});



    /* Menu Active */
    $('.menu_area ul li').on('click', function(){
        var tab_id = $(this).attr('data-tab');
        $('.menu_area ul li').removeClass('active');
        $('.menu_area ul li').removeClass('active');
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    /* Write Us Form */
    $('.write_us_btn').on('click', function(){
    	$('.write_us_form').addClass('active_form');
    	$('.footer_inner .row').fadeOut();
    });
    $('.form_close').on('click', function(){
    	$('.write_us_form').removeClass('active_form');
    	$('.footer_inner .row').fadeIn();
    });



	$(window).on("scroll", function(){

		/* fixed menu */
		if($(this).scrollTop()>88){
			$('.header_top_area').addClass("fixed-menu")
		}
		else(
			$('.header_top_area').removeClass("fixed-menu")
		);


		
	});




	/* Testimonial Slick Carousel */
	if ($.fn.slick){
		$('.testimonial_list').slick({
			autoplay: true,
			arrows: true,
			speed: 2000,
			prevArrow: '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
			nextArrow: '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			]
		});
	};



	/* Client Slick Carousel */
	if ($.fn.slick){
		$('.client_list').slick({
			autoplay: true,
			arrows: false,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
			]
		});
	};
		


}(jQuery));


