var containerApp = angular.module("containerApp", ["ngRoute", "ngResource", "ngSanitize"]);


//ROUTES
containerApp.config(function ($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: 'pages/first_window.html',
		controller: 'firstController'
	})

	.when('/a', {
		templateUrl: 'pages/a.html',
		controller: 'spaceController'
	})

	.when('/b', {
		templateUrl: 'pages/b.html',
		controller: 'spaceController'
	})

	.when('/c', {
		templateUrl: 'pages/c.html',
		controller: 'spaceController'
	})

	.when('/d', {
		templateUrl: 'pages/d.html',
		controller: 'spaceController'
	});

});

//DIRECTIVES

containerApp.directive('back',function(){
	return {
		restrict:'AECM',
		templateUrl:'directives/back.html',
		replace:true
	}
})


//SERVICES

containerApp.service('volumeService', function(){
	
	this.itemsVolume = "";

});

containerApp.service('qtyService',function(){
	this.itemsQty = "";
});

//CONTROLLERS

containerApp.controller("tableController", ['$scope','$filter','volumeService','qtyService', function($scope, $filter, volumeService, qtyService){

//	$scope.totalVolume = volumeService.itemsVolume; 

	/*$scope.$watch( 'itemsVolume', function( newValue, oldValue) {
		volumeService.itemsVolume =  $scope.totalVolume;
	});*/

//	$scope.totalQty = qtyService.itemsQty;

	/*$scope.$watch('itemsQty',function( newValue, oldValue ) {
		qtyService.itemsQty = $scope.totalQty;
	})*/
	
}]);

containerApp.controller("firstController", ['$scope','$filter','volumeService', function($scope, $filter, volumeService){

	

}]);

containerApp.controller("spaceController", ['$scope','$filter','volumeService', function($scope, $filter, volumeService){

	$scope.width = volumeService.itemsVolume;

	/*$scope.$watch( 'itemsVolume', function( newValue, oldValue) {
		volumeService.itemsVolume =  $scope.width;
	});*/

	console.log("width", volumeService.itemsVolume)


}]);


