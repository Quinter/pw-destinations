$(function() {
  var source = $("#document-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#DocumentResults').html(html);
});


var data = {
          rows: [{
                imageURLdesktop: "./images/doughnut-and-milkshake-1.jpg",
                imageURLmobile: "./images/doughnut-and-milkshake-1-mobile.jpg",
                imageTitle: "Baileys Coffee and Donut Milkshake",
                superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=COXTL7iq7E&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fbaileys-coffee-and-donut-milkshake&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fstatic%2F2016%2F21768%2Fbaileys-201610%2Fimages%2Fpins%2F1-3.jpg&description=As%20if%20a%20%40BaileysUS%20coffee%20milkshake%20wasn%E2%80%99t%20enough%2C%20this%20one%20is%20topped%20with%20a%20glazed%20doughnut%20ice-cream%20sandwich%20%E2%80%94%20via%20%40PureWow",
                gaTag: '',
            },
            {
                imageURLdesktop: "./images/granita-2.jpg",
                imageURLmobile: "./images/granita-2-mobile.jpg",
                imageTitle: "Baileys Coffee Granita",
                superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=COXTL7iq7E&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fbaileys-coffee-granita&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fstatic%2F2016%2F21768%2Fbaileys-201610%2Fimages%2Fpins%2F2-3.jpg&description=Set%20aside%20your%20iced%20coffee%20for%20a%20%40BaileysUS%20coffee%20granita.%20This%20%E2%80%9Cadult%E2%80%9D%20slushy%20is%20the%20perfect%20alternative%20to%20an%20after-dinner%20espresso%20%20%E2%80%94%20via%20%40PureWow",
                gaTag: '',
            },
            {
                imageURLdesktop: "./images/parfait-3.jpg",
                imageURLmobile:"./images/parfait-3-mobile.jpg",
                imageTitle: "Baileys Cookies and Cream Parfait",
                superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=COXTL7iq7E&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fbaileys-cookies-and-cream-parfait&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fstatic%2F2016%2F21768%2Fbaileys-201610%2Fimages%2Fpins%2F3-3.jpg&description=Say%20goodbye%20to%20yogurt%20and%20fruit%20parfaits%20and%20hello%20to%20this%20chocolatey%20layered%20concoction%20made%20with%20%40BaileysUS%20hot%20fudge%2C%20whipped%20cream%20and%20Oreo%20cookies%20crumbles%20%E2%80%94%20via%20%40PureWow",
                gaTag: '',
            },
            {
                imageURLdesktop: "./images/truffles-4.jpg",
                imageURLmobile: "./images/truffles-4-mobile.jpg",
                imageTitle: "Baileys Chocolate Truffles",
                superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=COXTL7iq7E&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fbaileys-chocolate-truffles&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fstatic%2F2016%2F21768%2Fbaileys-201610%2Fimages%2Fpins%2F4-3.jpg&description=Instead%20of%20baking%20the%20same%20old%20chocolatey%20desserts%20(ahem%2C%20cupcakes)%2C%20try%20something%20different.%20%40BaileysUS-infused%20truffles%2C%20perhaps%3F%20%20%E2%80%94%20via%20%40PureWow",
                gaTag: '',
            },
            {
                imageURLdesktop: "./images/affogato-5.jpg",
                imageURLmobile: "./images/affogato-5-mobile.jpg",
                imageTitle: "Baileys Affogato",
                superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=COXTL7iq7E&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fbaileys-affogato&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fstatic%2F2016%2F21768%2Fbaileys-201610%2Fimages%2Fpins%2F5-3.jpg&description=Create%20a%20crowd-pleasing%20dessert%20in%20under%20two%20minutes.%20Simply%20fill%20little%20glasses%20with%20a%20scoop%20of%20vanilla%20ice%20cream%2C%20then%20top%20them%20off%20with%20%40BaileysUS%20and%20freshly%20brewed%20espresso%20%E2%80%94%20via%20%40PureWow",
                gaTag: '',
            },
            {
                imageURLdesktop: "./images/chocolate-martini-6.jpg",
                imageURLmobile: "./images/chocolate-martini-6-mobile.jpg",
                imageTitle: "Baileys Chili Chocolate Martinis",
                superPin: "http://api.curalate.com/v1/superpin/email?campaign-id=COXTL7iq7E&url=http%3A%2F%2Fwww.purewow.com%2Frecipes%2Fbaileys-chili-chocolate-martinis&image-url=http%3A%2F%2Fprodstatics3azcdn1.purewow.com%2Fstatic%2F2016%2F21768%2Fbaileys-201610%2Fimages%2Fpins%2F6-3.jpg&description=You%20know%20how%20the%20saying%20goes%3A%20Sugar%20and%20spice%20makes%20everything%20nice.%20This%20chili%20chocolate%20martini%20crafted%20with%20%40BaileysUS%20is%20one%20part%20dessert%2C%20one%20part%20Happy%20Hour%20cocktail%20%E2%80%94%20via%20%40PureWow",
                gaTag: '',
            },
          ]
        };
