;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	



	$doc.ready(function() {
		$('.d-section .btn-pink').on('click', function(event) {
			$(this).closest('.d-wrapper').addClass('d-toc-hidden');
			scrollspy.refreshPositions();  
		});

		$('.toc-link-back').on('click', function(event) {
			$(this).closest('.d-wrapper').removeClass('d-toc-hidden');
		});

		var scrollspy = new ScrollSpy({
            linksContainerSelector: '#toc-scrollspy',
            sectionSelector: '.d-toc-article',
            headerOffset: false
        });
        
        scrollspy.init();
		$win.on('load resize', function() {
	        scrollspy.refreshPositions();  
	    }).on('scroll', function() {
	    	var winT = $win.scrollTop();
	        var $sideNav = $('.toc-side-nav');
	        var $wrapper = $('.d-wrapper');
	        var wrapperTop = $wrapper.offset().top;

	        console.log(wrapperTop);
	        console.log(winT);
	        
	        $sideNav.toggleClass('toc-side-nav-fixed', winT >= wrapperTop);
	    });
	});


    	// Scroll Spy

	var ScrollSpy = function(options) {
        var _spy = this;
        
        _spy.linksContainerSelector = options.linksContainerSelector;
        _spy.sectionSelector = options.sectionSelector;
        
        _spy.$linksContainer = $(_spy.linksContainerSelector);
        _spy.$links = _spy.$linksContainer.find('a');
        _spy.$sections = $(_spy.sectionSelector);
        _spy.headerOffset = options.headerOffset;
        
        _spy.currentIdx = 0;
        _spy.data = {
            offsets: [],
            ids: []
        };
    };
    
    ScrollSpy.prototype.getPositions = function() {
        var _spy = this;
        var data = _spy.data;
        
        for(var i = 0; i < _spy.$sections.length; i++) {
            var $section = _spy.$sections.eq(i);
            
            data.ids.push($section.attr('id'));
            data.offsets.push($section.offset().top);
        }
    };
    
    ScrollSpy.prototype.refreshPositions = function() {
        var _spy = this;
        var data = _spy.data.offsets;
        
        for(var i = 0; i < _spy.$sections.length; i++) {
            var $section = _spy.$sections.eq(i);
            
            data[i] = $section.offset().top;
        }
    };
    
    ScrollSpy.prototype.getCurrentSection = function() {
        var _spy = this;
        var data = _spy.data;
        var scrollTop = $(window).scrollTop();
        
        if(_spy.headerOffset === true) {
            scrollTop += _spy.$linksContainer.outerHeight();
        }
        
        for(var i = 0; i < data.offsets.length; i++) {
            var currentOffset = data.offsets[i];
            var nextOffset = data.offsets[i+1];
            
            if(scrollTop >= currentOffset && scrollTop < nextOffset || 
               scrollTop >= currentOffset && typeof nextOffset === 'undefined') {
                _spy.currentIdx = i;
                break;
            }
        }
        
        _spy.setCurrent();
    };
    
    ScrollSpy.prototype.setCurrent = function() {
        var _spy = this;
        
         _spy.$links.eq(_spy.currentIdx)
             .parent()
                 .addClass('current')
             		.siblings('.current')
                 	.removeClass('current');
    };
    
    ScrollSpy.prototype.scrollToCurrentSection = function() {
        var _spy = this;
        
        var newTop = _spy.data.offsets[_spy.currentIdx];
        
        if(_spy.headerOffset === true) {
            newTop -= _spy.$linksContainer.outerHeight();
        }
        
        $('html, body').animate({
            scrollTop: newTop
        }, {
            duration: 700,
            queue: false
        });
    };
    
    ScrollSpy.prototype.bindEvents = function() {
        var _spy = this;
        var $win = $(window);
        
        _spy.$links
            .on('click.scrollSpy', function(e) {
                e.preventDefault();
                
                _spy.currentIdx = $(this).parent().index();
                _spy.scrollToCurrentSection();
            });
        
        $win.on('scroll.scrollSpy', function() {
            _spy.getCurrentSection();
        });
    };
    
    ScrollSpy.prototype.init = function() {
        var _spy = this;
        
        _spy.getPositions();
        _spy.getCurrentSection();
        _spy.setCurrent();
        _spy.bindEvents();
    };
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
               
               $('#video3 .media-action-overlay').toggleClass('invisible');
            }
            function finish() {
    
               $('iframe.vimeo').attr("src", $('iframe.vimeo').attr("src"));
            }

        // Call the API when a button is pressed
        $('#video3 .media-action-overlay').bind('click', function() {
            var btn = $(this);
            var fr = btn.attr("data-control");
            if (btn.text()=="Pause") {
                $f(fr).api('pause');
                $('#video3 .media-action-overlay').toggleClass('invisible');
            }
            else {
                $f(fr).api('play');
                
            }
        });

          $( "body" ).on( "click", "#video3 .media-action-overlay", function( event ) {
          
            $("#video3 .media-action-overlay").toggleClass('invisible');
            $f(fr).api('play');
        });

         //video1
        $('#video1 .media-action-overlay').bind('click', function() {
            var btn = $(this);
            var fr = btn.attr("data-control");
            if (btn.text()=="Pause") {
                $f(fr).api('pause');
                $('#video1 .media-action-overlay').toggleClass('invisible');
            }
            else {
                $f(fr).api('play');
                
            }
        });

          $( "body" ).on( "click", "#video1 .media-action-overlay", function( event ) {
          
            $("#video1 .media-action-overlay").toggleClass('invisible');
            $f(fr).api('play');
        });

         //video2
        $('#video2 .media-action-overlay').bind('click', function() {
            var btn = $(this);
            var fr = btn.attr("data-control");
            if (btn.text()=="Pause") {
                $f(fr).api('pause');
                $('#video2 .media-action-overlay').toggleClass('invisible');
            }
            else {
                $f(fr).api('play');
                
            }
        });

          $( "body" ).on( "click", "#video2 .media-action-overlay", function( event ) {
          
            $("#video2 .media-action-overlay").toggleClass('invisible');
            $f(fr).api('play');
        });    
})(jQuery, window, document);