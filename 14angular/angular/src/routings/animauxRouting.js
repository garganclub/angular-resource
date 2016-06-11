app.config(function($routeProvider) {
	$routeProvider
		.when('/animaux', {
			controller: 'animauxList',
			templateUrl: 'angular/src/views/animaux/list.html'
		})
		.when('/animaux/id/:id', {
			controller: 'animauxShow',
			templateUrl: 'angular/src/views/animaux/show.html'
		})
		.when('/animaux/new', {
			controller: 'animauxNew',
			templateUrl: 'angular/src/views/animaux/new.html'
		})
		.when('/animaux/edit/:id', {
			controller: 'animauxEdit',
			templateUrl: 'angular/src/views/animaux/edit.html'
		})
		.when('/animaux/delete/:id', {
			controller: 'animauxDelete',
			templateUrl: 'angular/src/views/animaux/delete.html'
		})
	;
});