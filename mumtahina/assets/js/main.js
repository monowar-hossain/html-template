$(document).ready(function(){
  
  		
	// SHOW - HIDE - BOX SEARCH ON MENU
	$('body .right-menu-btn').on('click', function () {
		$('body .right-menu-btn').toggleClass('hide');
	});
	
	$('body .right-menu li a').on('click', function () {
		$('body .right-menu-btn').addClass('hide');
	});
	

	// HIDE BOX SEARCH WHEN CLICK OUTSIDE
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
  

  
  
  

  
  
  
  
  
  
  
  
});
