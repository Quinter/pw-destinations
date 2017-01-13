$(document).ready(function() {

	/* Browser Detection */
	var isWebkit = 'WebkitAppearance' in document.documentElement.style;
	console.log("isWebkit: ", isWebkit);

	if ( !(isWebkit) ) {
		$(".section-group .section-number .pb-shell").css({
			'opacity': .5
		});
	}

	/* Variables */
	var notAtTop = false,
		backTopBtn = $("#bs-back-top"),
		mainContentOffset = $(".pb-section-reasons").offset().top, // may need manual offset for FF/Safari
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

		scrollToTopOf($("#pb-section-reasons"), verticalOffset);
	});

	backTopBtn.on("click touchstart", function() {
		scrollToTopOf($("body, html"), 63);
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
			//fade back-top btn in
			backTopBtn.fadeIn();
			//set notAtTop = true
			notAtTop = true;
			console.log("HELLO!");

		}
		else if ( $(window).scrollTop() < mainContentOffset && notAtTop === true ) {
			backTopBtn.fadeOut();
			notAtTop = false;
			console.log("BYE!");
		}
	}
})

