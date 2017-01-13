$(function() {
  var source = $("#document-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#DocumentResults').html(html);
});


var data = {
          rows: [{
                recipes: [
                    {
                        classCol: "col-md-12",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/1-kitkat.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/1-kitkat-cake-mobile.jpg",
                        imageTitle: "Kit Kat&#174; Ice-Cream Cake",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fkit-kat-ice-cream-cake&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Fkit_kat_ice_cream_cake-3.jpg&description=A%20build-your-own%20ice-cream%20cake%20fit%20for%20a%20crowd.%20KIT%20KAT%20bars%20layered%20with%20vanilla%20ice%20cream%20and%20topped%20with%20HERSHEY%E2%80%99S%20Chocolate%20Shell%20Topping%20create%20a%20cool%20dessert%20with%20just%20a%20little%20bit%20of%20crunch%20%E2%80%94%20via%20%40PureWow%0A",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_01_curalate_kitkat_cake"',
                    }
                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-md-8",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/2-jolly-rancher-candy-apples.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/2-jolly-rancher-candy-apples-mobile.jpg",
                        imageTitle: "Jolly Rancher Candy Apples",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fjolly-rancher-candy-apples&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2FJR_candy_apples-3.jpg&description=The%20fall%20season%20wouldn%E2%80%99t%20be%20complete%20without%20biting%20into%20a%20traditional%20candy%20apple.%20They%E2%80%99re%20the%20perfect%20balance%20of%20sweet%20and%20sour%2C%20with%20just%20a%20little%20bit%20of%20crunch.%20This%20year%2C%20we%20invite%20you%20to%20try%20our%20modern%20version%20of%20this%20treat%2C%20made%20with%20JOLLY%20RANCHER%20candies%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_02_curalate_jolly_rancher_apples"',
                    },
                    {
                        classCol: "col-md-4",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/3-reeses-brownies.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/3-reeses-brownies-mobile.jpg",
                        imageTitle: "Reese's Peanut Butter Cup Brownies",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Freeses-peanut-butter-cup-brownies&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Freese_s_brownies-3.jpg&description=Rule%20of%20thumb%3A%20Any%20time%20you%20have%20the%20option%20to%20combine%20chocolate%20and%20peanut%20butter%2C%20go%20for%20it.%20These%20chewy%20REESE%E2%80%99S%20Peanut%20Butter%20Cup%20brownies%20are%20a%20surefire%20way%20to%20please%20a%20crowd%20and%20satisfy%20your%20sweet%20tooth%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_03_curalate_reeses_brownies"',
                    },

                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-md-8",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/4-jolly-rancher-pops.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/4-jolly-rancher-pops-mobile.jpg",
                        imageTitle: "Jolly Rancher Agate Lollipops",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fagate-jolly-rancher-lollipops&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2FJR_agate_lollipops-3.jpg&description=Since%20we%E2%80%99re%20kind%20of%20obsessed%20with%20geode%20wedding%20cakes%2C%20we%E2%80%99re%20going%20a%20step%20further%20and%20making%20agate%20lollipops.%20The%20best%20part%3F%20They%E2%80%99re%20made%20from%20JOLLY%20RANCHER%20candies.%20A%20sweet%20treat%20that%E2%80%99s%20beautiful%20to%20look%20at%20and%20even%20better%20to%20eat%20%E2%80%94%20via%20%40PureWow",
                        gaTag:  'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_04_curalate_jolly_rancher_pops"',
                    },
                    {
                        classCol: "col-md-4",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/5-twizzler-cupcakes.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/5-twizzler-cupcakes-mobile.jpg",
                        imageTitle: "Twizzler Pull 'n' Peel Lattice Cupcakes",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Ftwizzler-pull-n-peel-lattice-cupcakes&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Ftwizzler_pull_n_peel_cupcakes-3.jpg&description=We%20highly%20encourage%20playing%20with%20your%20food%20and%20this%20cupcake%20recipe%20will%20let%20you%20do%20just%20that.%20Pull%20apart%20strands%20of%20TWIZZLERS%20Pull%20%E2%80%99n%E2%80%99%20Peel%20to%20make%20a%20lattice%20pattern%20as%20the%20smell%20of%20classic%20vanilla%20cupcakes%20fills%20the%20room%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_05_curalate_twizzler_cupcakes"',
                    },

                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-md-4",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/6-kitkat-croissants.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/6-kitkat-croissants-mobile.jpg",
                        imageTitle: "Kit Kat&#174; Croissants",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fkit-kat-croissants&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Fkit_kat_croissants-3.jpg&description=Ever%20think%20of%20combining%20a%20flaky%20croissant%20with%20a%20KIT%20KAT%20bar%3F%20Well%2C%20it%E2%80%99s%20happening%2C%20folks.%20And%20now%20you%20have%20an%20excuse%20to%20eat%20chocolate%20at%20the%20breakfast%20table.%20You%E2%80%99re%20welcome%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_06_curalate_kitkat_croissants"',
                    },
                    {
                        classCol: "col-md-8",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/7-hershey-cake.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/7-hershey-cake-mobile.jpg",
                        imageTitle: "Hershey's Chocolate Cake",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fultimate-hersheys-chocolate-cake&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Fhershey_s_chocolate_cake-3.jpg&description=If%20double-chocolate%20isn%E2%80%99t%20enough%20for%20you%2C%20try%20this%20recipe%20for%20three%20layers%20of%20the%20ultimate%20chocolate%20cake%20confection.%20Are%20you%20drooling%20yet%3F%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_07_curalate_hershey_cake"',
                    },

                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-md-8",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/8-twizzler-reeses-cake.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/8-twizzler-reeses-cake-mobile.jpg",
                        imageTitle: "Twizzlers Twists and Reese's Pieces Peanut Butter Cake",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fchocolate-peanut-butter-twizzlers-cake&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Ftwizzler_reese_s_cake-3.jpg&description=Can%E2%80%99t%20decide%20which%20sweet%20treat%20you%E2%80%99re%20in%20the%20mood%20for%3F%20Don%E2%80%99t%20worry%2C%20this%20layered%20cake%20has%20you%20covered.%20It%20features%20chewy%20chocolate%20TWIZZLERS%2C%20crunchy%20REESE'S%20Pieces%20and%20classic%20chocolate%20cake.%20Need%20we%20say%20more%3F%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_08_curalate_twizzler_reeses_cake"',
                    },
                    {
                        classCol: "col-md-4",
                        imageURLdesktop: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/9-reeses-cookies.jpg",
                        imageURLmobile: "http://prodstatics3azcdn1.purewow.com/static/2016/21602/hershey-201610/images/9-reeses-cookies-mobile.jpg",
                        imageTitle: "Reese's Peanut Butter Cup Stuffed Sugar Cookies",
                        superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=upY531wzMR&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Freeses-peanut-butter-cup-stuffed-sugar-cookies&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fuploaded_image%2Freese_s_stuffed_cookies-3.jpg&description=If%20we%E2%80%99re%20being%20honest%2C%20sugar%20cookies%20aren%E2%80%99t%20exactly%20the%20most%20exciting%20dessert.%20However%2C%20there%20are%20a%20million%20ways%20to%20jazz%20them%20up%2C%20like%20stuffing%20an%20entire%20REESE%E2%80%99S%20Peanut%20Butter%20Cup%20right%20in%20the%20middle%20of%20the%20cookie%20%E2%80%94%20via%20%40PureWow",
                        gaTag: 'data-gae-track="social" data-gae-category="destination" data-gae-action="social" data-gae-label="pin_it_09_curalate_reeses_cookies"',
                    },

                ]
            },
          ]
        };
