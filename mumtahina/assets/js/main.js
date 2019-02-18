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
	
		
/*--------------------
	* Header Fixed
----------------------*/

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if(scroll >= 550) {
			$(".header").addClass("fixed");
		} else {
			$(".header").removeClass("fixed");
		}
	});

	
	
  

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

	
	
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
//# sourceURL=pen.js

	
	
$('.video-btn').magnificPopup({type:'video'});
   

/*========== Start Counter To Js Statistics   ==========*/

	if($('.statistics').length !== 0){
		$(window).on('scroll.statistics', function () {
			var stat = $('.statistics');
				if ($(this).scrollTop() >= stat.offset().top - $(window).height() + 220) {
					$('.count').countTo();
					$(window).off('scroll.statistics');
				}
		});
	}
	
	
	    /*========== Start Portfolio Trigger Filterizr Js ==========*/

	if($('.statistics').length !== 0){
		
		$("#control li").on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});
		// The Filterizr
		$('#filtr-container').filterizr({
			animationDuration: 0.4
		});
	
	}
	
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
	if($('#skill-bar-wrapper').length !== 0){
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
	}
});