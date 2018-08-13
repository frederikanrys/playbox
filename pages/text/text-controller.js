angular.module('playboxControllers').controller('TextController', ['$scope', 
	function($scope){
		
		$scope.name = "TextController";
		$scope.data = { text: ""};

		$scope.sayHello = function(text){

			$scope.data.text = text;
			text = "";
		};





	}
]);
