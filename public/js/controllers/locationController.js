function locationController($scope, $routeParams, locationService){
	$scope.plage = $routeParams.plage;

	var data = {};

	locationService.recoverInfoLocation($scope.plage).then(function(response){
      //SUCCESS
      data = response.data;
      adapter(data.main.temp);
      $scope.icone = data.weather[0].icon;
      $scope.temp = Math.round(data.main.temp);
      $scope.name = data.name;

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

	var adapter = function(temp) {
		console.log(temp);
		var phrase = "";

		if (temp <= -10) {
			phrase = "On s'pèle le t'chu dins c'coin ! Pas d'bain, c'te jour !";
		}
		else if (temp > -10 && temp <= 0) {
			phrase = "Fait nin chô, la mer ce sera pour e'd'min";
		}
		else if (temp > 0 && temp <= 8) {
			phrase = "Fait bin tiède à'c'jour."
		}
		else if (temp > 0 && temp <= 15) {
			phrase = "Au début elle est froide et après elle est bonne !"
		}
		else if (temp > 18 && temp <= 25) {
			phrase = "Fait bin bon, on va aller à l'a' plage avec eun' canette !"
		}
		else {
			phrase = "Ki fait kô, allez, on met le chu deul' flotte !"
		}
	$scope.adapter = phrase
	};
}