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

			/* Adding listener to the button Add New */
			$('#addTreatment').click(function(){
				var newItem = aneurysmModel.addNewTreatment();
				
				$('#contentAneurysm').html(newItem); //Updating the content after to add a new item
			});

			$('#nameAneurysm').html(aneurysmModel.get('name'));
			
			/* Showing the Treatments */
			var treatments = aneurysmModel.showTreatments();			
			$('#contentAneurysm').html(treatments);	
			
		},
		events:{
			'click #contentAneurysm a':'updateItem'
		},
		updateItem: function(button){
			var aneurysmModel = new AneurysmModel();			
			var index = $(button.currentTarget).attr('id'); //Getting the position of the element selected			
			
			var updatedItem = aneurysmModel.editTreatment(index); //Call to method for the updating item
			
			$('#contentAneurysm').html(updatedItem); //Updating the content after to edit a new item
		}
	});

	return AneurysmView;
});