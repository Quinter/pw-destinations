(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['diagonal-text-row'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- Diagonal Text Row Partial -->\n<div class=\"row diagonal-text-row\">\n	<div class=\"full-image-container\">\n		<img class=\"hidden-xs\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.imageContainer : depth0)) != null ? stack1.images : stack1)) != null ? stack1.desktop : stack1), depth0))
    + "\">\n		<img class=\"hidden-sm hidden-md hidden-lg\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.imageContainer : depth0)) != null ? stack1.images : stack1)) != null ? stack1.mobile : stack1), depth0))
    + "\">\n	</div>\n\n	<div class=\"overlay\">\n		<!-- Quote Text Column -->\n		<div class=\"hidden-xs col-sm-6\">\n"
    + ((stack1 = container.invokePartial(partials.text,depth0,{"name":"text","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</div>\n\n		<!-- Character Info Column -->\n		<div class=\"col-xs-12 col-sm-6\">\n"
    + ((stack1 = container.invokePartial(partials["char"],depth0,{"name":"char","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</div>\n\n	</div>\n\n	<div class=\"cg-photo-credit\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.imageContainer : depth0)) != null ? stack1.credit : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n\n</div>\n\n"
    + ((stack1 = container.invokePartial(partials["mobile-text"],depth0,{"name":"mobile-text","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();