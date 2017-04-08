angular.module("apsApp").controller("musicCtrl", function($scope, mainService){

$scope.album=mainService.apsAlbums;

// $scope.trax=mainService.apsAlbums[0].tracks;

});
