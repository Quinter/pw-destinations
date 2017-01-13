(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['char'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<!-- Influencer Name + Title -->\n<div class=\"char-text "
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-char-text\">\n	<hr class=\""
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-topbar\">\n	<h3 class=\"char-name "
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-char-name\">"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.charContainer : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "</h3>\n	<h4 class=\"char-title "
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-char-title\">"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.charContainer : depth0)) != null ? stack1.title : stack1), depth0)) != null ? stack1 : "")
    + "</h4>\n</div>	\n";
},"useData":true});
})();