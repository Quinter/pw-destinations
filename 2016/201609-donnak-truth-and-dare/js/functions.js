$(document).ready(function() {

    var source = $('#dk-template').html();
    var theTemplate = Handlebars.compile(source);

    var html = theTemplate(dk.context);

    $('#target').html(html);

    $('#dk-business-rapport').find('.img-two').prepend("<a href='http://www.donnakaran.com/accessories/fragrance/cashmere-mist/cashmere-aura-1.7oz-edp/5JJ001.html?dwvar_5JJ001_color=000#start=1' target='_blank' data-gae-track='event' data-gae-category='destination' data-gae-action='click' data-gae-label='outboundLink_29_donna_karan'><img src='http://prodstatics3azcdn1.purewow.com/static/2016/21379/donna_karan/images/desktop/2x/2-2.jpg'></a>");

	$('#dk-business-rapport').find('.img-two').children('img').detach().appendTo('#dk-link-out');

    $(".dk-accordion-head").on('click', function() {
       toggleAccordionSection($(this));
    });

    $(".back-list").on('click', function() {
        toggleAccordionSection($(".dk-accordion-head.sticky"));
  	});

  	$(".dk-hed-cta").on('click', function() {
  		scrollToTop($("#dk-accordion"), 62);
  	});
})


//toggle Accordion Sections (open clicked one if closed, close it if opened, and close all other open ones)
function toggleAccordionSection(clickedHead) {
	var currentSection = clickedHead.closest(".dk-accordion-section"),
		currentBody = currentSection.find(".dk-accordion-body"),
		headerSection = $(".dk-head-section"),
		moreOffset = $("header.fixed-header").height(),
		accordionOpen;

	if ( clickedHead.hasClass("sticky") ) {
		accordionOpen = true;

	} else {
		accordionOpen = false;
	}

     //identify the other accordion-body's that weren't clicked and hide them
    if ( accordionOpen ) {
    	clickedHead.removeClass("sticky");
    	headerSection.show();
    	currentBody.removeClass("clicked");
    	$(".dk-accordion-section").removeClass("clicked");
 		$(".dk-accordion-head").show();	
	    accordionOpen = false;
		
		scrollToTop($("#dk-accordion"), 62);
    } else {

		clickedHead.addClass("sticky");
		headerSection.hide();
		currentBody.addClass("clicked");
		// $(".dk-accordion-head-content").removeAttr("data-gae-track" , '');
		// $(".dk-accordion-head-content").removeAttr("data-gae-category" , '');
		// $(".dk-accordion-head-content").removeAttr("data-gae-action" , '');
		// $(".dk-accordion-head-content").removeAttr("data-gae-label" , '');
		$(".dk-accordion-section").addClass("clicked");
		$(".dk-accordion-body").not(".clicked").hide();
		$(".dk-accordion-head").not(".sticky").hide();
		accordionOpen = true;
    }

	toggleHeadInfo(clickedHead);
	currentBody.slideToggle("fast");

	toggleAccordionLock(currentSection);
}

//toggle head info on accordion head section click (text and icon)
function toggleHeadInfo(clickedHead) {
	clickedHead.find("span.expand-icon").toggleClass("expanded");
	clickedHead.find($('.dk-left-text')).fadeToggle();
	clickedHead.find($('.dk-left-text-active')).fadeToggle();
}

//generic "scroll-to-top"
function scrollToTop(selector, moreOffset) {
	$("body,html").animate({
		scrollTop: selector.offset().top - moreOffset
	});
}


function toggleAccordionLock(clickedSection) {
	clickedSection.toggleClass("dk-locked");

	if (clickedSection.hasClass("dk-locked")) {
		//prevent scrolling up or down past the boundaries of the locked accordion section
		var $lockedSection = $(".dk-locked");

	    var eTop = $lockedSection.offset().top;
	    $(document).scrollTop(eTop);
	    var eHeight = $lockedSection.height();
	    var eBottom = eTop + eHeight - $(window).height();
	}

	function limitScroll() {
	    var windowScrollTop = $(window).scrollTop();
	    if(windowScrollTop < eTop){
	        $(document).scrollTop(eTop);
	    }
	    else if(windowScrollTop > eBottom){
	        $(document).scrollTop(eBottom);
	    }		
	}
};


if ($(window).width() >= 768 ) {
	$(window).on("scroll touchmove", function () {
	    $('.dk-accordion-head.sticky').toggleClass('tiny', $(document).scrollTop() > 0);
	});
};


