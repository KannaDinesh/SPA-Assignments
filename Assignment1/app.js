(function(){
	'use strict';
	
	angular.module('LunchCheck',[])
		   .controller('LunchCheckController',lunchchecker);

	lunchchecker.$inject = ['$scope'];

	function lunchchecker($scope){
		$scope.menu = "";
		$scope.check = function(){
			var splited = $scope.menu.split(',');
			var splited = splited.filter(function (menu) {
            return menu.trim().length > 0;
		})
			if($scope.menu == ""){
				$scope.result = "Please enter data first";
			}
			else if(splited.length < 4){
				$scope.result = "Enjoy!";
			}
			else{
				$scope.result = 'Too much!';
			}
		};
	};

})();