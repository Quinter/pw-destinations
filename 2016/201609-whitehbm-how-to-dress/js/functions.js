$(document).ready(function() {
	var cta = $(".whbm-hed-cta"),
		sectionContainers = $(".whbm-section-container"),
		firstSection = $("#whbm-section-container-1"),
		topOfFirstSection = firstSection.offset().top,
		productSections = $(".whbm-section-products"),
		backTop = $("#whbm-back-top"),
		notAtTop = false,
		usingSlick;

	if ( $(window).width() >= 992 ) {
		usingSlick = false;
	} else {
		usingSlick = true;
	}

	//listen for orientation change and create slick sliders if window width < 992 (i.e. what're considering tablet + mobile)
	//otherwise (i.e. desktop), destroy the slick sliders
	$(window).on('orientationchange', function() {
		if ( !usingSlick && $(window).width() < 992 ) {
			createSlickSliders();
			hideAtCta(backTop);
			usingSlick = true;

			backTop.on('click', function() {
				scrollToTopOf($("body, html"), 0);
			});


		} else if ( usingSlick && $(window).width() >= 992 ) {
			destroySlickSliders();
			usingSlick = false;
		}
		//always show this since we're assuming user is on mobile or tablet device. scrollers will hide automatically if we switch from landscape to portrait, and they won't show at all the other way around
		backTop.show();
	});

	//DESKTOP
	if ( $(window).width() >= 992 ) {
		var scrollPrev = $(".whbm-prev"),
		scrollNext = $(".whbm-next"),
		nextFadeOffset = $(".whbm-hed-cta").offset().top;

		//prev and next click behavior
		$(".whbm-scroll-btn").on('click', function() {
			var activeSection = $(".active-section"),
				sectionNum = activeSection.attr("data-section-num"),
				//for some reason, I have to add 1 unit of additional offset for clicks on the prev button...next button works fine though
				waypointTriggerOffset;

			if ( $(this).hasClass('whbm-next') ) {
				sectionNum++;
				waypointTriggerOffset = 0;

			} else if ( $(this).hasClass('whbm-prev') ) {
				sectionNum--;
				waypointTriggerOffset = 1;
			}
			var newSection = $(".whbm-section-container[data-section-num='" + sectionNum + "']");
			scrollToTopOf(newSection, waypointTriggerOffset);
		});

		//waypoints for each of the 5 section containers
		sectionContainers.each(function(i, sectionContainer) {
			var sectionContainer = $(sectionContainer),
				i = i;

			//toggle active-section class
			$(this).waypoint(function(direction) {
				toggleActiveContainer(sectionContainer);

				//first section container should only show the next button
				if ( i === 0 ) {	
					if ( direction === 'down' ) {
						scrollNext.fadeIn(200);
					} else {
						scrollPrev.fadeOut(200);
						// scrollNext.fadeOut(200);
					}
				} 
				//if we're scrolling up from the 2nd section, we should fade out the prev button
				else if ( i === 1 ) {	
					scrollPrev.fadeIn(200);
					scrollNext.fadeIn(200);
				} 
				//last section container should only show the prev button
				else if ( i === 4 ) {	
					if ( direction === 'down' ) {
						scrollPrev.fadeIn(200);
						scrollNext.fadeOut(200);
					}
				} 
				//the other section containers should always show both the prev and next buttons	
				else {
					scrollPrev.fadeIn(200);
					scrollNext.fadeIn(200);
				};
			});
		})

		//waypoint for the footer so we can fade out the prev button as soon as the top of the footer hits the bottom of the window
		hideAtFooter(scrollPrev);

		//fade next out when we scroll near the top of the window (prevent confusion on user's end btwn clicking next or the cta)
		hideAtCta(scrollNext);
	}

	//TABLET + DESKTOP
	if ( $(window).width() >= 768 ) {
		//clicking hed CTA scrolls user down to the top of the 1st section
		cta.on('click', function() {
			scrollToTopOf(firstSection, 0);
		});
	}

	//TABLET + MOBILE
	if ( $(window).width() < 992 ) {
		backTop.on('click', function() {
			scrollToTopOf($("body, html"), 0);
		});
	}

	//TABLET
	if ( $(window).width() >= 768 && $(window).width() < 992 ) {
		createSlickSliders();
		hideAtCta(backTop);
	}

	//MOBILE
	if ( $(window).width() < 768 ) {

		$(window).on('scroll touchmove', function() {
			toggleAtTop(backTop);
		})

		$(".whbm-section-product-image").on('click touchend', function(e) {
			e.preventDefault();
		})

		//Landing Page and Scroll Top Behavior
		$("body,html").css({
			"overflow": "hidden",
			"height": "100%"
		});
		
		//Mobile Lander JS Start (tap or swipe up to trigger)
		var startY = 0;

		$(".whbm-hed-container").on('mousedown touchstart', function(e) {
			startY = e.originalEvent.touches[0].clientY;
		});

		$(".whbm-hed-container").on('mouseup touchend', function(e) {
			var endY = e.originalEvent.changedTouches[0].clientY,
				error = 5,
				diff = startY + error - endY;

			if ( diff <= error || diff >= 50 ) {
				scrollToTopOf($("body,html"), 63);
				showMainMobile();
			}

			startY = 0;
		});

		//Hide mobile lander and show main content
		function showMainMobile() {
			$(".whbm-section-containers").show();
			$("#whbm-back-top").show();
			createSlickSliders();

			$("body,html").css({
				"overflow": "auto",
				"height": "auto"
			});

			$(".whbm-hed-container").fadeOut(600);
		};		
	}

	//utility
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 500);
		return false;
	};

	function toggleActiveContainer(activeContainer) {
		sectionContainers.removeClass('active-section');
		activeContainer.addClass('active-section');
	}

	function hideAtCta(navBtn) {
		var navBtn = navBtn;

		cta.waypoint(function(direction) {

			if ( direction === 'up' ) {
				navBtn.fadeOut(200);
			} else {
				navBtn.fadeIn(200);
			}
		});
	}

	function createSlickSliders() {

		//call slick slider on each section's grouping of products
		productSections.each(function(i) {	
			var slider = $(this).slick({
				centerMode: true,
				slidesToShow: 2,
				arrows: false,
				swipe: true,

				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							centerMode: true,
							centerPadding: "15px",
							arrows: true,
							prevArrow: $(".whbm-slider-prev")[i],
							nextArrow: $(".whbm-slider-next")[i],
							appendArrows: $(".whbm-section-products")[i],
							swipe: true
						}
					}
				]
			});
		});

		usingSlick = true;
	}

	function destroySlickSliders() {
		productSections.each(function() {
			$(this).slick('unslick');
		});
		usingSlick = false;
	}

	function hideAtFooter(navBtn) {
		$('footer.footer').waypoint(function(direction) {
			if ( direction === 'down' ) {
				navBtn.fadeOut(200);
			} else {
				navBtn.fadeIn(200);
			}
		}, {offset: '100%'});
	}

	function toggleAtTop(target) {
		if ( $(window).scrollTop() >= sectionContainers.offset().top && notAtTop === false ) {
			//fade back-top btn in
			target.fadeIn();
			//set notAtTop = true
			notAtTop = true;

		}
		else if ( $(window).scrollTop() < sectionContainers.offset().top && notAtTop === true ) {
			target.fadeOut();
			notAtTop = false;
		}
	}

})


