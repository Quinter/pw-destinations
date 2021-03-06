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