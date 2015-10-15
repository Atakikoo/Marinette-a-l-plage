function homeController($scope, $location, locationService) {
  
  $scope.send = function(){
    $location.path('/info/' + $scope.data.location);
    locationService.recoverInfoLocation($scope.data.location).then(function(response){
      //SUCCESS
      console.log(response.data);
    }, function(){
      //ERROR
    })
  }

  
}
