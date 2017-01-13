(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['split-row-bg'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<a href=\""
    + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" "
    + ((stack1 = ((helper = (helper = helpers.imageLinkGATags || (depth0 != null ? depth0.imageLinkGATags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLinkGATags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ">\n				<img src=\""
    + alias4((helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,(depth0 != null ? depth0.images : depth0),991,{"name":"populateResponsiveValue","hash":{},"data":data}))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.imageAlt || (depth0 != null ? depth0.imageAlt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageAlt","hash":{},"data":data}) : helper)))
    + "\" class=\"split-row-bg-img\">\n			</a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "				<h2 class=\"split-row-bg-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sponsored : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<p class=\"split-row-bg-copy\">"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n				<a class=\"split-row-bg-shop\" href=\""
    + alias4(((helper = (helper = helpers.shopLink || (depth0 != null ? depth0.shopLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shopLink","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" "
    + ((stack1 = ((helper = (helper = helpers.shopLinkGATags || (depth0 != null ? depth0.shopLinkGATags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shopLinkGATags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ">"
    + alias4(((helper = (helper = helpers.shopLinkText || (depth0 != null ? depth0.shopLinkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"shopLinkText","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<h3 class=\"split-row-bg-sponsored\">"
    + container.escapeExpression(((helper = (helper = helpers.sponsored || (depth0 != null ? depth0.sponsored : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sponsored","hash":{},"data":data}) : helper)))
    + "</h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- Split Row (w/ Background) Partial -->\n<div class=\"row split-row-bg\">\n\n	<img src=\""
    + alias4(((helper = (helper = helpers.backgroundImage || (depth0 != null ? depth0.backgroundImage : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backgroundImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.backgroundImageAlt || (depth0 != null ? depth0.backgroundImageAlt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backgroundImageAlt","hash":{},"data":data}) : helper)))
    + "\" class=\"split-row-bg-main-img\">\n\n	<div class=\"split-row-bg-overlay\">\n		<div class=\"col-xs-12 col-sm-6\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.imageColumn : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n\n		<div class=\"col-xs-12 col-sm-6 split-row-bg-col-content\">\n			<div class=\"split-row-bg-content\">\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.textColumn : depth0),{"name":"with","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();