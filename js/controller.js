'use strict';

var NutrizoiApp = angular.module('NutrizoiApp', ['ngRoute', 'ngResource']);

 NutrizoiApp.config(function($routeProvider) {
	
	
	$routeProvider
	.when('/',{
		templateUrl:'template/main.html',
		controller:'NutrizoiAppCtrl'
	})
	.when('/list',{
		templateUrl:'template/results.html',
		controller:'NutrizoiAppCtrl'
	})
	.when('/nolist',{
		templateUrl:'template/no_results.html',
		controller:'NutrizoiAppCtrl'
	})	
  .otherwise({
		redirectTo:'/'
	})
});   
    

NutrizoiApp.controller('NutrizoiAppCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

$rootScope.ingredient = '';

$scope.array = ['ghfhgf', 'jghjfhgfhg'];

$scope.resultArray = [ 'Hamburger light', 'Hamburger black', 'Cola', 'Fanta', 'Hamburger with cola', 'Big Hamburger' ];

$scope.count = $scope.resultArray.length;

$scope.searchMain = function(ingredient) {
 
 $rootScope.ingredient = ingredient;

 $scope.array.push(ingredient);
 console.log($scope.array);

 window.location.hash = 'list';
}

console.log($rootScope.ingredient);
}]);






















