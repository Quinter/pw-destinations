(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['main-content'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.preview,depth0,{"name":"preview","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.detail,depth0,{"name":"detail","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<!-- Main Content (Grid on Desktop, Stacking/Snapping Slides on Mobile) -->\n<div class=\"whbm-main-content\">\n	<!-- Previews -->\n	<div class=\"whbm-previews\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.previews : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<!-- Expanded Details -->\n	<div class=\"whbm-details\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.details : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<!-- Prev/Next Buttons -->\n		<!-- might need to manually add GA tags here -->\n		<div class=\"whbm-nav\">\n			<div class=\"whbm-nav-btn whbm-prev\" data-direction=\"prev\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"ikea_nav_prev\">\n				<span class=\"whbm-nav-icon icon-slideshow-arrow-left\"></span> Previous\n			</div>\n\n			<div class=\"whbm-nav-btn whbm-next\" data-direction=\"next\" data-gae-track=\"event\" data-gae-category=\"destination\" data-gae-action=\"click\" data-gae-label=\"ikea_nav_next\">\n				Next Solution <span class=\"whbm-nav-icon icon-slideshow-arrow\"></span>\n			</div>\n		</div>\n\n	</div>\n</div> ";
},"usePartial":true,"useData":true});
})();