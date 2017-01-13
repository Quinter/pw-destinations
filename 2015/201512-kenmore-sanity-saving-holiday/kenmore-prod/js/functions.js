;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		// Accordion
		function expandAccordion(){
			var currentSection = $(this).closest('.c-accordion-section');
			var sectionBody = $(currentSection).find('.c-accordion-body-inner');
			$(this).closest('.c-accordion-section').toggleClass('expanded').siblings().removeClass('expanded');
			$('html, body').animate({
				scrollTop: $(sectionBody).offset().top
			}, '300');
		}
		$('.c-accordion-head').click(expandAccordion);

		$('.c-accordion-close').on('click', function(event) {
			$('.c-accordion-section').removeClass('expanded');

			event.preventDefault();
		});

		// Fullscreen Image
		$('.fullscreen-img').each(function(){
			$(this).parent().addClass('fullscreen-bg').css('background-image', 'url('+$(this).attr("src")+')');
		});

		// Scroll To Section
		$('.scroll-trigger').on('click', function() {
			var $waypoint = $($(this).attr('href'));

			if ($waypoint.length) {
				$('html, body').animate({scrollTop: $waypoint.offset().top}, 700);
			}

			event.preventDefault();
		});

		$win.load(function() {
			function nextAccordion(whichSlider){
				var nextSection = $(whichSlider).closest('.c-accordion-section').next('.c-accordion-section');
				var sectionBody = $(nextSection).find('.c-accordion-body');
				$(nextSection).toggleClass('expanded').siblings().removeClass('expanded');
				$('html, body').animate({
					scrollTop: $(whichSlider).offset().top - 50
				}, 800);
			}			
		 	var dressSlider = $('#dress-slider').bxSlider({
			 	nextSelector: '#dress-next',
			 	prevSelector: null,
			 	nextText: 'Next Tip',
			 	pager: true,
			 	onSlideNext: function(){
			 		var currentSlide = dressSlider.getCurrentSlide();
			 		var count = dressSlider.getSlideCount();
			 		var whichSlider = $('#dress-slider');

			 		$('#dress-next .bx-next').hide();
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideAfter: function(){
			 		$('#dress-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#dress-next .bx-next').addClass('c-slider-next c-btn c-btn-dark').append("<div class='c-ico ico-arrow-circle-right-black'></div>").attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-dress"
		 	});

		 	var cookSlider = $('#cook-slider').bxSlider({
			 	nextSelector: '#cook-next',
			 	prevSelector: null,
			 	nextText: 'Next Tip',
			 	onSlideNext: function(){
			 		var currentSlide = cookSlider.getCurrentSlide();
			 		var count = cookSlider.getSlideCount();
			 		var whichSlider = $('#cook-slider');

			 		$('#cook-next .bx-next').hide();
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideAfter: function(){
			 		$('#cook-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#cook-next .bx-next').addClass('c-slider-next c-btn c-btn-dark').append("<div class='c-ico ico-arrow-circle-right-black'></div>").attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-cook"
		 	});

		 	var decorateSlider = $('#decorate-slider').bxSlider({
			 	nextSelector: '#decorate-next',
			 	prevSelector: null,
			 	nextText: 'Next Tip',
			 	onSlideNext: function(){
			 		var currentSlide = decorateSlider.getCurrentSlide();
			 		var count = decorateSlider.getSlideCount();
			 		var whichSlider = $('#decorate-slider');

			 		$('#decorate-next .bx-next').hide();
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideAfter: function(){
			 		$('#decorate-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#decorate-next .bx-next').addClass('c-slider-next c-btn c-btn-dark').append("<div class='c-ico ico-arrow-circle-right-black'></div>").attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-decorate"
		 	});

		 	var entertainSlider = $('#entertain-slider').bxSlider({
			 	nextSelector: '#entertain-next',
			 	prevSelector: null,
			 	nextText: 'Next Tip',
			 	onSlideNext: function(){
			 		var currentSlide = entertainSlider.getCurrentSlide();
			 		var count = entertainSlider.getSlideCount();
			 		var whichSlider = $('#entertain-slider');

			 		$('#entertain-next .bx-next').hide();
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideAfter: function(){
			 		$('#entertain-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#entertain-next .bx-next').addClass('c-slider-next c-btn c-btn-dark').append("<div class='c-ico ico-arrow-circle-right-black'></div>").attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-entertain"
		 	});

		 	var travelSlider = $('#travel-slider').bxSlider({
			 	nextSelector: '#travel-next',
			 	prevSelector: null,
			 	nextText: 'Next Tip',
			 	onSlideNext: function(){
			 		var currentSlide = travelSlider.getCurrentSlide();
			 		var count = travelSlider.getSlideCount();
			 		var whichSlider = $('#travel-slider');

			 		$('#travel-next .bx-next').hide();
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideAfter: function(){
			 		$('#travel-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#travel-next .bx-next').addClass('c-slider-next c-btn c-btn-dark').append("<div class='c-ico ico-arrow-circle-right-black'></div>").attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-travel"
		 	});		 			 			 			 	
		});
	});
})(jQuery, window, document);