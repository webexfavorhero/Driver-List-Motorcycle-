'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('F1FeederApp', [
    'F1FeederApp.controllers',
    'F1FeederApp.services',
    'ngRoute'
]).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
            when("/drivers/:id", {templateUrl: "partials/driver.html", controller: "driverController"}).
            otherwise({redirectTo: '/drivers'});
    }]);