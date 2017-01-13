$(document).ready(function() {
	//disable page scroll on load for mobile only
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width <= 1024) {
        $(".loreal-product").each(function() {
        var detach = $(this).find(".loreal-product-link").detach();
        $(detach).insertAfter($(this).find(".loreal-product-image"));
        });

        $(".loreal-product").each(function() {
        var detach = $(this).find(".loreal-product-content").detach();
        $(detach).insertBefore($(this).find(".loreal-product-image"));
        });
    }

	/* Variables */
	var notAtTop = false,
		backTopBtn = $("#loreal-back-top"),
		mainContentOffset = $("#main-new").offset().top, // may need manual offset for FF/Safari
		windowWidth = $(window).width(),
		verticalOffset;

	/* Event Listeners */
	$(".pb-btn-scroll").on("click touchstart", function() {
		if (windowWidth < 768) {
			verticalOffset = 63;
		}
		else {
			verticalOffset = 0;
		}

		scrollToTopOf($("#main-new"), verticalOffset);
	});

	backTopBtn.on("click touchstart", function() {
		scrollToTopOf($("body, html"), 63);
		toggleBackTopBtn();
	});

	if (windowWidth < 1024) {
		$(document).on("scroll touchmove", function() {
			toggleBackTopBtn();
		});
	}
	
	/* Event Handlers */
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 600);
		return false;
	};

	function toggleBackTopBtn() {

		if ( $(window).scrollTop() >= mainContentOffset && notAtTop === false ) {
			//fade back-top btn in
			backTopBtn.fadeIn();
			//set notAtTop = true
			notAtTop = true;

		}
		else if ( $(window).scrollTop() < mainContentOffset && notAtTop === true ) {
			backTopBtn.fadeOut();
			notAtTop = false;
		}
	}
});
