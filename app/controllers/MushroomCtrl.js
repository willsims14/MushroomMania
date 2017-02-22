"use strict";

app.controller("MushroomCtrl", function($scope, $location){
	$scope.mushrooms = [];
	$scope.showPoison = true;
	$scope.showNoPoison = true;

	$scope.setPoison = function(){
		$scope.showPoison = true;
		$scope.showNoPoison = false;

		// console.log("Edible? ", $scope.shroomEdible);

	};

	$scope.setNotPoison = function(){
		$scope.showNoPoison = true;
		$scope.showPoison = false;

		// console.log("Edible? ", $scope.shroomEdible);
	};

});