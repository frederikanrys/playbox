angular.module('playboxDirectives').directive('header', function() {
	
	return {
		restrict : 'A',
		scope : {},
		templateUrl : "components/header/header.html",
		controller : ['$scope', '$location', function ($scope, $location){
			$scope.name = "header";

			$scope.apps = [{
				name: "Text app",
				description: "A simple app manipulating text",
				url: "/text"
			},
			{
				name: "Phone app",
				description: "A stupid app displaying some data",
				url: "/phone"
			}];

			$scope.switchApp = function(name){
	     		$location.path(name);
	     	};

			$scope.isActive = function(path){
	     		return $location.path() === path;
	     	};

		}]
	}
});

