app
	.directive('animauxDirective', function() {
		return {
			template: '<p><strong>Classe : </strong><em>{{animal.classe}}</em><br/><strong>Ordre : </strong><em>{{animal.ordre}}</em><br/><strong>Famille : </strong><em>{{animal.famille}}</em><br/></p>'
		};
	})
	.directive('formulaireDirective', function() {
		return {
			restrict: 'EA',
	        replace: true,
	        transclude: true,
	        scope: false,
	        template: '<form name="formulaire" class="formulaire" ng-submit="envoi()" novalidate>'
	        + '<label for="nom">Nom : </label>'
			+ '<input name="nom" type="text" ng-model="objet.nom" ng-click="submitted=false"/>'
			+ '<span class="text-danger" ng-show="submitted && information.nom">{{information.nom}}<br/></span>'
			+ '<label for="classe">Classe : </label>'
			+ '<input name="classe" type="text" ng-model="objet.classe" ng-click="submitted=false"/>'
			+ '<span class="text-danger" ng-show="submitted && information.classe">{{information.classe}}<br/></span>'
			+ '<label for="ordre">Ordre : </label>'
			+ '<input name="ordre" type="text" ng-model="objet.ordre" ng-click="submitted=false"/>'
			+ '<span class="text-danger" ng-show="submitted && information.ordre">{{information.ordre}}<br/></span>'
			+ '<label for="famille">Famille : </label>'
			+ '<input name="famille" type="text" ng-model="objet.famille" ng-click="submitted=false"/>'
			+ '<span class="text-danger" ng-show="submitted && information.famille">{{information.famille}}<br/></span>'
			+ '<br/><br/>'
			+ '<input type="submit" ng-click="submitted=true" value="Valider"/>'
			+ '<br/>'
	        + '</form>'
		};
	})
;