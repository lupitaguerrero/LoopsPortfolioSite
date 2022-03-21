$(window).on("load", function() {
	
	$(".loader").fadeOut(1000)

})


$(document).ready(function() {

$('#slides').superslides({
	animation: 'fade',
	play: 4000,
	pagination:false
});

var typed = new Typed(".typed", {
	strings: [ "Software Engineer", "Web Developer", "Student"],
	typeSpeed: 90,
	loop: true,
	startDelay: 800,
	showCursor: false
	
});

});

