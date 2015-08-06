/**
 * Created by Administrator on 8/6/2015.
 */
angular.module('F1FeederApp.controllers', []).

    /* Drivers controller */
    controller('driversController', function($scope, ergastAPIservice) {
        $scope.nameFilter = null;
        $scope.driversList = [];
        $scope.searchFilter = function (driver) {
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
        };

        ergastAPIservice.getDrivers().success(function (response) {
            //Digging into the response to get the relevant data
            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
    }).

    /* Driver controller */
    controller('driverController', function($scope, $routeParams, ergastAPIservice) {
        $scope.id = $routeParams.id;
        $scope.races = [];
        $scope.driver = null;

        ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
            $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
        });

        ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
            $scope.races = response.MRData.RaceTable.Races;
        });
    });