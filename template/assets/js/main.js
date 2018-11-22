

//menu start
(function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 975;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#main-nav").menumaker({
   format: "multitoggle"
});
});
})(jQuery);


//memu end



// Sticky Header start

$(window).scroll(function(){

    if ($(window).scrollTop() > 100) {
        $("#main-menu").addClass("sticky");
    } else {
        $("#main-menu").removeClass("sticky");
    }


});

// Sticky Header end


(function($){
$(document).ready(function(){

//about-slider start
        $('.about-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        autoplayHoverPause: false,
        autoplay: false,
        smartSpeed: 700,
        navText: [
          '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                center: false
            },
            480:{
                items:1,
                center: false
            },
            600: {
                items: 1,
                center: false
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
        
// about-slider end



// start isotop
// init Isotope
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
//      end isotope
//testimonial start

$(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: false,
        smartSpeed: 700,
            responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
//testimonial end

//client start

$(".client").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: false,
        smartSpeed: 700,
            responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
//client end


});
})(jQuery);





//      start scrollTop
        
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
  
//      end scrollTop
