slick();
$(window).load(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth <736) {
        slick();   
    }
});

function slick(){    
    $('.produce-outer').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  draggable: true,
	  swipeToSlide: true,
    });
}

$(document).ready(function() {

	/* Variables */
	var notAtTop = false,
		backTopBtn = $("#perdue-back-top"),
		mainContentOffset = $("#perdue-main").offset().top, // may need manual offset for FF/Safari
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

		scrollToTopOf($("#perdue-main"), verticalOffset);
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

