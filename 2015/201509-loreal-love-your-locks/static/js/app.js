$(document).ready(function() {
	
	// Image Navigation
	function imageNav(e){
		var currentStyle = "#item-" + this.id;
		e.preventDefault();
		$(".style-item").removeClass('visibleItem');
		$(currentStyle).addClass("visibleItem");
		$(".nav-indicator").removeClass('current-nav');
    $(".stylenav-container").removeClass('current-nav');
    $(this).addClass("current-nav");
		$(this).find(".nav-indicator").addClass("current-nav");
		$(".stylenav__text").removeClass('current-nav');		
		$(this).find(".stylenav__text").addClass("current-nav");
    $("img").removeClass('current-nav');
    $(this).find('img').addClass('current-nav');
    $(".stylenav__image-credit").removeClass('current-nav');
    $(this).find('.stylenav__image-credit').addClass('current-nav');
	}

	$("#smooth").on("hover", imageNav );
	$("#vibrant").on("hover", imageNav );
	$("#curly").on("hover", imageNav );
	$("#shiny").on("hover", imageNav );
  

  var navActive = false;

  function mobileNav(e){
    var currentStyle = "#item-" + this.id;
    var currentNav = ".stylenav--" + this.id;
    
    if (!navActive) {
      e.preventDefault();
      $(".style-item").fadeOut(600);
      
      $(".mobile--stylenav__item").fadeOut(600);

      $(".title-container").fadeOut(600);

      $('html, body').animate({scrollTop: $("#mobile-stylenav").offset().top-1}, 500);

      $(currentNav).animate({marginTop: "+=55"}).fadeIn(600).addClass('visibleItem');

      $(currentStyle).fadeIn(1600);

      navActive = true;
      
    } else {
      e.preventDefault();
      $(".style-item").fadeOut(600);
      
      $(".mobile--stylenav__item").fadeIn(600);
      $(currentNav).css("margin-top", "0").removeClass('visibleItem');

      $(".title-container").fadeIn(600);

      navActive = false;
    }
  }

  $(".mobile--stylenav__item").on("click", mobileNav);


  function scrollToContent(e) {
    e.preventDefault;
    $('html, body').animate({scrollTop: $(".visibleItem").offset().top-65}, 500);
  }

  $("#stylenav").on("click", scrollToContent);

	// Smooth (1st) Carousel
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");
  sync1.owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 1200,
      pagination: false,
      navigationText: false,
      afterAction: syncPosition,
      responsiveRefreshRate: 200,
      autoScaleUp: false,
      responsive: true,
      singleItem:true
  });
  sync2.owlCarousel({
    items : 4,
    navigation:false,
    navigationText:false,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync2")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync2").data("owlCarousel") !== undefined){
      center(current);
    }
  }
 
  $("#sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2);
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1]);
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1);
    }
    
  }

  /* carousel two */
  var sync3 = $("#sync3");
  var sync4 = $("#sync4");

   sync3.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation:true,
    navigationText:false,
    pagination:false,
    afterAction : syncPosition2,
    responsiveRefreshRate : 200,
  });
 
  sync4.owlCarousel({
    items : 4,
    navigation:false,
    navigationText:false,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });

  function syncPosition2(el){
    var current2 = this.currentItem;
    $("#sync4")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current2)
      .addClass("synced");
    if($("#sync4").data("owlCarousel") !== undefined){
      center2(current2);
    }
  }

  $("#sync4").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number2 = $(this).data("owlItem");
    sync3.trigger("owl.goTo",number2);
  });

  function center2(number2){
    var sync4visible = sync4.data("owlCarousel").owl.visibleItems;
    var num2 = number2;
    var found = false;
    for(var i in sync4visible){
      if(num2 === sync4visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num2>sync4visible[sync4visible.length-1]){
        sync4.trigger("owl.goTo", num2 - sync4visible.length+2);
      }else{
        if(num2 - 1 === -1){
          num2 = 0;
        }
        sync4.trigger("owl.goTo", num2);
      }
    } else if(num2 === sync4visible[sync4visible.length-1]){
      sync4.trigger("owl.goTo", sync4visible[1]);
    } else if(num2 === sync4visible[0]){
      sync4.trigger("owl.goTo", num2-1);
    }

  }
/* carousel three */

  var sync5 = $("#sync5");
  var sync6 = $("#sync6");

  sync5.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation:true,
    navigationText:false,
    pagination:false,
    afterAction : syncPosition3,
    responsiveRefreshRate : 200,
  });
 
  sync6.owlCarousel({
    items : 4,
    navigation:false,
    navigationText:false,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });


  function syncPosition3(el){
    var current3 = this.currentItem;
    $("#sync6")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current3)
      .addClass("synced");
    if($("#sync6").data("owlCarousel") !== undefined){
      center3(current3);
    }
  }

  $("#sync6").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number3 = $(this).data("owlItem");
    sync5.trigger("owl.goTo",number3);
  });

  function center3(number3){
    var sync6visible = sync6.data("owlCarousel").owl.visibleItems;
    var num3 = number3;
    var found = false;
    for(var i in sync6visible){
      if(num3 === sync6visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num3>sync6visible[sync6visible.length-1]){
        sync6.trigger("owl.goTo", num3 - sync6visible.length+2);
      }else{
        if(num3 - 1 === -1){
          num3 = 0;
        }
        sync6.trigger("owl.goTo", num3);
      }
    } else if(num3 === sync6visible[sync6visible.length-1]){
      sync6.trigger("owl.goTo", sync6visible[1]);
    } else if(num3 === sync6visible[0]){
      sync6.trigger("owl.goTo", num3-1);
    }

  }
// Fourth Carousel
/* carousel four */

  var sync7 = $("#sync7");
  var sync8 = $("#sync8");

  sync7.owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 1200,
      pagination: false,
      navigationText: false,
      afterAction: syncPosition4,
      responsiveRefreshRate: 200,
      autoScaleUp: false,
      responsive: true,
      singleItem:true,
      items: 4
  });
 
  sync8.owlCarousel({
    items : 4,
    navigation:false,
    navigationText:false,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });


  function syncPosition4(el){
    var current4 = this.currentItem;
    $("#sync8")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current4)
      .addClass("synced");
    if($("#sync8").data("owlCarousel") !== undefined){
      center4(current4);
    }
  }

  $("#sync8").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number4 = $(this).data("owlItem");
    sync7.trigger("owl.goTo",number4);
  });

  function center4(number4){
    var sync8visible = sync8.data("owlCarousel").owl.visibleItems;
    var num4 = number4;
    var found = false;
    for(var i in sync8visible){
      if(num4 === sync8visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num4>sync8visible[sync8visible.length-1]){
        sync8.trigger("owl.goTo", num4 - sync8visible.length+2);
      }else{
        if(num4 - 1 === -1){
          num4 = 0;
        }
        sync8.trigger("owl.goTo", num4);
      }
    } else if(num4 === sync8visible[sync8visible.length-1]){
      sync8.trigger("owl.goTo", sync8visible[1]);
    } else if(num4 === sync8visible[0]){
      sync8.trigger("owl.goTo", num4-1);
    }

  }
});
