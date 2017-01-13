$(document).ready(function() {

    var source = $('#row-template').html();
    var theTemplate = Handlebars.compile(source);

    var html = theTemplate(olay.context);

    $('#target').html(html);

        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
            columnWidth: 250,
            gutter: 20
            }
        });

        $('.modal-trigger').click(function(event) {
          $(this).popupmodal({
              fadeDuration: 200,
              clickClose: true,
              fadeDelay: 1.5
          });
          return false;
        });
        
        if ($(window).width() <= 1024){  
           $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                columnWidth: 250,
                gutter: 20
                }
            });
        } 
        
        if ($(window).width() <= 768){  
           $('.mobile-grid').isotope({
                itemSelector: '.mobile-grid-item',
                masonry: {
                columnWidth: 350,
                gutter: 20
                }
            });
        }  

        if ($(window).width() <= 414){  
           $('.mobile-grid').isotope({
                itemSelector: '.mobile-grid-item',
                masonry: {
                columnWidth: 165,
                gutter: 20
                }
            });
        }  
});


$(document).keydown(function(e) {
   switch (e.which) {
       case 37: // left
           $('.olayprev').filter(':visible').click();
           break;

       case 39: // right
           $('.olaynext').filter(':visible').click();
           break;

       default:
           return; // exit this handler for other keys
   }
   e.preventDefault(); // prevent the default action (scroll / move caret)
});