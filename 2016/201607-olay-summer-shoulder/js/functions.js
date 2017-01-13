$(document).ready(function() {	
	var windowWidth = $(window).width();

	//Tablet and Mobile
	if ( windowWidth <= 991 ) {
		var isWebkit = 'WebkitAppearance' in document.documentElement.style;

		if ( !(isWebkit) ) {
			$(".oj-step-overlay").css({
				'z-index': 0
			});
		}		
	}

	//Tablet
	if ( (windowWidth >= 768) && (windowWidth <= 991) ) {
		var clipOverlay = $(".oj-step-overlay"),
			initialPaddingLeft = (parseFloat(clipOverlay.css("padding-left").replace("px", "")) / windowWidth) * 100;

		applyPaddingLeft();

		$(window).resize(function() {
			applyPaddingLeft();
		});

		function applyPaddingLeft() {
			var windowWidth = $(window).width();

			if ( windowWidth < 768 || windowWidth > 991 ) {
				//remove inline padding-left style so that our custom stylesheet can take over
				clipOverlay.removeAttr("style");
				return false;
			}

			var widthDiff = windowWidth - 768,
				paddingIncrement = widthDiff / 27.875,
				newPaddingLeft = initialPaddingLeft + paddingIncrement + "%";

			clipOverlay.css({"padding-left": newPaddingLeft});
        }

	}

	//Mobile
	if ( windowWidth < 768 ) {

		var landerClicked = false;

		//Move 'Buy Now' button into item price div
		var shopItemPrices = $(".oj-shop-item-price");

		shopItemPrices.each(function(i) {
			var shopItemPrice = $(this),
				priceValue = shopItemPrice.text(),
				buyNow = shopItemPrice.siblings(".oj-shop-item-buy").detach();

			shopItemPrice.text("");
			shopItemPrice.prepend(buyNow);
		});

		//Dynamically forceSpacing below absolutely positioned Step sections on window resize
		$(window).resize(function() {
			if (landerClicked) {
				forceSpacing();
			}
		});

		//Landing Page and Scroll Top Behavior
		$("body,html").css({
			"overflow": "hidden",
			"height": "100%"
		});
		
		//Mobile Lander JS Start (tap or swipe up to trigger)
		var startY;

		$("#oj-mobile-header").on('touchstart', function(e) {
			startY = e.originalEvent.touches[0].clientY;
		});

		$("#oj-mobile-header").on('touchend', function(e) {
			var endY = e.originalEvent.changedTouches[0].clientY,
				error = 5,
				diff = startY + error - endY;

			if ( diff <= error || diff >= 50 ) {
				showMainMobile();
			}

			scrollToTop($("body,html"), 63);
			startY = 0;
		});

		$("#oj-back-top").click(function() {
			scrollToTop($("body,html"), 63);
		});

		//Hide mobile lander and show main content
		function showMainMobile() {
			landerClicked = true;
			
			$("#oj-main").show();
			$("#oj-back-top").show();

			$("body,html").css({
				"overflow": "auto",
				"height": "auto"
			});

			$("#oj-mobile-header").fadeOut("slow");
			forceSpacing();	
		};

		//generic "scroll-to-top" (was used in Valspar Phase 2)
		function scrollToTop(selector, moreOffset) {
			$("body,html").animate({
				scrollTop: selector.offset().top - moreOffset
			});
		};
		//Mobile Lander JS End

		//Force space between absolutely positioned elements (Step text divs) on mobile
		function forceSpacing() {
			var stepTextSections = $(".oj-step-text");

			stepTextSections.each(function(i) {
				var stepText = $(this),
					stepTextHed = stepText.prev(".oj-step-hed-mobile"),
					//get the 'bottom offset' of the mobile hed for each Step section
					//this works great because we can push everything down just by adjusting the mobile hed
					stepOffsetTop = stepTextHed.position().top + stepTextHed.height(),
					stepSectionHeight = parseInt(stepText.innerHeight()) + stepOffsetTop;
				
				stepText.css({"top": stepOffsetTop});
				stepText.next(".oj-spacer").css({"height": stepSectionHeight});
			});
		}


	}

});






