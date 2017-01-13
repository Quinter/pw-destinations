//The repeated 62 value most likely refers to the height of the fixed header on destinations.

$(document).ready(function() {

	/* Browser Detection */
	var isWebkit = 'WebkitAppearance' in document.documentElement.style;

	if ( !(isWebkit) ) {
		$(".section-group .section-number .pb-shell").css({
			'opacity': .5
		});
	}

	/* Variables */
	var notAtTop = false,
		backTopBtn = $("#bs-back-top"),
		mainContentOffset = $(".pb-section-reasons").offset().top - 62,
		windowWidth = $(window).width(),
		verticalOffset;

	/* Event Listeners */
	$(".pb-btn-scroll").on("click touchstart", function() {
		scrollToTopOf($("#pb-section-reasons"), 62);
	});

	backTopBtn.on("click touchstart", function() {
		scrollToTopOf($("body, html"), 62);
		toggleBackTopBtn();
	});

	$(document).on("scroll touchmove", function() {
		toggleBackTopBtn();
	});

	/* Event Handlers */
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 600);
		return false;
	};

	function toggleBackTopBtn() {

		if ( $(window).scrollTop() >= mainContentOffset && notAtTop === false ) {
			backTopBtn.fadeIn();
			notAtTop = true;
		}
		else if ( $(window).scrollTop() < mainContentOffset && notAtTop === true ) {
			backTopBtn.fadeOut();
			notAtTop = false;
		}
	}
})




