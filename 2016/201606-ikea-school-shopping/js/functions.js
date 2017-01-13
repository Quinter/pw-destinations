$(document).ready(function() {
	//disable page scroll on load for mobile only
	if ( $(window).width() < 768 ) {
		$("html, body").css({
			"overflow": "hidden",
			"height": "100%"
		});
		
		showMainMobile();

		$("#ikea-back-top").click(function() {
			scrollToTop($("body,html"), 63);
		});
	}

});

function showMainMobile() {
	$("#ikea-mobile-header").click(function() {
		//fade in the main content section
		$("#main-new").show();

		//show back-to-top button
		$("#ikea-back-top").show();


		//enable scroll (only disabled for fixed mobile page on load)
		$("html, body").css({
			"overflow": "auto",
			"height": "auto"
		});

		//fade out this section
		$(this).fadeOut("slow");			
	});
};

//generic "scroll-to-top" (was used in Valspar Phase 2)
function scrollToTop(selector, moreOffset) {
	$("body,html").animate({
		scrollTop: selector.offset().top - moreOffset
	});
};