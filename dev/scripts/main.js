
$(function(){
	// portfolio scroller
	var panels = [".memoryFlip", ".difinity", ".podChill", ".councilMeet"];
	var currentPanel = 0;
	var numOfPanels = panels.length;
	console.log(numOfPanels);

	function updatePanel(direction) {
		$(panels[currentPanel]).toggleClass("hidden");

		if (direction === "next") {
			currentPanel = currentPanel + 1;
		} else if (direction === "previous") {
			currentPanel = currentPanel - 1;
		} 
		// show the next/previous panel
		$(panels[currentPanel]).toggleClass("hidden");

		// check to see if user is at the last panel 
		// if they are, go back to the beginning of the array
		// if (currentPanel === numOfPanels - 1) {
		// 	currentPanel === panels[0];
		// }
	}

	$(".rightScroller").on("click", function () {
		updatePanel("next");
		if (currentPanel === numOfPanels){
			currentPanel = 0;
			$(panels[currentPanel]).toggleClass("hidden");
		}

		console.log(currentPanel);
		console.log(panels);
	});

	$(".leftScroller").on("click", function () {
		if (currentPanel === 0) {
			currentPanel = currentPanel - 1;
		}
		updatePanel("previous");
		console.log(currentPanel);
	});

	// display nav items on scroll
	$("window").scroll( function() {
		if ($(this).scrollTop() > 200) {
			$("#nav").fadeIn(500);
		} else {
			$("#nav").fadeOut(500);
		}
	});

});








