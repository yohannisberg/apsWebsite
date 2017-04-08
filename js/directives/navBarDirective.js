angular.module('apsApp')
.directive('navBarDirective', function() {

  return {
    restrict: 'E',
    templateUrl: './views/navBar.html',
    link: function(scope){
      scope.showDropdown=function(){
        if(scope.showList){
          scope.showList=false;
          scope.overlay=false;
        }
        else{
          scope.showList=true;
          scope.overlay=true;
        }
      }
    }
  }

})
