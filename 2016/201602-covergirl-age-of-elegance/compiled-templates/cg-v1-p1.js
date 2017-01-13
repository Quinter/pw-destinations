(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cg-v1-p1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- Age of Elegance V1.0 Phase 1 -->\n"
    + ((stack1 = container.invokePartial(partials["video-row"],(depth0 != null ? depth0["video-row"] : depth0),{"name":"video-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["split-row"],(depth0 != null ? depth0["split-row-1"] : depth0),{"name":"split-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["diagonal-text-row"],(depth0 != null ? depth0["diagonal-text-row"] : depth0),{"name":"diagonal-text-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["vertical-text-row"],(depth0 != null ? depth0["vertical-text-row"] : depth0),{"name":"vertical-text-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["split-row"],(depth0 != null ? depth0["split-row-2"] : depth0),{"name":"split-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();