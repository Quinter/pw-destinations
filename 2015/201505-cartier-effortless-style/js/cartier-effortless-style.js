$(document).ready(function() {
  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation:true,
    navigationText:false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 3,
    navigation:true,
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
      center(current)
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
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
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
    items : 3,
    navigation:true,
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
      .addClass("synced")
    if($("#sync4").data("owlCarousel") !== undefined){
      center2(current2)
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
        sync4.trigger("owl.goTo", num2 - sync4visible.length+2)
      }else{
        if(num2 - 1 === -1){
          num2 = 0;
        }
        sync4.trigger("owl.goTo", num2);
      }
    } else if(num2 === sync4visible[sync4visible.length-1]){
      sync4.trigger("owl.goTo", sync4visible[1])
    } else if(num2 === sync4visible[0]){
      sync4.trigger("owl.goTo", num2-1)
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
    items : 3,
    navigation:true,
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
      .addClass("synced")
    if($("#sync6").data("owlCarousel") !== undefined){
      center3(current3)
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
        sync6.trigger("owl.goTo", num3 - sync6visible.length+2)
      }else{
        if(num3 - 1 === -1){
          num3 = 0;
        }
        sync6.trigger("owl.goTo", num3);
      }
    } else if(num3 === sync6visible[sync6visible.length-1]){
      sync6.trigger("owl.goTo", sync6visible[1])
    } else if(num3 === sync6visible[0]){
      sync6.trigger("owl.goTo", num3-1)
    }

  }

	$('.back-to-top-face').on('click', function(){
		$('html, body').animate({scrollTop: $('.title-container').offset().top-100}, 500);
	});
	
	
	         	// Enable the API on each Vimeo video
           jQuery('iframe.vimeo').each(function(){
                Froogaloop(this).addEvent('ready', ready);
            });
            
            function ready(playerID){
                // Add event listerns
                // http://vimeo.com/api/docs/player-js#events
                Froogaloop(playerID).addEvent('play', play);
                Froogaloop(playerID).addEvent('pause', pause);
                Froogaloop(playerID).addEvent('finish', finish);
                
                // Fire an API method
                // http://vimeo.com/api/docs/player-js#reference
                Froogaloop(playerID).api('pause');
            }
            function play(playerID){

            }
            function pause() {
               
               $('#morningbusinessventure .media-action-overlay').toggleClass('invisible');
            }
            function finish() {
	
               $('iframe.vimeo').attr("src", $('iframe.vimeo').attr("src"));
            }

            // Call the API when a button is pressed
        $('#morningbusinessventure .media-action-overlay').bind('click', function() {
            var btn = $(this);
            var fr = btn.attr("data-control");
            if (btn.text()=="Pause") {
                $f(fr).api('pause');
                $('#morningbusinessventure .media-action-overlay').toggleClass('invisible');
            }
            else {
                $f(fr).api('play');
                
            }
        });

  $( "body" ).on( "click", "#morningbusinessventure .media-action-overlay", function( event ) {
  
    $("#morningbusinessventure .media-action-overlay").toggleClass('invisible');
    $f(fr).api('play');
});

});