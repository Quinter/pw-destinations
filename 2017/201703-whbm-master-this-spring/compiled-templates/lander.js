(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['lander'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div class=\"whbm-lander\">\n	<div class=\"whbm-lander-overlay\">\n		<h1 class=\"whbm-lander-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h1>\n		<div class=\"script-flair\">"
    + ((stack1 = ((helper = (helper = helpers["script-flair"] || (depth0 != null ? depth0["script-flair"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"script-flair","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n		<p class=\"whbm-lander-subhed\">"
    + ((stack1 = ((helper = (helper = helpers.subhed || (depth0 != null ? depth0.subhed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subhed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n		<div class=\"icon-thin-arrow whbm-cta-stacked\" "
    + ((stack1 = (helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,(depth0 != null ? depth0["ga-tags"] : depth0),767,{"name":"populateResponsiveValue","hash":{},"data":data})) != null ? stack1 : "")
    + " ></div>\n	</div>\n</div>";
},"useData":true});
})();