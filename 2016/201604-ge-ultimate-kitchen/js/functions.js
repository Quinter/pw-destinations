//if you use things 3 or more times, write a function for it

$(document).ready(function() {
	
	var windowWidth = $(window).width();

	if (windowWidth >= 1024) {
		//Desktop
		console.log("DESKTOP");
		animateDots();

		$(".ge-nav-item").on('click', function() {
			var clickedNav = $(this);
			goToSection(clickedNav);
			//animate image overlay dots
			animateDots(clickedNav);
			scrollToTop($(".ge-nav-row"), 0);
		})
		
		$(".ge-btn").on('click', function(e) {
			e.stopPropagation();
			showPopupSlideshow($(this));
			scrollToTop($(".ge-nav-row"), 0);
		});

		$(".ge-popup-close").on('click', function() {
			hidePopupSlideshow($(this));
		});

		$(".ge-popup").on('click', function(e) {
			e.stopPropagation();
		});

		$(".ge-popup-overlay").on('click', function() {
			$(this).fadeOut("fast");
			removeActivePopupClass();
		});

		//on desktop, the popup overlay serves as a way to close out of the currently open popup.
		//on mobile, the popup overlay is merely a container for the stacked popup cards
		$(".ge-popup-overlay").attr({
			"data-gae-track": "event",
			"data-gae-category": "incontent",
			"data-gae-action": "click",
			"data-gae-label": "ge_click_overlay_to_close_popup"
		})

	}
	else if (windowWidth >= 768) {
		//Tablet (remove click events when posting live...only there for dev purposes)
		console.log("TABLET");
		animateDots();

		$(".ge-nav-item").on('touchstart', function() {
			var clickedNav = $(this);
			goToSection(clickedNav);
			//animate image overlay dots
			animateDots(clickedNav);
			scrollToTop($(".ge-nav-row"), 0);
		})
		
		$(".ge-btn").on('touchstart', function(e) {
			e.stopPropagation();
			showPopupSlideshow($(this));
			scrollToTop($(".ge-nav-row"), 0);
		});

		$(".ge-popup-close").on('touchstart', function() {
			hidePopupSlideshow($(this));
		});

		$(".ge-popup").on('touchstart', function(e) {
			e.stopPropagation();
		});

		$(".ge-popup-overlay").on('touchstart', function() {
			$(this).fadeOut("fast");
			removeActivePopupClass();
		});

		//on desktop, the popup overlay serves as a way to close out of the currently open popup.
		//on mobile, the popup overlay is merely a container for the stacked popup cards
		$(".ge-popup-overlay").attr({
			"data-gae-track": "event",
			"data-gae-category": "incontent",
			"data-gae-action": "click",
			"data-gae-label": "ge_click_overlay_to_close_popup"
		})

	}

	else {
		//Mobile
		console.log("MOBILE");

		$(".ge-main-content-container").bxSlider({
			mode: 'vertical',
			infiniteLoop: false
		});

		$(".ge-popup-prompt").on('touchstart', function() {
			toggleMobilePopups($(this));
		});

		$(".ge-scroll-prompt").on('touchstart', function() {
			$(".bx-viewport").trigger("touchstart")
		});
	}

	//remove extra params at end of hyperlink in "Time for a Paint Over" section (short term fix -> investigate why those extra params were being added)
	$(".ge-cc-paint").attr("href", "http://ecx.images-amazon.com/images/I/611fwx-LRvL.jpg");


	//Tablet Only
	if (windowWidth >= 768 && windowWidth <= 1024) {
		toggleTabletDisplay();
	}
});

function goToSection(clickedNav) {
	//change active section
	var currentActiveSection = $(".ge-main-content.active-ge-section"),
		newActiveSection = $(".ge-main-content-container").find(".ge-main-content[data-assoc-nav='" +
							 clickedNav.attr("id") + "']");

	currentActiveSection.removeClass("active-ge-section");
	newActiveSection.addClass("active-ge-section");

	//change active nav li
	var currentActiveNav = $(".ge-nav-item.active-ge-nav"),
	    newActiveNav = clickedNav;

	currentActiveNav.removeClass("active-ge-nav");
	newActiveNav.addClass("active-ge-nav");
}

function showPopupSlideshow(clickedImageBtn) {
	removeActivePopupClass();

	var popupOverlay = clickedImageBtn.parent(".ge-btns-overlay").siblings(".ge-popup-overlay"),
	    popup = popupOverlay.find(".ge-popup[data-assoc-btn='" + clickedImageBtn.attr("id") + "']");

	popup.show().addClass("ge-popup-active");
	popupOverlay.fadeIn("fast");

}

function hidePopupSlideshow(clickedCloseBtn) {
	clickedCloseBtn.closest(".ge-popup-overlay").fadeOut("fast");
	removeActivePopupClass();
}

function removeActivePopupClass() {
	$(".ge-popup").removeClass("ge-popup-active");
	$(".ge-popup").hide();
}

function animateDots(clickedNav) {
	var clickedNav = clickedNav || $("#ge-nav-1");

	var currentActiveSection = $(".ge-main-content.active-ge-section"),
		btns = currentActiveSection.find(".ge-btn");

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
	var mobileSectionOverlay = clickedPrompt.closest(".ge-mobile-section-overlay"),
	    popupOverlay = mobileSectionOverlay.siblings(".ge-popup-overlay");

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
			$(".ge-tablet-initial").fadeIn();
			$(".ge-container").hide()
		}
		else if (e.orientation === 90 || e.orientation === -90) {
			//landscape
			$(".ge-container").fadeIn();
			$(".ge-tablet-initial").hide();
		}
	});

}






