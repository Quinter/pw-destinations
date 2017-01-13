$(document).ready(function() {
	//Layout-specific functions
	if ( $(window).width() >= 768 ) {

		$(".vs2-slideshow").each(function(index) {
			var slideshowID = $(this).attr("id");
			//Unslider Slideshow	
			var myUnslider = $(this).unslider({
				nav: false, //don't load nav dots
				arrows: {
					prev: '<a class="unslider-arrow icon-thin-arrow vs2-prev"></a>',
					next: '<a class="unslider-arrow icon-thin-arrow vs2-next"></a>'
				}			
			});
			unsliderArrowGATags(slideshowID, index);
		});
	}
	
	if ( $(window).width() <= 991 ) {
		//Move Colorblock text onto the actual colorblocks
		$(".vs2-color-text").each(function(index, text) {

			if ( !($(this).hasClass("vs2-color-text-slide")) ) {
				var $colorTextBox = $(text).parent(".vs2-color-text-box"),
					$colorBox = $colorTextBox.siblings(".vs2-color");

				$(text).detach().appendTo($colorBox);
				$colorTextBox.remove();
			}
		});
	}

	//Non-layout-specific functions
	startVideo();

	$(".vs2-scroll").click(function() {
		scrollToTop($("#vs2-accordion"), 0);
	})

	/* So ugly but we are pressed on time and I have run out of glucose. */
	$("#vs2-simply-perfect-head").click(function() {
		ga('send', 'pageview', {
		  'page': '/simplyperfect',
		  'title': 'Color Changes Everything Simply Perfect'
		});
	});

	$("#vs2-you-do-you-head").click(function() {
		ga('send', 'pageview', {
		  'page': '/youdoyou',
		  'title': 'Color Changes Everything You Do You'
		});
	});

	$("#vs2-comfort-zone-head").click(function() {
		ga('send', 'pageview', {
		  'page': '/comfortzone',
		  'title': 'Color Changes Everything Comfort Zone'
		});
	});

	$("#vs2-good-company-head").click(function() {
		ga('send', 'pageview', {
		  'page': '/goodcompany',
		  'title': 'Color Changes Everything Good Company'
		});
	});

	$(".vs2-accordion-head").on('click', function() {
		toggleAccordionSection($(this));
	})

})

//toggle Accordion Sections (open clicked one if closed, close it if opened, and close all other open ones)
function toggleAccordionSection(clickedHead) {
	var currentSection = clickedHead.closest(".vs2-accordion-section"),
           currentBody = currentSection.find(".vs2-accordion-body"),
           prevClicked = $(".vs2-accordion-body").hasClass("clicked"),
           moreOffset = 63;

    if (prevClicked) {
    	var prevClickedBody = $(".vs2-accordion-body.clicked");
    	var prevClickedHead = prevClickedBody.siblings(".vs2-accordion-head");

    	prevClickedBody.removeClass("clicked");

    	if ( prevClickedHead.is(clickedHead) ) {
	    	toggleHeadInfo(clickedHead);
    	}
    	else {
    		toggleHeadInfo(clickedHead);

    		if ( prevClickedHead.find(".expand-icon").hasClass("expanded") ) {
    			toggleHeadInfo(prevClickedHead);

    			if ( clickedHead.offset().top > prevClickedHead.offset().top ) {
    				moreOffset = prevClickedBody.height();
    			}
    		}
    	}
    }
    else {
    	toggleHeadInfo(clickedHead);
    }

    currentBody.addClass("clicked");
    
   //identify the other accordion-body's that weren't clicked and hide them
    var otherBodies = $(".vs2-accordion-body").not(".clicked");

    currentBody.slideToggle("fast");
    otherBodies.slideUp("fast");


	scrollToTop(clickedHead, moreOffset);

	if ( $(window).width() < 768 ) {
		//lock accordion section
		lockAccordionSection(currentSection);
	}
}

//toggle head info on accordion head section click (text and icon)
function toggleHeadInfo(clickedHead) {
	clickedHead.find("span.expand-icon").toggleClass("expanded");

	if ( $(window).width() >= 768 ) {
		clickedHead.find("span.expand-text").fadeToggle();
	}
}

//generic "scroll-to-top"
function scrollToTop(selector, moreOffset) {
	$("body,html").animate({
		scrollTop: selector.offset().top - moreOffset
	});
}

//start iframe video that has an overlay
function startVideo() {
		var $videoOverlay = $(".vs2-video-overlay");

	$videoOverlay.click(function() {

		//start video
		var $iframe = $(this).siblings(".vs2-video-holder").children("#player1"),
		    iframeSrc = $iframe.attr("src");
		iframeSrc += "&autoplay=1";
		$iframe.attr("src", iframeSrc);

		//make overlay transparent and click thru-able
		window.setTimeout(function() {
			$videoOverlay.addClass("hidden");
		}, 300);

	})
}

function lockAccordionSection(clickedSection) {
	clickedSection.toggleClass("vs2-locked");

	if (clickedSection.hasClass("vs2-locked")) {
		//prevent scrolling up or down past the boundaries of the locked accordion section
		var $lockedSection = $(".vs2-locked");

	    var eTop = $lockedSection.offset().top;
	    $(document).scrollTop(eTop);
	    var eHeight = $lockedSection.height();
	    var eBottom = eTop + eHeight - $(window).height();
	    $(document).on("scroll", limitScroll);
	}
	else {
	    $(document).off("scroll");
	}

	function limitScroll() {
	    var windowScrollTop = $(window).scrollTop();
	    if(windowScrollTop < eTop){
	        $(document).scrollTop(eTop);
	    }
	    else if(windowScrollTop > eBottom){
	        $(document).scrollTop(eBottom);
	    }		
	}
};

function addGATags(element, arrowDirection, index) {
	var gaLabels = [
		{	
			prevLabel: "sliderPrev_02_simply_perfect",
			nextLabel: "sliderNext_02_simply_perfect"
		},
		{
			prevLabel: "sliderPrev_03_you_do_you",
			nextLabel: "sliderNext_03_you_do_you"
		},
		{
			prevLabel: "sliderPrev_01_comfort_zone",
			nextLabel: "sliderNext_01_comfort_zone"
		},
		{
			prevLabel: "sliderPrev_04_good_company",
			nextLabel: "sliderNext_04_good_company"
		}
	];

	element.attr({
		"data-gae-track": "event",
		"data-gae-category": "incontent",
		"data-gae-action": "click"
	});

	if (arrowDirection === "prev") {
		element.attr({
			"data-gae-label": gaLabels[index].prevLabel
		});
	}
	else {
		element.attr({
			"data-gae-label": gaLabels[index].nextLabel
		});
	}
};

function unsliderArrowGATags(slideshowID, index) {
	var $unslider= $("#" + slideshowID).parent(".unslider"),
		$prev = $unslider.find(".unslider-arrow.vs2-prev"),
		$next = $unslider.find(".unslider-arrow.vs2-next");
	

	if ( $prev.length > 0 && $next.length > 0 ) {
		console.log("Unslider has loaded!");
		
		addGATags($prev, "prev", index);
		addGATags($next, "next", index);
	}
	else {
		console.log("Unslider hasn't loaded yet...");
		window.setTimeout(unsliderArrowGATags, 1000);
	}
};

