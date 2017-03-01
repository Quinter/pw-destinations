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
	var whbmContent = Handlebars.templates["whbm-root"](whbm.context);
	$("#whbm-201703").html(whbmContent);
	//////////////////
	//Handlebars END//
	//////////////////
	
	//All Screen Sizes
	var mainContent = $(".whbm-main-content"),
		fixedHeaderHeight = $(".fixed-header").height(),
		previews = $(".whbm-previews"),
		cta = $(".whbm-cta-stacked");
	
	cta.on("mouseup touchend", function(e) {
		scrollToTopOf(mainContent, fixedHeaderHeight);
	});

	//Non-Mobile
	var detailsNav = $(".whbm-nav");

	if ( $(window).width() > 767 ) {
		$(".whbm-preview").on("click", function() {
			$(".whbm-lander").addClass("whbm-detail");
			var previewId = $(this).attr("data-preview-id");
			var matchingDetail = $(".whbm-detail[data-grid-id=" + previewId + "]");

			matchingDetail.fadeIn();
			matchingDetail.addClass("active-detail");
			$(".whbm-previews").hide();

			scrollToTopOf(mainContent, fixedHeaderHeight);

			$(this).find(".whbm-preview-cta").trigger("click");

			detailsNav.fadeIn();
		});

		$(".whbm-preview-cta").on("click", function(e) {
			e.stopPropagation();
		});

		$(".whbm-detail-closer").on("click", function() {
			$(".whbm-lander").removeClass("whbm-detail");
			$(".whbm-previews").fadeIn();
			$(".active-detail").hide().removeClass("active-detail");
			detailsNav.hide();
		});

		//Nav Buttons Handler	
		$(".whbm-nav-btn").on("click", function() {
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
			$(".whbm-detail[data-grid-id=" + newDetailNum + "]").fadeIn().addClass("active-detail");

			scrollToTopOf(mainContent, fixedHeaderHeight);
		});


	}

	//Mobile Only
	if ( $(window).width() < 768 ) {
		//Move lander into previews div so that it's considered a "preview slide"
		var lander = $(".whbm-lander").detach();
		previews.prepend(lander);

		//then Call bxSlider
		previews.bxSlider({
			mode: 'vertical',
			infiniteLoop: false,
			pager: false,
			adaptiveHeight: true
		});

		$(".whbm-preview-cta").on("touchend", function() {
			var cta = $(this);

			var previewId = cta.closest(".whbm-preview").attr("data-preview-id");
			var matchingDetail = $(".whbm-detail[data-grid-id=" + previewId + "]");
			
			matchingDetail.css("opacity", "1").toggleClass("expanded");
			cta.toggleClass("expanded");
			cta.siblings(".whbm-preview-hed").toggleClass("expanded");
			$(".bx-wrapper").toggleClass("expanded");
			
			cta.find(".whbm-arrow-icon").toggleClass("expanded");
			cta.find(".text-cta").toggleClass("expanded");
			cta.closest(".whbm-preview-txt").toggleClass("expanded");

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
















// function openProject(projectPreview) {
// 		var projectIndex = projectPreview.index();
// 		projects.find('wbhm-preview').eq(projectIndex).add(projectPreview).addClass('selected');
		
// 		if( transitionsNotSupported ) {
// 			projectPreviews.addClass('slide-out').removeClass('selected');
// 			projects.find('wbhm-detail').eq(projectIndex).addClass('content-visible');
// 			animating = false;
// 		} else { 
// 			slideToggleProjects(projectPreviews, projectIndex, 0, true);
// 		}
// 	}

// 	function closeProject() {
// 		projects.find('.selected').removeClass('selected').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
// 			$(this).removeClass('content-visible').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
// 			slideToggleProjects(projectsPreviewWrapper.find('whbm-detail'), -1, 0, false);
// 		});

// 		//if browser doesn't support CSS transitions...
// 		if( transitionsNotSupported ) {
// 			projectPreviews.removeClass('slide-out');
// 			projects.find('.content-visible').removeClass('content-visible');
// 			animating = false;
// 		}
// 	}