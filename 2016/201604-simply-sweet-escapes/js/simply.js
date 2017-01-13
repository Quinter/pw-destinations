$(document).ready(function() {
	var screenWidth = $(window).width();
	if (screenWidth <=768) {
		$('.sd-section').each(function() {
			var row = $(this).find('.row'),
			    title = $(this).find('.sd-section-title');
			$(title).detach().prependTo(row);    
		});
		$('.sd-section-reversed').each(function() {
			var image = $(this).find('.col-md-7'),
				text = $(this).find('.col-md-5');
			$(image).detach().insertBefore(text); 
		});
		$('.sd-section-fullwidth').each(function() {
			var title = $(this).find('.sd-section-title'),
			    image = $(this).find('.sd-section-image').first();
			 $(title).detach().insertBefore(image);
		});
	}
});