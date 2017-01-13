(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['shares'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<!-- Twitter and Pinterest Share Buttons -->\n<div class=\"cg-social-shares\">\n	<div class=\"share-icon "
    + alias3((helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1["class"] : stack1),767,{"name":"populateResponsiveValue","hash":{},"data":data}))
    + "\" data-href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.popupLink : stack1), depth0))
    + "\" "
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.twitter : depth0)) != null ? stack1.shareGATags : stack1), depth0)) != null ? stack1 : "")
    + "></div>\n	<div class=\"share-icon "
    + alias3((helpers.populateResponsiveValue || (depth0 && depth0.populateResponsiveValue) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.pinterest : depth0)) != null ? stack1["class"] : stack1),767,{"name":"populateResponsiveValue","hash":{},"data":data}))
    + "\" data-href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.pinterest : depth0)) != null ? stack1.popupLink : stack1), depth0))
    + "\" "
    + ((stack1 = alias4(((stack1 = (depth0 != null ? depth0.pinterest : depth0)) != null ? stack1.shareGATags : stack1), depth0)) != null ? stack1 : "")
    + "></div>\n</div>\n";
},"useData":true});
})();