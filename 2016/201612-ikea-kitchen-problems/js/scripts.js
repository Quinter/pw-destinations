//Use namespacing

$(document).ready(function() {
	////////////////////
	//Handlebars START//
	////////////////////

	//Template Helpers	
	Handlebars.registerHelper("populateResponsiveValue", function(value, breakpoint) {
		var windowWidth = $(window).width();

		if ( windowWidth > breakpoint ) {
			return value.desktop;
		} else {
			return value.mobile;
		}
	});

	//Evaluated Template
	var ikContent = Handlebars.templates["ik-root"](ik.context);
	$("#ik-201612").html(ikContent);
	//////////////////
	//Handlebars END//
	//////////////////
	
	//All Screen Sizes
	var mainContent = $(".ik-main-content"),
		fixedHeaderHeight = $(".fixed-header").height(),
		previews = $(".ik-previews"),
		cta = $(".ik-cta-stacked");
	
	cta.on("mouseup touchend", function(e) {
		scrollToTopOf(mainContent, fixedHeaderHeight);
	});

	//Non-Mobile
	var detailsNav = $(".ik-nav");

	if ( $(window).width() > 767 ) {
		$(".ik-preview").on("click", function() {
			var previewId = $(this).attr("data-preview-id");
			var matchingDetail = $(".ik-detail[data-grid-id=" + previewId + "]");

			matchingDetail.fadeIn();
			matchingDetail.addClass("active-detail");
			$(".ik-previews").hide();

			scrollToTopOf(mainContent, fixedHeaderHeight);

			$(this).find(".ik-preview-cta").trigger("click");

			detailsNav.fadeIn();
		});

		$(".ik-preview-cta").on("click", function(e) {
			e.stopPropagation();
		});

		$(".ik-detail-closer").on("click", function() {
			$(".ik-previews").fadeIn();
			$(".active-detail").hide().removeClass("active-detail");
			detailsNav.hide();
		});

		//Nav Buttons Handler	
		$(".ik-nav-btn").on("click", function() {
			var direction = $(this).attr("data-direction"),
				activeDetail = $(".active-detail"),
				activeDetailNum = parseInt(activeDetail.attr("data-grid-id")),
				newDetailNum;

			if ( direction === "next" ) {
				if ( activeDetailNum === 6 ) {
					newDetailNum = 1;
				} else {
					newDetailNum = activeDetailNum + 1;
				}
			} else if ( direction === "prev" ) {
				if ( activeDetailNum == 1 ) {
					newDetailNum = 6;
				} else {
					newDetailNum = activeDetailNum - 1;
				}
			}

			activeDetail.hide().removeClass("active-detail");
			$(".ik-detail[data-grid-id=" + newDetailNum + "]").fadeIn().addClass("active-detail");

			scrollToTopOf(mainContent, fixedHeaderHeight);
		});


	}

	//Mobile Only
	if ( $(window).width() < 768 ) {
		//Move lander into previews div so that it's considered a "preview slide"
		var lander = $(".ik-lander").detach();
		previews.prepend(lander);

		//then Call bxSlider
		previews.bxSlider({
			mode: 'vertical',
			infiniteLoop: false,
			pager: false,
			adaptiveHeight: true
		});

		$(".ik-preview-cta").on("touchend", function() {
			var cta = $(this);

			var previewId = cta.closest(".ik-preview").attr("data-preview-id");
			var matchingDetail = $(".ik-detail[data-grid-id=" + previewId + "]");
			
			matchingDetail.css("opacity", "1").toggleClass("expanded");
			cta.toggleClass("expanded");
			cta.siblings(".ik-preview-hed").toggleClass("expanded");
			$(".bx-wrapper").toggleClass("expanded");
			
			cta.find(".ik-arrow-icon").toggleClass("expanded");
			cta.find(".text-cta").toggleClass("expanded");
			cta.closest(".ik-preview-txt").toggleClass("expanded");

		});
	}

	//////////////////////////
	//Utility/Reusable START//
	/////////////////////////
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 400);
		return false;
	};
});