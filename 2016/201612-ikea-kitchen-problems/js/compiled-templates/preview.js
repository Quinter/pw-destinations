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