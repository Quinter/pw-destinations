(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['detail'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "	<div class=\"whbm-intro\">\n		<div class=\"col col-img col-1-2\">\n			<img class=\"whbm-intro-img\" src="
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt=\"\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["credit-link"] : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n\n		<div class=\"col col-text col-1-2\">\n			<h1 class=\"whbm-intro-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n			<h2 class=\"whbm-intro-subhed\">"
    + ((stack1 = ((helper = (helper = helpers.subhed || (depth0 != null ? depth0.subhed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subhed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n			<p class=\"whbm-intro-copy\">"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n			<p class=\"whbm-intro-copy\">"
    + ((stack1 = ((helper = (helper = helpers["copy-two"] || (depth0 != null ? depth0["copy-two"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy-two","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["credit-link"] : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "			</p>\n		</div>\n	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<a class=\"whbm-credit-link\" href="
    + alias4(((helper = (helper = helpers["credit-link"] || (depth0 != null ? depth0["credit-link"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"credit-link","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = ((helper = (helper = helpers["credit-ga-tags"] || (depth0 != null ? depth0["credit-ga-tags"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"credit-ga-tags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " target=\"_blank\">"
    + alias4(((helper = (helper = helpers["credit-text"] || (depth0 != null ? depth0["credit-text"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"credit-text","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<p class=\"whbm-credit\">"
    + container.escapeExpression(((helper = (helper = helpers["photo-credit"] || (depth0 != null ? depth0["photo-credit"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"photo-credit","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<p class=\"whbm-credit-mobile\">"
    + container.escapeExpression(((helper = (helper = helpers["photo-credit"] || (depth0 != null ? depth0["photo-credit"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"photo-credit","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "	<div class=\"whbm-products\">\n		<h1 class=\"whbm-products-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n\n		<div class=\"whbm-products-wrapper\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n\n	</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.product,depth0,{"name":"product","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"whbm-detail\" data-grid-id="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n	<!-- Mobile Colorblock -->\n	<div class=\"whbm-colorblock\"></div>\n\n	<!-- Intro (Image + Copy) -->\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.intro : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	\n	<!-- Products -->\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0["products-content"] : depth0),{"name":"with","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<!-- Close Icon -->\n	<div class=\"whbm-detail-closer\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"popup_close_button\">\n		<span class=\"icon-close-icon whbm-close-icon\"></span>\n	</div>\n</div>";
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['lander'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"whbm-lander\">\n	<div class=\"whbm-lander-overlay\">\n		<h1 class=\"whbm-lander-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n		<h2 class=\"whbm-lander-subhed\">"
    + ((stack1 = ((helper = (helper = helpers.subhed || (depth0 != null ? depth0.subhed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subhed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n		<div class=\"icon-thin-arrow whbm-cta-stacked\" "
    + ((stack1 = (helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,(depth0 != null ? depth0["ga-tags"] : depth0),767,{"name":"populateResponsiveValue","hash":{},"data":data})) != null ? stack1 : "")
    + " ></div>\n	</div>\n</div>";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['main-content'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.preview,depth0,{"name":"preview","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.detail,depth0,{"name":"detail","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<!-- Main Content (Grid on Desktop, Stacking/Snapping Slides on Mobile) -->\n<div class=\"whbm-main-content\">\n	<!-- Previews -->\n	<div class=\"whbm-previews\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.previews : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<!-- Expanded Details -->\n	<div class=\"whbm-details\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n</div> ";
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['preview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"whbm-preview\" data-preview-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n	<img class=\"whbm-preview-img\" src="
    + alias4((helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,(depth0 != null ? depth0.image : depth0),767,{"name":"populateResponsiveValue","hash":{},"data":data}))
    + " alt=\"\">\n	\n	<div class=\"whbm-preview-overlay\">\n		<div class=\"whbm-preview-txt\">\n			<h2 class=\"whbm-preview-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n\n			<div class=\"whbm-preview-cta\" "
    + ((stack1 = ((helper = (helper = helpers["ga-tags"] || (depth0 != null ? depth0["ga-tags"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ga-tags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " >\n				<span class=\"icon-thin-arrow whbm-arrow-icon only-mobile\"></span>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['product'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "	<h4 class=\"whbm-product-subhed\">"
    + ((stack1 = ((helper = (helper = helpers.subhed || (depth0 != null ? depth0.subhed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"subhed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"whbm-product\">\n	<img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt=\"\" class=\"whbm-product-img\">\n	<h3 class=\"whbm-product-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subhed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"whbm-product-price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n	\n	<a class=\"whbm-buy-wrapper\" href="
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = ((helper = (helper = helpers["ga-tags"] || (depth0 != null ? depth0["ga-tags"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ga-tags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "target=\"_blank\">\n		<div class=\"whbm-buy\">Buy Now</div>\n	</a>\n</div>";
},"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['whbm-root'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.lander,(depth0 != null ? depth0.lander : depth0),{"name":"lander","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["main-content"],(depth0 != null ? depth0.main : depth0),{"name":"main-content","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();