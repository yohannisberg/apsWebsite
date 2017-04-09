angular.module("apsApp").controller("weatherCtrl", function($scope, mainService){


$scope.controlData=function(){
  mainService.forWeather().then(function(response){
    $scope.forHtml=response;
  })
}

$scope.controlData();

$scope.controlDataFahr=function(){
  mainService.forWeather().then(function(response){
    var fahr=(((response.main.temp)*9/5 - 459.67).toFixed(1));
    $scope.fahrForHtml=fahr;
  })
}

$scope.controlDataFahr();

});
