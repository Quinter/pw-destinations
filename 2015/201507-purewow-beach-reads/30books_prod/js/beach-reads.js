
$('.backtop a').on('click', function (e) {
 $('html, body').animate({scrollTop: $("#main").offset().top-71}, 500);
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.backtop').fadeIn();
    } else {
        $('.backtop').fadeOut();
    }
});
enquire.register("(min-width: 1225px)", function() {
$('#slide-book-sign-up-module').waypoint(function() {
$('.book-sign-up-module').fadeIn();
});
$('#hide-book-sign-up-module').waypoint(function() {
  $('.book-sign-up-module').fadeOut();
});
$('#hide-intro-book-sign-up-module').waypoint(function() {
  $('.book-sign-up-module').fadeOut();
});
$('#id_close_book-sign-up-module').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.book-sign-up-module').fadeOut();
});
});

enquire.register("(max-width: 1224px)", {
    match : function() {
        $('#hide-book-sign-up-module').waypoint(function() {
		$('.book-sign-up-module').fadeIn();
});
    }
});
