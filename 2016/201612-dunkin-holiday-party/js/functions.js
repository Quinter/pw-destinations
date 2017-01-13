$(document).ready(function() {
//Start Handlebars
    var source = $('#dunkin-template').html();
    var theTemplate = Handlebars.compile(source);

    Handlebars.registerPartial("article", $("#article-section-partial").html());
    Handlebars.registerPartial("rightarticle", $("#right-article-section-partial").html());
    Handlebars.registerPartial("block", $("#block-article-section-partial").html());
    Handlebars.registerPartial("list", $("#list-article-section-partial").html());
	Handlebars.registerPartial("shoppable", $("#shoppable-section-partial").html());

    var html = theTemplate(dunkin.context);

    $("#dunkin-inner").html(html);

    $(".dunkin-hed-cta").on('click', function() {
  		scrollToTopOf($("#first-article"), 62);
  	});

//End Handlebars 
    
    $('.dunkin-products').slick({
        mobileFirst: true,
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "50px",
		arrows: false,
		draggable: true,
		swipeToSlide: true,
	        responsive: [
            {
                breakpoint: 737,
                settings: 'unslick'
            }
        ]
    });

//Start Navigation Dots
	// $('.nav-dots > li > a').hover( function() {
	// 	$(this).tab('show');
	// });

	if ( $(window).width() < 768 ) {

  		var backTop = $("#dunkin-back-top"),
  			viewportHeight = $(window).height();

  		backTopBehavior(backTop);
  		
  		//Mobile-only functions
		function backTopBehavior(backTopBtn) {
			backTopBtn.on('click touchstart', function() {
				scrollToTopOf($("body,html"), 63);
			});

			$(window).on('scroll touchmove', function() {
				if ( $(window).scrollTop() > viewportHeight ) {
					backTopBtn.fadeIn();
				} else {
					backTopBtn.fadeOut();
				}
			});		
		}
  	}


	//we've been reusing this function a lot. definitely a good candidate for our eventual destination.js file.
	function scrollToTopOf(selector, moreOffset) {
		$("body,html").animate({
			scrollTop: selector.offset().top - moreOffset
		}, 500);
		return false;
	};

	//interstitial ad
	// var adInterval = window.setInterval(function() {
 //        console.log("firing");
 //        $(".dunkin-hed-cta-day-products").each(function(i) {
 //            if ( i === 2 ) {
 //                var interstitialAd = $("#interstitial_1").detach();

 //                $(this).after(interstitialAd);
 //                clearInterval(adInterval);
 //            }
 //        })

 //    }, 500);
});
