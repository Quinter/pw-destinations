/**
 * Created by tonyjackson on 8/17/16.
 */
$(document).ready(function() {

    var source = $('#row-template').html();
    var theTemplate = Handlebars.compile(source);

    var html = theTemplate(nsw.context);

    $('#nsw-target').html(html);

    var backTop = $("#nsw-back-top");

    if ( $(window).width() < 768 ) {

        //a click/touchstart on the backTop button will trigger a scroll to the to of the window
        backTop.on('click touchstart', function() {
            scrollToTopOf($("body,html"), 63);
        });

        //we could replace the below with a jQuery waypoint on the bottom of the ".nsw-header"
        $(window).on('scroll touchmove', function() {

            if ( $(window).scrollTop() > 350 ) {
                backTop.fadeIn();
            } else {
                backTop.fadeOut();
            }
        });

    }

    //we've been reusing this function a lot. definitely a good candidate for our eventual destination.js file.
    function scrollToTopOf(selector, moreOffset) {
        $("body,html").animate({
            scrollTop: selector.offset().top - moreOffset
        }, 500);
        return false;
    };

    var source = $('#row-template').html();
    var theTemplate = Handlebars.compile(source);

    var html = theTemplate(nsw.context);

    $('#nsw-target').html(html);

    var adInterval = window.setInterval(function() {
        console.log("firing");
        $(".nsw-img-row").each(function(i) {
            if ( i === 2 ) {
                var interstitialAd = $("#interstitial_1").detach();

                $(this).after(interstitialAd);
                clearInterval(adInterval);
            }
        })

    }, 500);

});