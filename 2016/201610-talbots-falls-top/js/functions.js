$(document).ready(function() {
//Start Handlebars
    var source = $('#tal-template').html();
    var theTemplate = Handlebars.compile(source);

    Handlebars.registerPartial("dotted", $("#dotted-section-partial").html());
    Handlebars.registerPartial("article", $("#article-section-partial").html());
	Handlebars.registerPartial("shoppable", $("#shoppable-section-partial").html());

    var html = theTemplate(tal.context);

    $("#tal-inner").html(html);

    $(".tal-hed-cta").on('click', function() {
  		scrollToTopOf($("#first-article"), 62);
  	});

//End Handlebars 
    
    $('.tal-day-product-wrapper').slick({
        mobileFirst: true,
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
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
//End Navigation Dots

	if ( $(window).width() < 768 ) {

  		var backTop = $("#tal-back-top"),
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
	var adInterval = window.setInterval(function() {
        console.log("firing");
        $(".tal-day-products").each(function(i) {
            if ( i === 2 ) {
                var interstitialAd = $("#interstitial_1").detach();

                $(this).after(interstitialAd);
                clearInterval(adInterval);
            }
        })

    }, 500);
});
