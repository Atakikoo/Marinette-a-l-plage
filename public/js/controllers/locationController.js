function locationController($scope, $routeParams, locationService){
	$scope.plage = $routeParams.plage;

	var data = {};

	locationService.recoverInfoLocation($scope.plage).then(function(response){
      //SUCCESS
      data = response.data;
      $scope.icone = data.weather[0].icon;
      $scope.temp = Math.round(data.main.temp);
      $scope.name = data.name;
      console.log(response.data);

      var myLatLng = {lat: data.coord.lat, lng: data.coord.lon};

	  // Create a map object and specify the DOM element for display.
	  var map = new google.maps.Map(document.getElementById('googleMap'), {
	    center: myLatLng,
	    scrollwheel: false,
	    zoom: 10
	  });

	  // Create a marker and set its position.
	  var marker = new google.maps.Marker({
	    map: map,
	    position: myLatLng,
	    title: $scope.plage
	  });

    }, function(){
      //ERROR
    })

}