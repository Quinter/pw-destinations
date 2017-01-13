;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		// Navigation dots
		$('.nav-dots > li > a').hover( function() {
			$(this).tab('show');
		});

		var $tabsWardrobe = $('#nav-dots-wardrobe .nav-dots li');
		var $tabsMiddle = $('#nav-dots-middle .nav-dots li');

		$('#nav-dots-wardrobe .nexttab').on('click', function(event) {
		    nextWardrobeItem();
		    event.preventDefault();
		});

		$('#nav-dots-middle .nexttab').on('click', function(event) {
		    nextMiddleItem();
		    event.preventDefault();
		});

		function nextWardrobeItem() {
		    var nextElement = $($tabsWardrobe).filter('.active').next('li').find('a[data-toggle="tab"]');

		    if(nextElement.html() === undefined) {
		        $('#nav-dots-wardrobe .nav-dots a:first').tab('show');
		    } else {
		        nextElement.tab('show');
		    }
		}

		function nextMiddleItem() {
		    var nextElement = $($tabsMiddle).filter('.active').next('li').find('a[data-toggle="tab"]');

		    if(nextElement.html() === undefined) {
		        $('#nav-dots-middle .nav-dots a:first').tab('show');
		    } else {
		        nextElement.tab('show');
		    }
		}

		// Get The Look Section
		$('.corrector, .corrector-img').hover(function() {
			$('.corrector, .corrector-img').toggleClass('current acitve');
			$('.concealer-corrector-img').toggleClass('corrector');
			$('.corrector-helper-img').toggleClass('active');
		});

		$('.concealer, .concealer-img').hover(function() {
			$('.concealer, .concealer-img').toggleClass('current active');
			$('.concealer-corrector-img').toggleClass('concealer');
			$('.concealer-helper-img').toggleClass('active');
		});

		$('.brush, .brush-img').hover(function() {
			$('.brush, .brush-img').toggleClass('current active');
		});

		$win.load(function() {
			// Sliders
			$('.c-slider').each(function() {
			var $this = $(this);
			var carousel = $this.find('.c-slides');
			var carouselPaging = $this.find('.c-slider-paging');
			var carouselSlideNext = $this.find('.c-slider-actions .c-slider-next');

			var carouselContent = carousel.parent().html();

				carousel.carouFredSel({
					auto: false,
					responsive: true,
					height: 'variable',
					items: {
						visible: 1,
						height: 'variable'
					},
					next: {
						button: carouselSlideNext,
						key: "right"
					},
					pagination: {
						container: carouselPaging
					}
				});

				if ($win.width() < 768) {
					carousel.parent().parent().empty().html(carouselContent);
				};
			});
		});
	});
})(jQuery, window, document);