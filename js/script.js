


$(document).ready(function () {
	var $logo = $(".loading-logo-wrap");
	var $loader = $(".loading-ring-wrap");

	setTimeout(function() {
		$logo.addClass("fade-in");
	}, 100);

	setTimeout(function() {
		$logo.removeClass("fade-in");
		$logo.addClass("fade-out");
	}, 2500);

	setTimeout(function() {
		$loader.addClass("fade-in");
	}, 3300);
});