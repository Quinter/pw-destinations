(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['product'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "	<h4 class=\"ik-product-subhed\">"
    + ((stack1 = ((helper = (helper = helpers.subhed || (depth0 != null ? depth0.subhed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subhed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ik-product\">\n	<img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt=\"\" class=\"ik-product-img\">\n	<h3 class=\"ik-product-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subhed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"ik-product-price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n	\n	<a class=\"ik-buy-wrapper\" href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = ((helper = (helper = helpers["ga-tags"] || (depth0 != null ? depth0["ga-tags"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ga-tags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "target=\"_blank\">\n		<div class=\"ik-buy\">Buy Now</div>\n	</a>\n</div>";
},"useData":true});
})();