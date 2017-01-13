;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
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
					circular: false,
					infinite: false,
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
		$("#home-next").on("click", function(e){
			e.preventDefault();
			$("body, html").animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 600);
		});
		$("#fashion-next").on("click", function(e){
			e.preventDefault();
			$("body, html").animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 600);
		});		
	});
})(jQuery, window, document);