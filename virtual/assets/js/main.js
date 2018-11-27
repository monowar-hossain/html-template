        jQuery(document).ready(function($) {


            $('.count').counterUp({
                delay: 10,
                time: 1000
            });


		
		//		start isotope
        $(".filter-button button").on('click', function() {

    		$(".filter-button button").removeClass("active");
    		$(this).addClass("active");

    		var selector = $(this).attr('data-filter');
    		$(".project-list").isotope({
    			filter: selector,
    		});
    	});
		jQuery(".project-list").isotope();
	//		end isotope


        //mCustomScrollbar start
            $(".about-scroll").mCustomScrollbar({
                scrollInertia:50,
            });

            $(".service-scroll").mCustomScrollbar({
                scrollInertia:50,
            });

            $(".portfolio-scroll").mCustomScrollbar({
                scrollInertia:50,
            });

            $(".resume-scroll").mCustomScrollbar({
                scrollInertia:100,
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

    $('.image-link').magnificPopup({
            type:'image',
            gallery: {
                  enabled: true
                },
                removalDelay: 1000,
            

});

//magnificPopup end


        });



