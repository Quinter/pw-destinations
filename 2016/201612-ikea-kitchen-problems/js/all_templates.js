(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['detail'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "	<div class=\"ik-intro\">\n		<div class=\"col col-img col-1-2\">\n			<img class=\"ik-intro-img\" src="
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + " alt=\"\">\n		</div>\n\n		<div class=\"col col-text col-1-2\">\n			<h2 class=\"ik-intro-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n			<p class=\"ik-intro-copy\">"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n		</div>\n	</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "	<div class=\"ik-products\">\n		<h1 class=\"ik-products-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n\n		<div class=\"ik-products-wrapper\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n\n	</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.product,depth0,{"name":"product","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"ik-detail\" data-grid-id="
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n	<!-- Mobile Colorblock -->\n	<div class=\"ik-colorblock\"></div>\n\n	<!-- Intro (Image + Copy) -->\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.intro : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	\n	<!-- Products -->\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0["products-content"] : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<!-- Close Icon -->\n	<div class=\"ik-detail-closer\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"popup_close_button\">\n		<span class=\"icon-close-icon ik-close-icon\"></span>\n	</div>\n</div>";
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ik-root'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.lander,(depth0 != null ? depth0.lander : depth0),{"name":"lander","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["main-content"],(depth0 != null ? depth0.main : depth0),{"name":"main-content","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['lander'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"ik-lander\">\n	<div class=\"ik-lander-overlay\">\n		<h1 class=\"ik-lander-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n		<div class=\"script-flair\">"
    + ((stack1 = ((helper = (helper = helpers["script-flair"] || (depth0 != null ? depth0["script-flair"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"script-flair","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n		<p class=\"ik-lander-subhed\">"
    + ((stack1 = ((helper = (helper = helpers.subhed || (depth0 != null ? depth0.subhed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subhed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n		<div class=\"icon-thin-arrow ik-cta-stacked\" "
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

  return "<!-- Main Content (Grid on Desktop, Stacking/Snapping Slides on Mobile) -->\n<div class=\"ik-main-content\">\n	<!-- Previews -->\n	<div class=\"ik-previews\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.previews : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<!-- Expanded Details -->\n	<div class=\"ik-details\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<!-- Prev/Next Buttons -->\n		<!-- might need to manually add GA tags here -->\n		<div class=\"ik-nav\">\n			<div class=\"ik-nav-btn ik-prev\" data-direction=\"prev\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"ikea_nav_prev\">\n				<span class=\"ik-nav-icon icon-slideshow-arrow-left\"></span> Previous\n			</div>\n\n			<div class=\"ik-nav-btn ik-next\" data-direction=\"next\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"ikea_nav_next\">\n				Next Solution <span class=\"ik-nav-icon icon-slideshow-arrow\"></span>\n			</div>\n		</div>\n\n	</div>\n</div> ";
},"usePartial":true,"useData":true});
})();
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['preview'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"ik-preview\" data-preview-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">\n	<img class=\"ik-preview-img\" src="
    + alias4((helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,(depth0 != null ? depth0.image : depth0),767,{"name":"populateResponsiveValue","hash":{},"data":data}))
    + " alt=\"\">\n	\n	<div class=\"ik-preview-overlay\">\n		<div class=\"ik-preview-txt\">\n			<h2 class=\"ik-preview-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n\n			<div class=\"ik-preview-cta\" "
    + ((stack1 = ((helper = (helper = helpers["ga-tags"] || (depth0 != null ? depth0["ga-tags"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ga-tags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " >\n				<span class=\"text-cta\">"
    + alias4(((helper = (helper = helpers.cta || (depth0 != null ? depth0.cta : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cta","hash":{},"data":data}) : helper)))
    + "</span>\n				<span class=\"icon-thin-arrow ik-arrow-icon only-mobile\"></span>\n			</div>\n		</div>\n	</div>\n</div>";
},"useData":true});
})();
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