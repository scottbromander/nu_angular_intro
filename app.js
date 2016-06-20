
var myApp = angular.module("myApp", []);

myApp.controller("BatmanController", ["$scope", function($scope){
    var fruitBats = "Something awesome!";
    $scope.cats = "MoMo";
    $scope.dogs = "Fluffy";

    $scope.clickyFunction = function () {
        console.log("Something clicked!");
    }


}]);
