(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['text'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<!-- Mobile Influencer Text + Quotes -->\n<div class=\"text-container "
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-text-container\">\n	<h3 class=\"text-title "
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-text-title\">"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.textContainer : depth0)) != null ? stack1.hed : stack1), depth0)) != null ? stack1 : "")
    + "</h3>\n	<p class=\"text-quote "
    + alias4(((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prefix","hash":{},"data":data}) : helper)))
    + "-text-quote\">"
    + ((stack1 = alias5(((stack1 = (depth0 != null ? depth0.textContainer : depth0)) != null ? stack1.copy : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n"
    + ((stack1 = container.invokePartial(partials.shares,(depth0 != null ? depth0.sharesContainer : depth0),{"name":"shares","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
})();