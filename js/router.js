define([
	'jquery', 
	'underscore', 
	'backbone', 
	'views/home/homeView',
	'views/aneurysm/aneurysmView'
	], 
	function($, _, Backbone, HomeView, AneurysmView){
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			'aneurysm' : 'aneurysmPage',			
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var router = new AppRouter();

		router.on('route:aneurysmPage', function(){
			var aneurysmView = new AneurysmView();
        	aneurysmView.render();
		});

		router.on('route:defaultAction', function(){
			var homeView = new HomeView();
			homeView.render();
		});

		Backbone.history.start();
	};
	return{
		initialize: initialize
	};
	
});