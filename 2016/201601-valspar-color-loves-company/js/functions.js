;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {

		$win.on('load', function () {
			$('.hb-slider .hb-slides').owlCarousel({
				loop:true,
				margin:90,
				items:1,
				responsiveRefreshRate: 100,
				responsive:{
					320:{
						stagePadding: 0,
					},
					767:{
						stagePadding: 10,
						nav:true,
					},
					1023:{
						stagePadding: 90,
						nav:false
					},
					1200:{
						stagePadding: 390,
						nav:true
					},
				}				
			});
		})
	});
})(jQuery, window, document);
