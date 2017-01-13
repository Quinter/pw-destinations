$(document).ready(function() {
	////////////////////
	//Handlebars START//
	////////////////////

	// Template Helpers
	Handlebars.registerHelper("populateResponsiveValue", function(value, breakpoint) {
		if ( $(window).width() > breakpoint ) {
			return value.desktop;
		} else {
			return value.mobile;
		}
	});

	//Evaluated Templates
	var v2Content = Handlebars.templates['cg-v2'](cgV2.context);

	var v1P5Content = Handlebars.templates["cg-v1-p5"](cgV1.context.phase5);
	var v1P4Content = Handlebars.templates["cg-v1-p4"](cgV1.context.phase4);
	var v1P3Content = Handlebars.templates["cg-v1-p3"](cgV1.context.phase3);
	var v1P2Content = Handlebars.templates["cg-v1-p2"](cgV1.context.phase2);
	var v1P1Content = Handlebars.templates["cg-v1-p1"](cgV1.context.phase1);

	//Insert evaluated templates into div's with unique IDs in the <body>
	//all of V2
	$("#cg-v2").html(v2Content);
	//5 instances here (1 for each of the V1 phases)
	$("#cg-v1-p5").html(v1P5Content);
	$("#cg-v1-p4").html(v1P4Content);
	$("#cg-v1-p3").html(v1P3Content);
	$("#cg-v1-p2").html(v1P2Content);
	$("#cg-v1-p1").html(v1P1Content);

	//////////////////
	//Handlebars END//
	//////////////////

    socialShareHover("twitter", "twitter-hover");
    socialShareHover("pinterest", "pinterest-hover");
    socialShareHover("twitter-white", "twitter-white-hover", true);
    socialShareHover("pinterest-white", "pinterest-white-hover", true);
    startVideo();

    var usingSlick;
  	var shopItems = $(".cg-shop-items");
  	var backTop = $("#cg-back-top");

  	//TABLET
  	if ( $(window).width() >= 768 && $(window).width() < 992 ) {
  		createSlickSliders(shopItems);
		usingSlick = true;
  	}

  	//MOBILE
  	if ( $(window).width() < 768 ) {

		/* only attached GA tags to title-row on mobile (i.e. when it becomes a fixed lander) */
		$(".title-row").attr({
			"data-gae-track": "event",
			"data-gae-category": "destination",
			"data-gae-action": "click",
			"data-gae-label": "cg_cta_01"
		});

		//Landing Page and Scroll Top Behavior
		$("body,html").css({
			"overflow": "hidden",
			"height": "100%"
		});
		
		//Mobile Lander JS Start (tap or swipe up to trigger)
		var startY = 0;

		$(".title-row").on('mousedown touchstart', function(e) {
			startY = e.originalEvent.touches[0].clientY;
		});

		$(".title-row").on('mouseup touchend', function(e) {
			var endY = e.originalEvent.changedTouches[0].clientY,
				error = 5,
				diff = startY + error - endY;

			if ( diff <= error || diff >= 50 ) {
				scrollToTopOf($("body,html"), 63);
				showMainMobile();
			}

			startY = 0;
		});

		$(window).on('scroll touchmove', function() {

			if ( $(window).scrollTop() > 350 ) {
				backTop.fadeIn();
			} else {
				backTop.fadeOut();
			}
		});

		backTop.on('click touchstart', function() {
			scrollToTopOf($("body,html"), 63);
		});


		//Hide mobile lander and show main content
		function showMainMobile() {
			$(".cg-container").show();
			createSlickSliders(shopItems);
			usingSlick = true;

			$("body,html").css({
				"overflow": "auto",
				"height": "auto"
			});

			$(".title-row").fadeOut();
		};		



  	}

	//listen for orientation change and create slick sliders if window width < 992 (i.e. what're considering tablet + mobile)
	//otherwise (i.e. desktop), destroy the slick sliders
	$(window).on('orientationchange', function() {
		if ( !usingSlick && $(window).width() < 992 ) {
			createSlickSliders(shopItems);
			usingSlick = true;

		} else if ( usingSlick && $(window).width() >= 992 ) {
			destroySlickSliders(shopItems);
			usingSlick = false;
		}
	});

	//function definitions
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 500);
		return false;
	};
   
	function createSlickSliders(slideContainer) {
		slideContainer.each(function(i) {
			var slider = $(this).slick({
				centerMode: true,
				slidesToShow: 1,
				centerPadding: "15px",
				arrows: false,
				dots: true,
				swipe: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							centerMode: true,
							centerPadding: "15px",
							arrows: false,
							dots: true,
							swipe: true
						}
					}
				]
			});
		});
	}

	function destroySlickSliders(slideContainer) {
		slideContainer.each(function() {
			$(this).slick('unslick');
		});
	}

	function socialShareHover(regClass, hoverClass, fadeSibling) {
	    var $shareIcon = $("." + regClass);
	    $shareIcon.hover(function() {
	        $(this).toggleClass(regClass);
	        $(this).toggleClass(hoverClass);
	        var $quote = $shareIcon.parent().siblings(".text-quote");
	        $quote.toggleClass("text-quote-hover");

	        //if fadeSibling flag is passed in, then hovering over a share fades its sibling share
	        if (fadeSibling) {
	            var $otherShareIcon = $shareIcon.next()
	            if ($otherShareIcon.length === 0) {
	                $otherShareIcon = $shareIcon.prev();
	            }
	            $otherShareIcon.toggleClass("social-share-fade");
	        }
	    });
	};

	//clicking custom video play button starts Vimeo iframe
	function startVideo() {
		var $videoOverlay = $(".overlay.video-overlay");

	    $videoOverlay.on('click', function() {

	        var $iframe = $(this).siblings(".cg-video-holder").children("iframe.vimeo"),
	            iframeSrc = $iframe.attr("src");
	        iframeSrc += "&autoplay=1";
	        $iframe.attr("src", iframeSrc);

	        var overlayId = $(this).attr("id");

	        window.setTimeout(function() {
	            $("#" + overlayId).hide();
	        }, 300);
	    });
	}

	//Can't load interstitial ads using Handlebars so we move them around after they've loaded in
	var adInterval = window.setInterval(function() {
		var watercolorRowsV2 = $(".split-row-bg");
		var interstitialAds = [
			$("#interstitial_9"),
			$("#interstitial_8"),
			$("#interstitial_7"),
			$("#interstitial_6")
		];

	    console.log('running cgv2 ad interval...');	

		watercolorRowsV2.each(function(i) {
	                var interstitialAd = interstitialAds[i].detach();

			$(this).after(interstitialAd);

			if ( i === interstitialAds.length - 1 ) {
				console.log('terminating cgv2 ad interval...');
				clearInterval(adInterval);
			}
		});
	}, 500);	

});




