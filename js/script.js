$(function() {
	$('.game-info-bottom').each(function() {
		$(this).hide();
	});

	$('.toggle').click(function () {
		$( ".game-info-bottom" ).slideToggle( 300 );
	});
	

	$('#PL').click(function () {
		if ($(this).css("margin-right") == "200px") {
			$(this).animate({
				"margin-right": '-=200'
			});
		} else {
			$(this).animate({
				"margin-right": '+=200'
			});
		}

	});
});     