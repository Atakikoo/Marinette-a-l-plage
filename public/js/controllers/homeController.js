function homeController($scope, $location) {
  
  $scope.send = function(){
    $location.path('/info/' + $scope.data.location);
  }

  
}
