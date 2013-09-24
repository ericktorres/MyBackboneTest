define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/homeTemplate.html'
	], function($, _, Backbone, homeTemplate){

	var homeView = Backbone.View.extend({
		el: $('#mainContainer'),
		render: function(){
			this.$el.html(homeTemplate);
		}
	});

	return homeView;
});