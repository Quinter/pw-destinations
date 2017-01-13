$(document).ready(function() {

	var currentLocation = $("#ht-room-default"),
	currentPosition = 1,
	currentRoom = "default";
		$("#ht-nav li:first").on("click", changeRooms("default"));

		$("#ht-nav li:eq(1), #ht-cta").on("click", changeRooms("entryway"));
		$("#ht-cta").on("click", ga('send', 'event', 'click', 'explore'));
		$("#ht-nav li:eq(1)").on("click", ga('send', 'event', 'click', 'entryway'));


		$("#ht-nav li:eq(2)").on("click", changeRooms("kitchen"));
		$("#ht-nav li:eq(2)").on("click", ga('send', 'event', 'click', 'kitchen'));

		$("#ht-nav li:eq(3)").on("click", changeRooms("living"));
		$("#ht-nav li:eq(3)").on("click", ga('send', 'event', 'click', 'living'));

		$("#ht-nav li:eq(4)").on("click", changeRooms("bedroom"));
		$("#ht-nav li:eq(4)").on("click", ga('send', 'event', 'click', 'bedroom'));

		$("#ht-entry-5 .ht-next-room").on("click", changeRooms("kitchen"));

		$("#ht-kitchen-5 .ht-next-room").on("click", changeRooms("living"));

		$("#ht-living-5 .ht-next-room").on("click", changeRooms("bedroom"));

		$("#ht-bedroom-5 .ht-next-room").on("click", changeRooms("default"));		 
	function changeRooms(room) {

		return function() {

		currentRoom = room;

		currentPosition = 1;

		$("#ht-hotspots")
		.children()
		.first()
		.addClass("ht-scale")
		.siblings()
		.removeClass("ht-scale");


		switch(room) {

			case "default":

				$("#ht-hotspots")
				.children()
				.first()
				.removeClass("ht-scale"); 

				$(currentLocation).toggle();

				$("#ht-room-default").toggle();

				$("#ht-nav li:first").siblings().removeClass("ht-after-entry ht-after-kitchen ht-after-living ht-after-bedroom");

				$("#ht-room-photo")
				.css("opacity", "0")
				.children("img")
				.attr("src", "http://www.purewow.com/static/2015/07_29_30_home_trends/images/01-entryway.jpg")
				.siblings("p")
				.html('Photo Credit: <a target="_blank" href="http://www.buskenstudio.com/">Stephen Busken</a> for <a target="_blank" href="https://www.homepolish.com/mag/el-royal">Homepolish</a>');

 				$("#ht-hotspots")
 				.animate({opacity: 0}, "fast")
 				.children().css("background-color", "#5bc1a6")
				.first()
				.css("margin", "-31.5% 0% 0% 36%")
				.next()
				.css("margin", "-34% 0% 0% 21%")
				.next()
				.css("margin", "-12% 0% 0% 12%")
				.next()
				.css("margin", "-23.5% 0% 0% 12%")
				.next()
				.css("margin", "-13% 0% 0% 38%")
				.parent()
				.animate({opacity: 1}, "slow")
				.parent()
				.animate({opacity: 1}, "slow");

				$(".ht-indicators").hide();

				currentLocation = "#ht-room-default";

 				break;
 
			case "entryway":
				
 				$(currentLocation).toggle();

				$(".ht-indicators").show()
				.children()
				.first()
				.css("background-color", "#5bc1a6")
				.siblings()
				.css("background-color", "white");

				$("#ht-nav li:eq(1)").addClass("ht-after-entry")
				.siblings()
				.removeClass("ht-after-kitchen ht-after-living ht-after-bedroom");

				$("#ht-room-photo")
				.css("opacity", "0")
				// .animate({opacity: 0}, "fast")
				.children("img")
				.attr("src", "http://www.purewow.com/static/2015/07_29_30_home_trends/images/01-entryway.jpg")
				.siblings("p")
				.html('Photo Credit: <a target="_blank" href="http://www.buskenstudio.com/">Stephen Busken</a> for <a target="_blank" href="https://www.homepolish.com/mag/el-royal">Homepolish</a>');

				$("#ht-hotspots").children().css("background-color", "#5bc1a6")
				.first()
				.css("margin", "-31.5% 0% 0% 36%")
				.next()
				.css("margin", "-34% 0% 0% 21%")
				.next()
				.css("margin", "-12% 0% 0% 12%")
				.next()
				.css("margin", "-23.5% 0% 0% 12%")
				.next()
				.css("margin", "-13% 0% 0% 38%")
				.parent()
				.parent()
				.animate({opacity: 1}, "slow");

				$("#ht-entry-1").toggle();

 				currentLocation = "#ht-entry-1";

 				break;

			case "kitchen":
				ga('send', 'event', 'click', 'next_room');
				$("#ht-room-photo")
				.css("opacity", "0")
				.children("img")
				.attr("src", "http://www.purewow.com/static/2015/07_29_30_home_trends/images/02-kitchen.jpg")
				.siblings("p")
				.html("Photo Credit: Williams-Sonoma via <a target='_blank' href='http:&#47;&#47;www.decorpad.com&#47;photo.htm?photoId=104115'>Decorpad</a>");

 				$(currentLocation).toggle();


				$(".ht-indicators").show()
				.children()
				.first()
				.css("background-color", "#2c46b9")
				.siblings()
				.css("background-color", "white");

				$("#ht-nav li:eq(2)").addClass("ht-after-kitchen")
				.siblings()
				.removeClass("ht-after-entry ht-after-living ht-after-bedroom");

				$("#ht-kitchen-1").toggle();

				$("#ht-hotspots").children().css("background-color", "#2c46b9")
				.first()
				.css("margin", "-42.5% 0% 0% 21.5%")
				.next()
				.css("margin", "-12.5% 0% 0% 38.5%")
				.next()
				.css("margin", "-23% 0% 0% 11%")
				.next()
				.css("margin", "-32.5% 0% 0% 8%")
				.next()
				.css("margin", "-5% 0% 0% 18%")
				.parent()
				.parent()
				.animate({opacity: 1}, "slow");

 				currentLocation = "#ht-kitchen-1";

 				break;

			case "living":
				ga('send', 'event', 'click', 'next_room');
				$("#ht-room-photo")
				.css("opacity", "0")
				.children("img")
				.attr("src", "http://www.purewow.com/static/2015/07_29_30_home_trends/images/03-kitchen.jpg")
				.siblings("p")
				.html("Photo Credit: <a target='_blank' href='http://samanthagoh.com/'>Samantha Goh</a> for <a target='_blank' href='https://www.homepolish.com/mag/mongolian-fur-and-travel-collected-objects-in-a-bk-home'>Homepolish</a>");

 				$(currentLocation).toggle();

				$(".ht-indicators").show()
				.children()
				.first()
				.css("background-color", "#6cb4d9")
				.siblings()
				.css("background-color", "white");

				$("#ht-nav li:eq(3)").addClass("ht-after-living")
				.siblings()
				.removeClass("ht-after-entry ht-after-kitchen ht-after-living ht-after-bedroom");

				$("#ht-living-1").toggle();

				$("#ht-hotspots").children().css("background-color", "#6cb4d9")
				.first()
				.css("margin", "-42% 0% 0% 43%")
				.next()
				.css("margin", "-21% 0% 0% 32%")
				.next()
				.css("margin", "-5% 0% 0% 21%")
				.next()
				.css("margin", "-15% 0% 0% 4%")
				.next()
				.css("margin", "-16.5% 0% 0% 20%")
				.parent()
				.parent()
				.animate({opacity: 1}, "slow");


 				currentLocation = "#ht-living-1";

 				break;

			case "bedroom":
				ga('send', 'event', 'click', 'next_room');
				$("#ht-room-photo")
				.css("opacity", "0")
				.children("img")
				.attr("src", "http://www.purewow.com/static/2015/07_29_30_home_trends/images/04-bedroom.jpg")
 				.siblings("p")
				.html("Photo Credit: <a target='_blank' href='http://laurenedith.com/'>Lauren Andersen</a> for <a target='_blank' href='https://www.homepolish.com/mag/texture-rich-and-color-happy-in-sf'>Homepolish</a>");

 				$(currentLocation).toggle();


				$(".ht-indicators").show()
				.children()
				.first()
				.css("background-color", "#aca4e2")
				.siblings()
				.css("background-color", "white");

				$("#ht-nav li:eq(4)").addClass("ht-after-bedroom")
				.siblings()
				.removeClass("ht-after-entry ht-after-kitchen ht-after-living ht-after-bedroom");

				$("#ht-bedroom-1").toggle();

				$("#ht-hotspots").children().css("background-color", "#aca4e2")
				.first()
				.css("margin", "-19% 0% 0% 44%")
				.next()
				.css("margin", "-24.5% 0% 0% 24%")
				.next()
				.css("margin", "-6.5% 0% 0% 35%")
				.next()
				.css("margin", "-33.5% 0% 0% 21%")
				.next()
				.css("margin", "-29.5% 0% 0% 11%")
				.parent()
				.parent()
				.animate({opacity: 1}, "slow");

 				currentLocation = "#ht-bedroom-1";

 				break;

			}

		};

	}

	$("ul.ht-indicators li").on("click", ga('send', 'event', 'click', 'scrolling_circle'));
	$("ul.ht-indicators li:first").on("click", nextTip(1));

	$("ul.ht-indicators li:eq(1)").on("click", nextTip(2));

	$("ul.ht-indicators li:eq(2)").on("click", nextTip(3));

	$("ul.ht-indicators li:eq(3)").on("click", nextTip(4));

	$("ul.ht-indicators li:eq(4)").on("click", nextTip(5));

	$("#ht-hotspots div:first").on("click", nextTip(1, true));

	$("#ht-hotspots div:eq(1)").on("click", nextTip(2, true));

	$("#ht-hotspots div:eq(2)").on("click", nextTip(3, true));

	$("#ht-hotspots div:eq(3)").on("click", nextTip(4, true));

	$("#ht-hotspots div:eq(4)").on("click", nextTip(5, true));

	$("div.ht-next").on("click", nextTip());
	$("div.ht-next").on("click", ga('send', 'event', 'click', 'next_tip'));


	

	function nextTip(targetPosition, hotspot) {

		return function() {

			var thisSpot = $("#ht-hotspots").children();

			if(hotspot) { 

				$(this).addClass("ht-scale")
				.siblings()
				.removeClass("ht-scale");

			} else if (targetPosition) {
				thisSpot = thisSpot[targetPosition - 1];
				$(thisSpot).addClass("ht-scale")
				.siblings()
				.removeClass("ht-scale");

			} else {

				thisSpot = thisSpot[currentPosition];
				$(thisSpot).addClass("ht-scale")
				.siblings()
				.removeClass("ht-scale");
			}
		//Fingers Crossed this will GA log clicks on indiviudal circle buttons

			switch(currentRoom) {

				case "default":

					var currentSlide = $("#ht-room-wrapper").children()[0];

					var nextSlide = $("#ht-room-wrapper").children()[targetPosition];

					var that = $("ul.ht-indicators li")[targetPosition - 1];

					$(currentSlide).toggle();

					$(nextSlide).toggle();

					currentPosition = targetPosition;

					$("#ht-nav li:eq(1)").addClass("ht-after-entry");

					$(".ht-indicators").show();

					$(that)
					.css("background-color", "#5bc1a6")
					.siblings()
					.css("background-color", "white");

					currentLocation = nextSlide;

					currentRoom = "entryway";

					break;

				case "entryway":
					if(hotspot) {ga('send', 'event', 'click', 'circle_' + targetPosition + '_entryway');}

					currentSlide = $("#ht-room-wrapper").children()[currentPosition];

					if(targetPosition) {	
					
						nextSlide = $("#ht-room-wrapper").children()[targetPosition];

						that = $("ul.ht-indicators li")[targetPosition - 1];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition = targetPosition;


					} else {

						nextSlide = $("#ht-room-wrapper").children()[currentPosition + 1];

						that = $("ul.ht-indicators li")[currentPosition];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition += 1;

					}

					$(that)
					.css("background-color", "#5bc1a6")
					.siblings()
					.css("background-color", "white");

					currentLocation = nextSlide;

				break;

				case "kitchen":
					if(hotspot) {ga('send', 'event', 'click', 'circle_' + (targetPosition) + '_kitchen');}
					currentSlide = $("#ht-room-wrapper").children()[currentPosition + 5];

					if(targetPosition) {	
					
						nextSlide = $("#ht-room-wrapper").children()[targetPosition + 5];
						that = $("ul.ht-indicators li")[targetPosition - 1];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition = targetPosition;


					} else {

						nextSlide = $("#ht-room-wrapper").children()[currentPosition + 6];

						that = $("ul.ht-indicators li")[currentPosition];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition += 1;

					}

					$(that)
					.css("background-color", "#2c46b9")
					.siblings()
					.css("background-color", "white");

					currentLocation = nextSlide;

				break;

				case "living":
					if(hotspot) {ga('send', 'event', 'click', 'circle_' + (targetPosition) + '_living');}

					currentSlide = $("#ht-room-wrapper").children()[currentPosition + 10];

					if(targetPosition) {	
					
						nextSlide = $("#ht-room-wrapper").children()[targetPosition + 10];

						that = $("ul.ht-indicators li")[targetPosition - 1];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition = targetPosition;


					} else {

						nextSlide = $("#ht-room-wrapper").children()[currentPosition + 11];

						that = $("ul.ht-indicators li")[currentPosition];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition += 1;

					}

					$(that)
					.css("background-color", "#6cb4d9")
					.siblings()
					.css("background-color", "white");

					currentLocation = nextSlide;

				break;

				case "bedroom":
					if(hotspot) {ga('send', 'event', 'click', 'circle_' + (targetPosition) + '_bedroom');}

					currentSlide = $("#ht-room-wrapper").children()[currentPosition + 15];

					if(targetPosition) {	
					
						nextSlide = $("#ht-room-wrapper").children()[targetPosition + 15];

						that = $("ul.ht-indicators li")[targetPosition - 1];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition = targetPosition;


					} else {

						nextSlide = $("#ht-room-wrapper").children()[currentPosition + 16];

						that = $("ul.ht-indicators li")[currentPosition];

						$(currentSlide).toggle();

						$(nextSlide).toggle();

						currentPosition += 1;

					}

					$(that)
					.css("background-color", "#aca4e2")
					.siblings()
					.css("background-color", "white");

					currentLocation = nextSlide;

				break;

			}

		};

	}

	// Turn pages on mobile version

	$(".ht-nav-mobile-bottom").first().on("click", nextPage("#ht-entryway-mobile", "#ht-kitchen-mobile"));
	$(".ht-nav-mobile-bottom:eq(1)").on("click", nextPage("#ht-kitchen-mobile", "#ht-living-mobile"));
	$(".ht-nav-mobile-bottom:eq(2)").on("click", nextPage("#ht-living-mobile", "#ht-bedroom-mobile"));
	$(".ht-nav-mobile-bottom:eq(3)").on("click", nextPage("#ht-bedroom-mobile","#ht-entryway-mobile"));
	function nextPage(currentPage, nextPage) {

		return function () {
			ga('send', 'event', 'click', 'next_room');
			$(currentPage).toggle();

			$(nextPage).toggle();

			$('html, body').animate({scrollTop: $(nextPage).offset().top - 60}, "fast");

 		};
	}
});

