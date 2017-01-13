//if you use things 3 or more times, write a function for it
$(document).ready(function() {
    $('.must-have-slider').bxSlider({
        pagerCustom: '.bx-pager',
        minSlides: 4,
		maxSlides: 5,
		moveSlides: 1,
		slideWidth: 150,
		slideMargin: 10,
        infiniteLoop: true,
        nextText: '<a id="slider-next"></a>',
        prevText: '<a id="slider-prev"></a>'
    }); 
});


$(document).ready(function() {
	$(".bs-desktop-container").each(function(){
		var sectionOffset = $(this).offset().top;
	})

	/* Bag fadeIn Behaviour START */
    var sectionContainers = $(".bs-desktop-container");

    sectionContainers.each(function() {
        $(this).waypoint(function() {
        	fadeInBags($(this.element));
        });
    })


    function fadeInBags(sectionContainer) {
       var bags = sectionContainer.find(".bs-bag-this");
       $(bags).each(function(i) {
       		$(this).delay(i * 500).fadeIn("slow");
       })
    }
	/* Bag fadeIn Behaviour END */

    /* older code start */
    // $("#contents-1").css("margin-top", $(window).height() - $("#contents-1"));
    // var $window = $(window);

    // $window.scroll(function () {
    //     var windowTop = $window.scrollTop();
    //     var headerOffset = $("#contents-1").offset().top;

    //     if (windowTop >= headerOffset) {
		  //  $('.bag-this-1, .bag-this-2, .bag-this-3').each(function(fadeInDiv) {
		  //    $(this).delay(fadeInDiv * 1000).fadeIn(1000);
		  //  });
    //     }
    // });
    /* older code end */
	
	var windowWidth = $(window).width();

	if (windowWidth >= 1024) {
		//Desktop
		console.log("DESKTOP");
		animateDots();

		$(".bs-nav-item").on('click', function() {
			var clickedNav = $(this);
			goToSection(clickedNav);
			//animate image overlay dots
			animateDots(clickedNav);
			scrollToTop($(".bs-nav-row"), 0);
		})
		
		$(".bs-btn").on('click', function(e) {
			e.stopPropagation();
			showPopupSlideshow($(this));
			scrollToTop($(".bs-nav-row"), 0);
		});

		$(".bs-popup-close").on('click', function() {
			hidePopupSlideshow($(this));
		});

		$(".bs-popup").on('click', function(e) {
			e.stopPropagation();
		});

		$(".bs-popup-overlay").on('click', function() {
			$(this).fadeOut("fast");
			removeActivePopupClass();
		});

		//on desktop, the popup overlay serves as a way to close out of the currently open popup.
		//on mobile, the popup overlay is merely a container for the stacked popup cards
		$(".bs-popup-overlay").attr({
			"data-gae-track": "event",
			"data-gae-category": "incontent",
			"data-gae-action": "click",
			"data-gae-label": "ge_click_overlay_to_close_popup"
		})

		// //Desktop items on hover show text

		// $(".bs-popup-prompt").on("mouseenter touchstart", function() {
		// var targetText = $(this).siblings(".bs-bag-this");
		// $(".bs-bag-this").not(targetText).fadeOut();
		// targetText.fadeIn();
		// })
	}
	else if (windowWidth >= 768) {
		//Tablet (remove click events when posting live...only there for dev purposes)
		console.log("TABLET");
		animateDots();

		$(".bs-nav-item").on('touchstart', function() {
			var clickedNav = $(this);
			goToSection(clickedNav);
			//animate image overlay dots
			animateDots(clickedNav);
			scrollToTop($(".bs-nav-row"), 0);
		})
		
		$(".bs-btn").on('touchstart', function(e) {
			e.stopPropagation();
			showPopupSlideshow($(this));
			scrollToTop($(".bs-nav-row"), 0);
		});

		$(".bs-popup-close").on('touchstart', function() {
			hidePopupSlideshow($(this));
		});

		$(".bs-popup").on('touchstart', function(e) {
			e.stopPropagation();
		});

		$(".bs-popup-overlay").on('touchstart', function() {
			$(this).fadeOut("fast");
			removeActivePopupClass();
		});

		//on desktop, the popup overlay serves as a way to close out of the currently open popup.
		//on mobile, the popup overlay is merely a container for the stacked popup cards
		$(".bs-popup-overlay").attr({
			"data-gae-track": "event",
			"data-gae-category": "incontent",
			"data-gae-action": "click",
			"data-gae-label": "ge_click_overlay_to_close_popup"
		})

	}

	else {
		//Mobile
		console.log("MOBILE");
		var screenHeight = $(window).height();
		
		$(".bs-main-content-container").bxSlider({
			mode: 'vertical',
			infiniteLoop: false
		});

		$(".bs-popup-prompt").on('touchstart', function() {
			toggleMobilePopups($(this));
		});

		$(".bs-scroll-prompt").on('touchstart', function() {
			$(".bx-viewport").trigger("touchstart")
		});

		$(".bs-main-content").each(function(i) {
            $(this).css({"height": screenHeight})
        });
	}

	//remove extra params at end of hyperlink in "Time for a Paint Over" section (short term fix -> investigate why those extra params were being added)
	$(".bs-cc-paint").attr("href", "http://ecx.images-amazon.com/images/I/611fwx-LRvL.jpg");


	//Tablet Only
	if (windowWidth >= 768 && windowWidth <= 1024) {
		toggleTabletDisplay();
	}
});

