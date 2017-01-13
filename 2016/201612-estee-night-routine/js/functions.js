$(document).ready(function() {
//Start Handlebars
    var source = $('#estee-template').html();
    var theTemplate = Handlebars.compile(source);

    Handlebars.registerPartial("article", $("#article-section-partial").html());

    var html = theTemplate(estee.context);

    $("#estee-inner").html(html);
	//End Handlebars 

    $(".estee-hed-cta").on('click', function() {
  		scrollToTopOf($("#day-one"), 62);
  	});

	$('.down-arrow').click(function() {
	    $('body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 62)
	    }, 800, 'easeOutExpo');
	    $.scrollify.next();
	});

	// $('.down-arrow').on('click', function() {
	//     scrollToTopOf($('#' + $(this).attr('target')), 62);
	// });

  	$('#menubar.left a[data-toggle="tooltip"]').tooltip({ placement: 'right' });

  	$('.link').click(function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		var posi = $(link).offset().top-0;
		$('body,html').animate({scrollTop:posi},300, 'easeOutExpo');
	});

	$('html,body').scrollspy({ target: '#menubar', offset: 10  });

	$.scrollify({
        section : ".section-class",
        sectionName : false,
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 300,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: false,
        pagination: true,
        before:function() {},
        after:function() {$.scrollify.update()},
        afterResize:function() {},
        afterRender:function() {}
    });

    //dots hide - show
	$(window).on("scroll", function() {
	    var dayOneOffset = $("#day-one").offset().top,
	        menubar = $("#menubar");

	    if ( $(window).scrollTop() >= dayOneOffset ) {
	        menubar.show();
	    } else {
	        menubar.hide();
	    }
	});
	//End Navigation Dots

	if ( $(window).width() < 768 ) {

  		var backTop = $("#estee-back-top"),
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

	// //interstitial ad
	// var adInterval = window.setInterval(function() {
 //        console.log("firing");
 //        $(".estee-day-products").each(function(i) {
 //            if ( i === 2 ) {
 //                var interstitialAd = $("#interstitial_1").detach();

 //                $(this).after(interstitialAd);
 //                clearInterval(adInterval);
 //            }
 //        })

 //    }, 500);
});


if ($(window).width() <= 414 ) {
	$.scrollify.disable();
};
