angular.module('playboxModule').directive('header', function() {
	
	return {
		restrict : 'A',
		templateUrl : "components/header/header.html",
        bindToController: true,
		controller : ['$scope', '$state', 'playboxConstants', function ($scope, $state, playboxConstants){

			$scope.name = "header";

            $scope.apps = [{
				name: "First",
				description: "First screen",
				id: playboxConstants.FIRST
			},
			{
				name: "Second",
				description: "Second screen",
				id: playboxConstants.SECOND
			}];

            $scope.switchApp = function(id){
	     		$state.go(id);
	     	};

            $scope.isActive = function(id){
	     		return $state.current === id;
	     	}

		}]
	}
});

