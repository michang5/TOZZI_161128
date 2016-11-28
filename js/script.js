$(function() {
	$('.game-info-bottom').each(function() {
		$(this).hide();
	});

	$('.toggle').click(function () {
		$( ".game-info-bottom" ).slideToggle( 300 );
	});
	
	$('.nav-open').on("click", function (e) {
		e.preventDefault();

		$(this).toggleClass('nav-close');
	});
	

	$(".btn-close").click(function () {
			$(".modal").hide();
		idleTime = 0;
	});
	
	
});

