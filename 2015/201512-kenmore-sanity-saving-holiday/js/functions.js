;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		// Accordion

		function expandAccordion(){
			var currentSection = $(this).closest('.c-accordion-section');
			var sectionBody = $(currentSection).find('.c-accordion-body');
			var checkExpanded = $('.c-section-body').find('.c-accordion-section').hasClass('expanded');
			if (checkExpanded) {
				$(this).closest('.c-accordion-section').toggleClass('expanded').siblings().removeClass('expanded');
			} else {
				$(this).closest('.c-accordion-section').toggleClass('expanded').siblings().removeClass('expanded');
				$('html, body').delay('300').animate({
					scrollTop: $(this).offset().top
				}, '300');
			}			
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
		// $('.scroll-trigger').on('click', function() {
		// 	var $waypoint = $($(this).attr('href'));

		// 	if ($waypoint.length) {
		// 		$('html, body').animate({scrollTop: $waypoint.offset().top}, 700);
		// 	}

		// 	event.preventDefault();
		// });

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
			 	nextSelector: null,
			 	prevSelector: null,
			 	nextText: '',
			 	prevText: '',
			 	pager: true,
			 	onSlideNext: function(){
			 		var currentSlide = dressSlider.getCurrentSlide();
			 		var count = dressSlider.getSlideCount();
			 		var whichSlider = $('#dress-slider');

			 		
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideBefore: function(){
			 		$('#dress-next .bx-next').hide();
			 	},
			 	onSlideAfter: function(){
			 		$('#dress-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#dress-section .bx-next').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-dress"
		 	});
		 	$('#dress-section .bx-prev').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "prev-dress"
		 	});		 	

		 	var cookSlider = $('#cook-slider').bxSlider({
			 	nextSelector: null,
			 	prevSelector: null,
			 	nextText: '',
			 	prevText: '',
			 	onSlideNext: function(){
			 		var currentSlide = cookSlider.getCurrentSlide();
			 		var count = cookSlider.getSlideCount();
			 		var whichSlider = $('#cook-slider');

			 		
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideBefore: function(){
			 		$('#cook-next .bx-next').hide();
			 	},
			 	onSlideAfter: function(){
			 		$('#cook-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#cook-section .bx-next').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-cook"
		 	});
		 	$('#cook-section .bx-prev').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "prev-cook"
		 	});		

		 	var decorateSlider = $('#decorate-slider').bxSlider({
			 	nextSelector: null,
			 	prevSelector: null,
			 	nextText: '',
			 	prevText: '',
			 	onSlideNext: function(){
			 		var currentSlide = decorateSlider.getCurrentSlide();
			 		var count = decorateSlider.getSlideCount();
			 		var whichSlider = $('#decorate-slider');

			 		
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideBefore: function(){
			 		$('#decorate-next .bx-next').hide();
			 	},
			 	onSlideAfter: function(){
			 		$('#decorate-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#decorate-section .bx-next').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-decorate"
		 	});
		 	$('#decorate-section .bx-prev').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "prev-decorate"
		 	});		

		 	var entertainSlider = $('#entertain-slider').bxSlider({
			 	nextSelector: null,
			 	prevSelector: null,
			 	nextText: '',
			 	prevText: '',
			 	onSlideNext: function(){
			 		var currentSlide = entertainSlider.getCurrentSlide();
			 		var count = entertainSlider.getSlideCount();
			 		var whichSlider = $('#entertain-slider');

			 		
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideBefore: function(){
			 		$('#entertain-next .bx-next').hide();
			 	},
			 	onSlideAfter: function(){
			 		$('#entertain-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#entertain-section .bx-next').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-entertain"
		 	});
		 	$('#entertain-section .bx-prev').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "prev-entertain"
		 	});		

		 	var travelSlider = $('#travel-slider').bxSlider({
			 	nextSelector: null,
			 	prevSelector: null,
			 	nextText: '',
			 	prevText: '',
			 	onSlideNext: function(){
			 		var currentSlide = travelSlider.getCurrentSlide();
			 		var count = travelSlider.getSlideCount();
			 		var whichSlider = $('#travel-slider');

			 		
			 		if (currentSlide === 0) {
			 			nextAccordion(whichSlider);
			 		}
			 	},
			 	onSlideBefore: function(){
			 		$('#travel-next .bx-next').hide();
			 	},
			 	onSlideAfter: function(){
			 		$('#travel-next .bx-next').fadeIn('500');
			 	}
		 	});
		 	$('#travel-section .bx-next').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "next-travel"
		 	});
		 	$('#travel-section .bx-prev').attr({
		 		"data-gae-track": "event",
		 		"data-gae-category": "incontent",
		 		"data-gae-action": "click",
		 		"data-gae-label": "prev-travel"
		 	});			 			 			 			 	
		});
	});
})(jQuery, window, document);