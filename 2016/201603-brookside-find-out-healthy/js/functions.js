$(document).ready(function() {

	$(".bs-btn").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		hideForCard();
		showCard(targetNum(this));
	})

	$("#click-more").click(function() {
		hideForCard();
		showCard("1");
	})

	$("#start-over").click(function() {
		resetPage();
	})

})

function targetNum(clickedBtn) {
	var $btn = clickedBtn,
	  btnNum = $btn.id.replace("bs-btn-", "");
	return btnNum;
}

function resetPage() {
	$(".bs-head-section").slideDown();
    $("#start-over").hide();
	$("#click-more").show();
	$(".bs-btn-active").removeClass("bs-btn-active");
	$(".bs-card-active").removeClass("bs-card-active");

	$('html, body').animate({ scrollTop: 0 }, 'fast');
}

function hideForCard() {
	var $clickMore = $("#click-more");

	if ( $clickMore.is(':visible') ) {
		$clickMore.hide();
		
		if ( $(window).width() >= 992 ) {
			$("#start-over").removeClass("hidden").css("display", "block");
			$(".bs-head-section").slideUp();
		}
	}
	else {
		$(".bs-card-active").removeClass("bs-card-active");
		$(".bs-btn-active").removeClass("bs-btn-active");
	}
}

function showCard(btnNum) {
	var $cards = $(".bs-card");

	for (var cardIndex in $cards) {
		var cardID = $cards[cardIndex].id,
	       cardNum = cardID.replace("bs-card-", ""),
	       $btn = $("#bs-btn-" + btnNum);

		if ( cardNum === btnNum ) {
			$('#' + cardID).addClass("bs-card-active");
			$btn.addClass("bs-btn-active");
			break;
		}
	}
}