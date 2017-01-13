$(document).ready(function() {
	////////////////////
	//Handlebars START//
	////////////////////
	var source = $("#lo-day-template").html();
	var loDayTemplate = Handlebars.compile(source);

	Handlebars.registerPartial("main", $("#main-content-partial").html());
	Handlebars.registerPartial("products", $("#products-content-partial").html());

	Handlebars.registerHelper("populateResponsiveImage", function(images) {
		var windowWidth = $(window).width();

		if ( windowWidth > 991 ) {
			return images["desktop"];
		} else if ( windowWidth > 767 ) {
			return images["tablet"];
		} else {
			return images["mobile"];
		}
	});

	var html = loDayTemplate(lo.context);

	$("#lo-days").html(html);
	//////////////////
	//Handlebars END//
	//////////////////


	///////////////////
	//Custom JS START//
	///////////////////

	//Fixed Header
	var fixedHeader = $("header.fixed-header"),
		fixedHeaderHeight = fixedHeader.height();

	//Day Pager
	var dayBtns = $(".lo-intro-pager-btn"),
		dayPager = $(".lo-intro-pager"),
		daysMap = createDaysMap(),
		days = $(".lo-day");

	//Days Container
	var mainContent = $(".lo-main-container"),
		//offset = margin-top (main content container) + height (day pager) + height (fixed header) - magic number (1, to trigger waypoint callback)
		mainContentOffset = parseInt($(".lo-main-container").css("margin-top")) + dayPager.height() + fixedHeaderHeight - 1;

	//Products (slider on tablet + mobile)
	var productSections = $(".lo-day-product-wrapper"),
		sliderSettings = {
			centerMode: true,
			slidesToShow: 1,
			centerPadding: "15px",
			arrows: false,
			dots: true,
			swipe: true
		},
		usingSlick;

	//Hook up day pager to each day section
	dayBtns.on('click', function(e) {
		//prevent mobile lander GA tags from firing
		e.stopPropagation();
		
		var dayRef = $(this).attr("data-href");

		for (var dayName in daysMap) {
			if ( dayRef === dayName ) {

				var day = daysMap[dayName];

				if ( $(window).width() > 767 ) {
					//for tablet + desktop, have a fade effect
					$(".lo-day").hide().removeClass("active-day");
					day.fadeIn().addClass("active-day");

					if ( $(window).width() < 992 ) {
						//resize slick slider since non-active days are display: none
						day.find(".lo-day-product-wrapper").slick('setPosition');
					}

					//also scroll to the top of the pager section
					scrollToTopOf(mainContent, mainContentOffset);
					toggleActiveDayBtn($(this));
				} else {
					//for mobile, scroll to the new active section
					scrollToTopOf(day, mainContentOffset);
				}
			}
		}
	});

	function createDaysMap() {
		var days = $(".lo-day");
		var daysMap = {};

		days.each(function(i) {
			var dayName = $(this).attr("id");
			daysMap[dayName] = $(this);
		});

		return daysMap;
	}

	//Tablet + Desktop
	if ( $(window).width() >= 768 ) {
		dayPagerWaypoint(fixedHeaderHeight);
	}

	//Tablet
	if ( $(window).width() > 767 && $(window).width() < 992 ) {
		createSlickSliders(productSections, sliderSettings);
		usingSlick = true;
		$(".lo-day:not(.active-day)").hide();
	}

	//Toggle Slick Slider when we're going into/outside "desktop" widths (>= 992px)
	$(window).on('resize orientationchange', function() {

		if ( $(window).width() > 767 ) {
			//fix for sticky nav sticking late on resize + orientation when user isn't at/near the top of the page during the event fire
			scrollToTopOf($("html, body"), fixedHeaderHeight);
			dayPager.hide().show();
		} else {
			return;
		}

		//fix for sticky nav sticking late on resize + orientation when user isn't at/near the top of the page during the event fire
		scrollToTopOf($("html, body"), fixedHeaderHeight);
		dayPager.hide().show();

		if ( !usingSlick && $(window).width() < 992 ) {
			createSlickSliders(productSections, sliderSettings);
			usingSlick = true;

			//show all day sections again (because some may have been hidden by the dayBtn click handler)
			$(".lo-day").show();
		} else if ( usingSlick && $(window).width() >= 992 ) {
			destroySlickSliders(productSections);
			usingSlick = false;
		}

		//hide all day sections that aren't the active day section
		$(".lo-day:not(.active-day)").hide();

	});

	//Waypoint on Day Pager - the offset will usually be the height of the fixed site header
	function dayPagerWaypoint(offset) {
		dayPager.waypoint(function(direction) {
			if ( direction === 'down') {
				dayPager.addClass("sticky-pager");
			} else {
				dayPager.removeClass("sticky-pager");
			}
		}, {offset: offset} );
	}

  	//MOBILE
  	if ( $(window).width() < 768 ) {
		var viewportHeight = $(window).height(),
			mobileLander = $(".lo-intro-container"),
			mobilePager = $(".lo-mobile-pager"),
			prevClickedPagerNum = 1, //by default, the Monday pager button is the active one
			mobileDayBtns = $(".lo-mobile-pager .lo-intro-pager-btn");

		//the top offset of the main content container should take into account the heights of the fixed site header
		//and sticky nav
		mainContentOffset = fixedHeaderHeight + mobilePager.height() - 1;
  		mobileLanderBehavior();

		// //horizontal scroll animation for mobile pager
		// mobileDayBtns.on('click', function() {
		// 	pagerHorizontalScroll($(this));
		// });

		$(window).on('scroll touchmove', function() {
			togglePagerOnScroll();
		});

		//fixed mobile lander behavior
		function mobileLanderBehavior() {		
			var startY = 0;

			mobileLander.on('mousedown touchstart', function(e) {
				startY = e.originalEvent.touches[0].clientY;
			});

			mobileLander.on('mouseup touchend', function(e) {
				var endY = e.originalEvent.changedTouches[0].clientY,
					error = 5,
					diff = startY + error - endY;

				if ( diff <= error || diff >= 50 ) {
					scrollToTopOf($("body,html"), 0);
					showMainMobile();

					//we want to wait until the main content is showing before calculating the day sections' heights
					//since the day sections are inside the main content container
					window.setTimeout(togglePagerOnScroll, 500);
				}

				startY = 0;
			});
		}

		//Hide mobile lander and show main content
		function showMainMobile() {
			fixedHeader.append(mobilePager.detach());
			mobilePager.addClass("visible-mobile-pager");
			mainContent.show();
			createSlickSliders(productSections, sliderSettings);
			usingSlick = true;

			$("body,html").css({
				"overflow": "auto",
				"height": "auto"
			});

			mobileLander.fadeOut();
		};				

		function togglePagerOnScroll() {
			//non-waypoint solution for highlighting active day in sticky nav on window swipe/scroll
			//waypoints is giving me some issues
			var dayVerticalOffsets = identifyDayVerticalOffsets();

			var currentY = $(window).scrollTop() + mainContentOffset,
				indexNum = 0;

			if ( currentY >= dayVerticalOffsets[6] ) {
				toggleActiveDayBtn($(mobileDayBtns[6]));
				indexNum = 6;
			} else if ( currentY >= dayVerticalOffsets[5] ) {
				toggleActiveDayBtn($(mobileDayBtns[5]));
				indexNum = 5;
			} else if ( currentY >= dayVerticalOffsets[4] ) {
				toggleActiveDayBtn($(mobileDayBtns[4]));
				indexNum = 4;
			} else if ( currentY >= dayVerticalOffsets[3] ) {
				toggleActiveDayBtn($(mobileDayBtns[3]));
				indexNum = 3;
			} else if ( currentY >= dayVerticalOffsets[2] ) {
				toggleActiveDayBtn($(mobileDayBtns[2]));
				indexNum = 2;
			} else if ( currentY >= dayVerticalOffsets[1] ) {
				toggleActiveDayBtn($(mobileDayBtns[1]));
				indexNum = 1;
			} else if ( currentY >= dayVerticalOffsets[0] ) {
				toggleActiveDayBtn($(mobileDayBtns[0]));
				indexNum = 0;
			}
			
			pagerHorizontalScroll($(mobileDayBtns[indexNum]));
		};

		function pagerHorizontalScroll(pagerBtn) {
			var clickedPagerNum = parseInt(pagerBtn.attr("data-day-num")),
				clickedPagerPos = pagerBtn.offset().left;
				clickedPagerWidth = pagerBtn.width(),
				clickedPagerLeftPadding = parseInt(pagerBtn.css("padding-left"));
				currentScrollX = mobilePager.scrollLeft(),
				newScrollX = 0;

			if ( clickedPagerNum > prevClickedPagerNum ) {
				newScrollX = ( clickedPagerPos + currentScrollX ) - ( clickedPagerWidth ) + clickedPagerLeftPadding;
			} else if ( clickedPagerNum < prevClickedPagerNum ) {
				//reverse direction and go from right to left
				newScrollX = ( clickedPagerPos + currentScrollX ) - ( clickedPagerWidth ) + clickedPagerLeftPadding;
			} else { 
				//do nothing
				return;
			}

			//wednesday is long so we need to remove its extra min-width
			if ( parseInt(clickedPagerNum) === 2 ) {
				newScrollX += 40; //magic number because wednesday is so long
			}

			mobilePager.animate({
				scrollLeft: newScrollX
			});

			prevClickedPagerNum = clickedPagerNum;
		}

		function identifyDayVerticalOffsets() {
			var verticalOffsets = [];

			days.each(function() {
				verticalOffsets.push( $(this).offset().top );
			});

			return verticalOffsets;
		}


  	}
	/////////////////
	//Custom JS END//
	/////////////////


	//////////////////////////
	//Utility/Reusable START//
	/////////////////////////
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 400);
		return false;
	};

	function createSlickSliders(slideContainers, sliderSettings) {
		slideContainers.each(function() {
			$(this).slick(sliderSettings);
		});
	};

	function destroySlickSliders(slideContainers) {
		slideContainers.each(function() {
			$(this).slick('unslick');
		});
	};

	function toggleActiveDayBtn(activeDayBtn) {
		$(".lo-intro-pager-btn.active").removeClass("active");
		activeDayBtn.addClass("active");;		
	}
	////////////////////////
	//Utility/Reusable END//
	///////////////////////

	
})


