(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['product-row'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"cg-shop-item\">\n			<img src=\""
    + alias4(((helper = (helper = helpers.imageUrl || (depth0 != null ? depth0.imageUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.imageAlt || (depth0 != null ? depth0.imageAlt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageAlt","hash":{},"data":data}) : helper)))
    + "\" class=\"cg-shop-item-img\">\n			<h3 class=\"cg-shop-item-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h3>\n			<p class=\"cg-shop-item-copy\">"
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>	\n		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<!-- Product Row Partial -->\n<div class=\"row product-row\">\n	<h2 class=\"product-row-hed\">"
    + ((stack1 = ((helper = (helper = helpers.hed || (depth0 != null ? depth0.hed : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"hed","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n	<div class=\"cg-shop-items clearfix\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0["shop-items"] : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>		\n";
},"useData":true});
})();