function homeController($scope, $location) {
  
  $scope.send = function(){
    $location.path('/info/' + $scope.data.location);
  }

//   $scope.map = function() {
//     $location.path('/map');
//   }
   }
