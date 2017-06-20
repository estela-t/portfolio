
$(function(){
	// portfolio scroller
	var panels = [".memoryFlip", ".councilMeet", ".podChill", ".difinity"];
	var currentPanel = 0;
	var numOfPanels = panels.length;

	function updatePanel(direction) {
		$(panels[currentPanel]).toggleClass("hidden");

		if (direction === "next") {
			currentPanel = currentPanel + 1;
		} else if (direction === "previous") {
			currentPanel = currentPanel - 1;
		} 
		// show the next/previous panel
		$(panels[currentPanel]).toggleClass("hidden");
	}

	$(".rightScroller").on("click", function () {
		updatePanel("next");
		// check to see if user is at the last panel 
		// if they are, go back to the beginning of the array
		if (currentPanel === numOfPanels){
			currentPanel = 0;
			$(panels[currentPanel]).toggleClass("hidden");
		}
	});

	$(".leftScroller").on("click", function () {
		if (currentPanel === 0) {
			currentPanel = currentPanel - 1;
		}
		updatePanel("previous");
	});

	// display nav items on scroll
	$(window).scroll( function() {
		if ($(window).scrollTop() > 150) {
			$("#nav").fadeIn(400);
		} else {
			$("#nav").fadeOut(400);
		}
				
	});
});
	// smooth scroll on anchor tags
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	// reveal headers on scroll
	new WOW().init();