function goToSection(clickedNav) {
	//change active section
	var currentActiveSection = $(".bs-main-content.active-bs-section"),
		newActiveSection = $(".bs-main-content-container").find(".bs-main-content[data-assoc-nav='" +
							 clickedNav.attr("id") + "']");

	currentActiveSection.removeClass("active-bs-section");
	newActiveSection.addClass("active-bs-section");

	//change active nav li
	var currentActiveNav = $(".bs-nav-item.active-bs-nav"),
	    newActiveNav = clickedNav;

	currentActiveNav.removeClass("active-bs-nav");
	newActiveNav.addClass("active-bs-nav");
}

function showPopupSlideshow(clickedImageBtn) {
	removeActivePopupClass();

	var popupOverlay = clickedImageBtn.parent(".bs-btns-overlay").siblings(".bs-popup-overlay"),
	    popup = popupOverlay.find(".bs-popup[data-assoc-btn='" + clickedImageBtn.attr("id") + "']");

	popup.show().addClass("bs-popup-active");
	popupOverlay.fadeIn("fast");

}

function hidePopupSlideshow(clickedCloseBtn) {
	clickedCloseBtn.closest(".bs-popup-overlay").fadeOut("fast");
	removeActivePopupClass();
}

function removeActivePopupClass() {
	$(".bs-popup").removeClass("bs-popup-active");
	$(".bs-popup").hide();
}

function animateDots(clickedNav) {
	var clickedNav = clickedNav || $("#bs-nav-1");

	var currentActiveSection = $(".bs-main-content.active-bs-section"),
		btns = currentActiveSection.find(".bs-btn");

	// btns.animate({top: 305}, {duration: 1000});

	btns.each(function(index) {
		var btn = $(btns[index]);
		btn.addClass("pulse");
	});
}

function toggleMobilePopups(clickedPrompt) {
	/*
	identify the clicked prompt's popup overlay section
	animate it to "slide out" from the right
	have the prompt's z-index high so that it shows over the animated popup overlay
	make sure popups are "stacked"
	update popup prompt to be fixed instead of absolute
	*/
	var mobileSectionOverlay = clickedPrompt.siblings(".bs-mobile-section-container"),
	    popupOverlay = mobileSectionOverlay.siblings(".bs-popup-overlay");

	mobileSectionOverlay.toggleClass("popups-open");
	clickedPrompt.toggleClass("popups-open");
	popupOverlay.show().toggleClass("popups-open");

	//prevent section from swiping (only want that section's popup overlay to swipe)
	if ( popupOverlay.hasClass("popups-open") ) {
		popupOverlay.on("touchstart touchend touchmove", function(ev) {
			var e = ev.originalEvent;
			e.stopPropagation();
		});
	}
	else {
		clickedPrompt.removeClass("follower");
	}
}

//generic "scroll-to-top" (was used in Valspar Phase 2)
function scrollToTop(selector, moreOffset) {
  $("body,html").animate({
    scrollTop: selector.offset().top - moreOffset
  });
};

function toggleTabletDisplay() {

	$(window).on("orientationchange", function(e) {
		if (e.orientation === 0 || e.orientation === 180) {
			//portrait
			$(".bs-tablet-initial").fadeIn();
			$(".bs-container").hide()
		}
		else if (e.orientation === 90 || e.orientation === -90) {
			//landscape
			$(".bs-container").fadeIn();
			$(".bs-tablet-initial").hide();
		}
	});

}