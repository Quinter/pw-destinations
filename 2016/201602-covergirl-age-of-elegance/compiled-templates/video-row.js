(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['video-row'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0["video-overlay"] : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"overlay video-overlay "
    + alias4(((helper = (helper = helpers.selector || (depth0 != null ? depth0.selector : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selector","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias4(((helper = (helper = helpers.selector || (depth0 != null ? depth0.selector : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"selector","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = ((helper = (helper = helpers["ga-tags"] || (depth0 != null ? depth0["ga-tags"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ga-tags","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ">\n			<div class=\"video-play-container\">\n				<span class=\"icon-play-button-outlined video-play\"></span>\n			</div>\n		</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"row video-mobile-row video-mobile-row-v2 hidden-sm hidden-md hidden-lg\">\n	<div class=\"char-text video-char-text\">\n		<p class=\"video-quote\">"
    + ((stack1 = ((helper = (helper = helpers.quote || (depth0 != null ? depth0.quote : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quote","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n	</div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<!-- Video Row Partial -->\n<div class=\"row video-mobile-row video-mobile-row-v2 hidden-sm hidden-md hidden-lg\">\n"
    + ((stack1 = container.invokePartial(partials["char"],depth0,{"name":"char","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"row video-row video-row-v2\">\n	<div class=\"hidden-xs col-sm-12 cg-first-video-text\">\n"
    + ((stack1 = container.invokePartial(partials["char"],depth0,{"name":"char","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "	</div>\n	\n	<div class=\"col-xs-12\">\n		<div class=\"cg-video-holder\">\n			<iframe id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"vimeo\" src=\""
    + alias4(((helper = (helper = helpers.videoLink || (depth0 != null ? depth0.videoLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"videoLink","hash":{},"data":data}) : helper)))
    + "\" width=\"100%\" height=\"100%\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \n		</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["video-overlay"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	</div>\n</div>	\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.quote : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();