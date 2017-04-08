angular.module('apsApp').controller('albumCtrl', function($scope, mainService, $stateParams){

var albums=mainService.apsAlbums;

for (var i = 0; i < albums.length; i++) {
  if ( albums[i].title === parseInt($stateParams.title) ) {
    $scope.singleAlbum = albums[i];
  }
}

})
