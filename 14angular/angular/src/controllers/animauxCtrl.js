//var url = 'http://localhost:8888/rest27/web/api/animaux';
var url = 'http://92.222.68.175/rest27/web/app.php/api/animaux';
app
	.controller('animauxList', function($scope, $resource) {
		var Animal = $resource(url);
		$scope.animaux = Animal.query();
		$scope.filtreClasses = 'Aucun';
		$scope.filtre = function() {
			if($scope.filtreClasses == 'Aucun') {
				$scope.animaux = Animal.query();
			}
			else {
				var AnimalFiltre = $resource(url +'?classe=:valeur');
				$scope.animaux = AnimalFiltre.query({valeur: $scope.filtreClasses});
			}
		}
	})
	.controller('animauxShow', function($scope, $routeParams, $resource) {
		var Animal = $resource(url +'/:id');
		$scope.animal = Animal.get({id:$routeParams.id});
	})
	.controller('animauxNew', function($scope, $resource) {
		var Animal = $resource(url);
		$scope.objet = {};
		$scope.information = {};
		$scope.envoi = function() {
			$scope.information.nom = false;
			$scope.information.classe = false;
			$scope.information.ordre = false;
			$scope.information.famille = false;
  			var animal = Animal.save(null, $scope.objet, function() {
				window.location.href = '#/animaux';
			},
			function(error) {
				var erreurs = error['data']['error']['commentaire'];
			    var tableauErreurs = JSON.parse(erreurs);
			    if(tableauErreurs['nom'] != '') {
			    	$scope.information.nom = tableauErreurs['nom'];
			    }
			    else {
			    	$scope.information.nom = false;
			    }
			    if(tableauErreurs['classe'] != '') {
			    	$scope.information.classe = tableauErreurs['classe'];
			    }
			    else {
			    	$scope.information.classe = false;
			    }
			    if(tableauErreurs['ordre'] != '') {
			    	$scope.information.ordre = tableauErreurs['ordre'];
			    }
			    else {
			    	$scope.information.ordre = false;
			    }
			    if(tableauErreurs['famille'] != '') {
			    	$scope.information.famille = tableauErreurs['famille'];
			    }
			    else {
			    	$scope.information.famille = false;
			    }
			});
		};
	})
	.controller('animauxEdit', function($scope, $routeParams, $resource) {
		var Animal = $resource(url +'/:id', null, {
			'put': {method: 'PUT', params: {id:$routeParams.id}}
		});
		$scope.objet = Animal.get({id:$routeParams.id});
		$scope.information = {};
		$scope.envoi = function() {
			$scope.information.nom = false;
			$scope.information.classe = false;
			$scope.information.ordre = false;
			$scope.information.famille = false;
			var animal = Animal.put(null, $scope.objet, function() {
				window.location.href = '#/animaux';
			},
			function(error) {
				var erreurs = error['data']['error']['commentaire'];
			    var tableauErreurs = JSON.parse(erreurs);
			    if(tableauErreurs['nom'] != '') {
			    	$scope.information.nom = tableauErreurs['nom'];
			    }
			    else {
			    	$scope.information.nom = false;
			    }
			    if(tableauErreurs['classe'] != '') {
			    	$scope.information.classe = tableauErreurs['classe'];
			    }
			    else {
			    	$scope.information.classe = false;
			    }
			    if(tableauErreurs['ordre'] != '') {
			    	$scope.information.ordre = tableauErreurs['ordre'];
			    }
			    else {
			    	$scope.information.ordre = false;
			    }
			    if(tableauErreurs['famille'] != '') {
			    	$scope.information.famille = tableauErreurs['famille'];
			    }
			    else {
			    	$scope.information.famille = false;
			    }
			});
		};
		$scope.removelPost = function() {
			window.location.href = '#/animaux/delete/'+ $routeParams.id;
		};
	})
	.controller('animauxDelete', function($scope, $routeParams, $resource) {
		var Animal = $resource(url +'/:id', null, {
			'delete': {method: 'DELETE', params: {id:$routeParams.id}}
		});
		$scope.animal = Animal.get({id:$routeParams.id});
		$scope.deletePost = function() {
			var animal = Animal.delete(null, $scope.animal, function() {
				window.location.href = '#/animaux';
			});
		};
		$scope.cancelPost = function() {
			window.location.href = '#/animaux';
		};
	})
;