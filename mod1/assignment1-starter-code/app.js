angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
    $scope.name = "Mike";

    $scope.mikeOk = function () {
        return "Mike ok!";
    }

}