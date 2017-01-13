$(document).ready(function(){

  var adClosed = false;

  $("#mobile_leaderboard_fader").hide();

  $(".flavors").click(function() {
    if (adClosed === false) {
      $("#mobile_leaderboard_fader").show();
      adClosed = true;
    }
  })

  //back to flavors function
  $("#back-to-flavors, .olay-mobile-header-close").click(function() {
    $("#main-new").fadeOut();
    $("#flavor-wrapper").fadeIn();
  });

  //setup custom 2 column layout on tablet
  if ( $(window).width() > 767 && $(window).width() < 992  ) {
    setupOlayTabletLayout();
  }

  $(window).resize(function() {
    if ( $(window).width() > 767 && $(window).width() < 992  ) {
      setupOlayTabletLayout();
    }    
  })


  // hide and show toggle main
$(".flavors").on('click', function() {
    $("#flavor-wrapper").fadeOut();
    $("#main-new").fadeIn();
    var tabNumLarge = $(this).attr("id").split("").pop();
    tabShow(tabNumLarge);
    var miniNavItems = $("#navi").find("li");
  //keeping active class on second nav
    miniNavItems.each(function(index) {
     var $miniNavItemLink = $(miniNavItems[index]).find("a");
     var miniNavID = $miniNavItemLink.attr("class").split("").pop();
     if ( miniNavID === tabNumLarge ) {
       $(miniNavItems[index]).addClass("active");
     }
    });
 });
  //nav active
  $('#navi li').click(function() {
     $('#navi li').removeClass("active");
     var tabNumMini = $(this).children("a").attr("class").split("").pop();
     tabShow(tabNumMini);
     $(this).addClass('active');
  });
  //main nav add remove div on second page
  function tabShow(tabNum) {
     $('.newboxes').each(function() {
          if ($(this).attr("id").split("").pop() === tabNum) {
               $(this).show();
               scrollToTop($(this));
          }
          else {
               $(this).hide();
          }
     });
  }
  // sticky nav
  var  hd = $('.flav-nav-header'),
      srl = 'flav-nav-scrolled',
      hdr = $('header').height();
  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      hd.addClass(srl);
    } else {
      hd.removeClass(srl);
    }
  });

//iframe video append to start after image is taken off on click
 $(".wrap-video-overlay").click(function() {
    //start video
    var $iframe = $(this).siblings("iframe"),
        iframeSrc = $iframe.attr("src");
    iframeSrc += "&autoplay=1";
    $iframe.attr("src", iframeSrc);
    
      //make overlay transparent and click thru-able
      $(this).hide();
  });

});

//generic "scroll-to-top" (was used in Valspar Phase 2)
function scrollToTop(selector, moreOffset) {
  $("body,html").animate({
    scrollTop: selector.offset().top - moreOffset
  });
};

function setupOlayTabletLayout() {
  var olayImageContainers = $(".olay-imgs-wrapper");

  olayImageContainers.each(function(index, olayImageContainer) {
    setupOlayTabletColumns($(olayImageContainer));

  });

}

function setupOlayTabletColumns(olayImageContainer) {
    var olayRows = olayImageContainer.find(".olay-row");

    olayRows.each(function(index, olayRow) {
      var olayRow = $(olayRow);

      //move this out of the loop and remove the video row from our olayRows object instead
      if ( !(olayRow.hasClass("olay-video-row")) ) {

        var nextRow = olayRow.next();

        //if 1st row
        if ( index === 0 ) {
          var colToMove = nextRow.children(".col-sm-6").first().detach();
          olayRow.append(colToMove);
        }
        //if 2nd row
        else if ( index === 1) {
          var colToMove1 = nextRow.children(".col-sm-6").first().detach();
          olayRow.append(colToMove1);

          var colToMove2 = nextRow.children(".col-sm-6").first().detach();
          olayRow.append(colToMove2);
        }

      }
    })
}

