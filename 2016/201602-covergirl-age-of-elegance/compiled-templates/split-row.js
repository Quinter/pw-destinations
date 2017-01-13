(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['split-row'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n		<div class=\"cg-photo-credit\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.creditLink : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "		</div>\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "		<a href=\""
    + container.escapeExpression(((helper = (helper = helpers.creditLink || (depth0 != null ? depth0.creditLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creditLink","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = ((helper = (helper = helpers.creditGATags || (depth0 != null ? depth0.creditGATags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"creditGATags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " target=\"_blank\">"
    + ((stack1 = ((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"credit","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		"
    + ((stack1 = ((helper = (helper = helpers.credit || (depth0 != null ? depth0.credit : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"credit","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- Split Row Partial -->\n<div class=\"row split-row\">\n	<!-- Image Column -->\n	<div class=\"col-xs-12 col-sm-6\">\n		<div class=\"split-image-container\">\n			<img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.imageContainer : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.charContainer : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">\n		</div>\n\n		<div class=\"overlay\">\n"
    + ((stack1 = container.invokePartial(partials["char"],depth0,{"name":"char","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</div>\n\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.imageContainer : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<!-- Text Column -->\n	<div class=\"col-xs-12 col-sm-6\">\n"
    + ((stack1 = container.invokePartial(partials.text,depth0,{"name":"text","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</div>\n\n</div>";
},"usePartial":true,"useData":true});
})();