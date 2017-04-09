angular.module("apsApp").controller("showsCtrl", function($scope, mainService){

  $scope.forHtml=mainService.apsShows;

});
