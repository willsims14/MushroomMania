"use strict";

app.controller("listCtrl", function($scope, $location, $http){
	$scope.mushrooms = [];



	$http({
		method: "GET",
		url: "mushrooms.json"
	}).then( function(shrooms){

		


		for(var i = 0; i < shrooms.data.mushrooms.length; i++){
			var name = Object.keys(shrooms.data.mushrooms[i]);
			var info = Object.values(shrooms.data.mushrooms[i]);



			var newShroom = {
				name: name[0],
				description: info[0].description,
				edibleBool: info[0].edible ? true : false,
				edible: 	info[0].edible ? "Edible" : "Not Edible"
			};

			console.log("New Shroom: ", newShroom);

			$scope.mushrooms.push(newShroom);
		}
	});






});