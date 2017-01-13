;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		var $sections = $('.pp-events-section');
		$sections.each(function () {
			var $section = $(this);
			var sectionOffset = $section.offset().top;

			$win.on('scroll', function () {
				if ( $win.scrollTop() + $win.height()/2 > sectionOffset ) {
					$section.addClass('current').siblings().removeClass('current');
				}
			});
		});
	});
})(jQuery, window, document);