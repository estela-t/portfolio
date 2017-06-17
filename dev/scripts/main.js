const ohHey = "Hello World";

console.log(ohHey);


// display nav items on scroll
$(function(){
	$("window").scroll( function() {
		if ($(this).scrollTop() > 200) {
			$("#nav").fadeIn(500);
		} else {
			$("#nav").fadeOut(500);
		}
	});
});
