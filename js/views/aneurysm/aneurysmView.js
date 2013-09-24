define([
	'jquery',
  	'underscore',
  	'backbone',
  	'models/aneurysm/AneurysmModel',
  	'text!templates/aneurysmTemplate.html'
  	], function($, _, Backbone, AneurysmModel, aneurysmTemplate){
	
	var AneurysmView = Backbone.View.extend({
		el: $('#mainContainer'),
		render: function(){
			this.$el.html(aneurysmTemplate);
			var aneurysmModel = new AneurysmModel();

			$('#nameAneurysm').html(aneurysmModel.data.name);
			
			var content = "";
			var total = aneurysmModel.data.treatments.length;
			
			for(var i=0; i<total; i++){
				var data = aneurysmModel.data.treatments[i];
				content += '<b>' + data.display_name + ': </b> '+ data.description +'<br>';	
			}
			
			$('#contentAneurysm').html(content);
			
		}
	});

	return AneurysmView;
});