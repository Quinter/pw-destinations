$(document).ready(function(){
  var $transformer = $('.transformer,.off-canvas-wrapper,.fixed-header'),
  $menuToggle = $('.menu-toggle');

  // Attaches event handler when .menu-toggle is clicked
  $menuToggle.on('click', function(event) {
    event.preventDefault();   
    $transformer.toggleClass('is-open');
  });

  $('.close-btn').on('click', function(event) {
  	event.preventDefault(); 
    $transformer.toggleClass('is-open');
  });
	
$.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};

jQuery(document).on('click', '.mobile-nav-controller', function() {
    jQuery('#mobile-menu').slideFadeToggle();
});
jQuery(document).on('click', '.anchor-sub-menu-controller', function() {
    jQuery(this).siblings('.sub-menu').slideFadeToggle();
    if (jQuery(this).find('i').hasClass('down')) {
        jQuery(this).find('i').removeClass('down');
        jQuery(this).find('i').addClass('up');
    } else {
        jQuery(this).find('i').removeClass('up');
        jQuery(this).find('i').addClass('down');
    }
});

// outside the scope of the jQuery plugin to
// keep track of all dropdowns
var $allDropdowns = $();

// if instantlyCloseOthers is true, then it will instantly
// shut other nav items when a new one is hovered over
$.fn.dropdownHover = function(options) {

    // the element we really care about
    // is the dropdown-toggle's parent
    $allDropdowns = $allDropdowns.add(this.parent());

    return this.each(function() {
        var $this = $(this).parent(),
            defaults = {
                delay: 500,
                instantlyCloseOthers: true
            },
            data = {
                delay: $(this).data('delay'),
                instantlyCloseOthers: $(this).data('close-others')
            },
            options = $.extend(true, {}, defaults, options, data),
            timeout;

        $this.hover(function() {
            if(options.instantlyCloseOthers === true)
                $allDropdowns.removeClass('open');

            window.clearTimeout(timeout);
            $(this).addClass('open');
        }, function() {
            timeout = window.setTimeout(function() {
                $this.removeClass('open');
            }, options.delay);
        });
    });
}; });
