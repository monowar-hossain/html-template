jQuery(document).ready(function($) {


//mCustomScrollbar start
    $(".about-scroll").mCustomScrollbar({
        scrollInertia:50,
    });

    $(".resume-scroll").mCustomScrollbar({
        scrollInertia:100,
    });

    $(".service-scroll").mCustomScrollbar({
        scrollInertia:50,
    });

    $(".portfolio-scroll").mCustomScrollbar({
        scrollInertia:50,
    });

    $(".contact-scroll").mCustomScrollbar({
        scrollInertia:50,
    });

//mCustomScrollbar end


    $(".section-page").click(function(){
        $(".right-menu").animate({right: '0%'}, 1600);
    });
	
    $(".myhome").click(function(){
        $(".right-menu").animate({right: '-100%'}, 1600);
        $(".tech-panel").animate({top: '100%'}, 600);
    });

    $(".section-page.my-home").click(function(){
		$(".right-menu").stop();
    });
	
	
    $(".about-section").click(function(){
        $(".tech-panel").animate({top: '100%'}, 700);
        $("#about-section").animate({top: '0px'}, 700);

    });

    $(".service-section").click(function(){
        $(".tech-panel").animate({top: '100%'}, 700);
        $("#service-section").animate({top: '0px'}, 700);
    });
    
    $(".contact-section").click(function(){
        $(".tech-panel").animate({top: '100%'}, 700);
        $("#contact-section").animate({top: '0px'}, 700);
    });
    
    $(".portfolio-section").click(function(){
        $(".tech-panel").animate({top: '100%'}, 700);
        $("#portfolio-section").animate({top: '0px'}, 700);
    });
    
    $(".resume-section").click(function(){
        $(".tech-panel").animate({top: '100%'}, 700);
        $("#resume-section").animate({top: '0px'}, 700);
    });
    

//magnificPopup start
			
	$('.fancybox').fancybox({
		
		openEffect: 'elastic',
		closeEffect: 'elastic',
		openSpeed: 'slow',
		closeSpeed : 'slow',
		padding : 0,
		closeBtn: true,
		helpers: {
			overlay : {
				css : {
					'background' : 'rgba(00,00,00,0.85)'
				}
			},
		}
		
	});

//magnificPopup end

// start isotop

    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.projects-filter').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    $('.projects-filter').on( 'click', 'li', function() {
      $(this).addClass('active').siblings().removeClass('active');

    });

    $('.grid').isotope({
     // options
     itemSelector: '.element-item',
     layoutMode: 'fitRows'
    });

// end isotope



});

