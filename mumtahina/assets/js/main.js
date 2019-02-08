$(document).ready(function(){
  
  		
	// Menu SHOW - HIDE - BOX SEARCH ON MENU
	$('body .right-menu-btn').on('click', function () {
		$('body .right-menu-btn').toggleClass('hide');
	});
	
	$('body .right-menu li a').on('click', function () {
		$('body .right-menu-btn').addClass('hide');
	});
	

	// Menu HIDE BOX SEARCH WHEN CLICK OUTSIDE
 	if ($(window).width() > 767){
		$('body').on('click', function (event) {
			if ($('body .right-menu').has(event.target).length == 0 && !$('body .right-menu').is(event.target)
				&& $('body .right-menu-btn').has(event.target).length == 0 && !$('body .right-menu-btn').is(event.target)) {
				if ($('body .right-menu-btn').hasClass('hide') == false) {
					$('body .right-menu-btn').toggleClass('hide');
				};
			}
		});
	};
	
		
  
  
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}


 //animation scroll
  $("a").on('click', function(event) {
 if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
 $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  

/*========== Start Counter To Js Statistics   ==========*/	
$(window).on('scroll.statistics', function () {
	var stat = $('.statistics');
		if ($(this).scrollTop() >= stat.offset().top - $(window).height() + 220) {
			$('.count').countTo();
			$(window).off('scroll.statistics');
		}
	});
	
	
	    /*========== Start Portfolio Trigger Filterizr Js ==========*/
    $("#control li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // The Filterizr
    $('#filtr-container').filterizr({
        animationDuration: 0.4
    });
	
/*========== Start Magnigic Popup Js ==========*/
    $('.single-portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
/*========== Start owl Carousel testimonial   ==========*/
    $('.testimonial').owlCarousel({
        loop: true,
        items: 2,
        margin: 50,
        nav: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			700: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
    });
	
	
	     /*========== Start sponsor/logos   ==========*/
    $('.sponsor').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });
    

	
	
	
	
	
});





$(window).scroll(function() {
	var hT = $('#skill-bar-wrapper').offset().top,
		hH = $('#skill-bar-wrapper').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS > (hT+hH-1.4*wH)){
		jQuery(document).ready(function(){
			jQuery('.skillbar-container').each(function(){
				jQuery(this).find('.skills').animate({
					width:jQuery(this).attr('data-percent')
				}, 5000);
			});
		});
	}
});