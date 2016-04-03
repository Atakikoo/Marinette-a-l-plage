function locationController($scope, $routeParams, locationService){
	$scope.plage = $routeParams.plage;

	var data = {};

	locationService.recoverInfoLocation($scope.plage).then(function(response){
      //SUCCESS


	      data = response.data;
	      adapter(data.main.temp);
	      souffler(data.wind.speed);
	      $scope.icone = data.weather[0].icon;
	      $scope.temp = Math.round(data.main.temp);
	      $scope.vent = data.wind.speed;
	      $scope.name = data.name;

	      var myLatLng = {lat: data.coord.lat, lng: data.coord.lon};

	      var mapOptions = {
	      	center: myLatLng,
		     scrollwheel: false,
		     zoom: 7,
	          styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ff9000"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#1e85f3"},{"visibility":"on"}]}]
     };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('googleMap');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

	  

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
			phrase = "On s'pèle le t'chu dins c'coin ! Pas d'bain, c'te jour!";
		}
		else if (temp > -10 && temp <= 0) {
			phrase = "Fait nin chô, la mer ce sera pour e'd'min";
		}
		else if (temp > 0 && temp <= 8) {
			phrase = "Fait bin tiède à'c'jour.";
		}
		else if (temp > 8 && temp <= 15) {
			phrase = "Au début elle est froide et après elle est bonne!";
		}
		else if (temp > 16 && temp <= 25) {
			phrase = "Fait bin bon, on va aller à l'a' plage avec eun' canette!";
		}
		else {
			phrase = "Ki fait kô, allez, on met le chu deul' flotte!";
		}
	$scope.adapter = phrase;
	};

	var souffler = function(vent) {
		console.log(vent);
		var beaufort = "";

		if (vent <= 0.3) {
			beaufort = "0 sur l'échelle eud' Beaufort, y'a pas un poil de moumoutte qui bouge.";
		}
		else if (vent > 0.3 && vent <= 1.5) {
			beaufort = "1 sur l'échelle eud' Beaufort, l'herbe, el' boug'";
		}
		else if (vent > 1.5 && vent <= 3.3) {
			beaufort = "2 sur l'échelle eud' Beaufort, ça fait d'l'air aux mollets";
		}
		else if (vent > 3.3 && vent <= 5.4) {
			beaufort = "3 sur l'échelle eud' Beaufort, ça soulève eul' jupe eud' mémé";
		}
		else if (vent > 5.4 && vent <= 7.9) {
			beaufort = "4 sur l'échelle eud' Beaufort, les capiots volent";
		}
		else if (vent > 7.9 && vent <= 10.7) {
			beaufort = "5 sur l'échelle eud' Beaufort, l'mair', i'en perd s'n'écharp'";
		}
		else if (vent > 10.7 && vent <= 13.8) {
			beaufort = "6 sur l'échelle eud' Beaufort, ti va m'fair' eul' plaisi d' rintrer., rent' vit' eut' miches";
		}
		else if (vent > 13.8 && vent <= 17.1) {
			beaufort = "7 sur l'échelle eud' Beaufort, rent' vit' eut' miches";
		}
		else if (vent > 17.1 && vent <= 20.7) {
			beaufort = "8 sur l'échelle eud' Beaufort, ça décoif' eul' chauv'";
		}
		else if (vent > 20.7 && vent <= 24.4) {
			beaufort = "9 sur l'échelle eud' Beaufort, i a l'cloch' qui sonn'";
		}
		else if (vent > 24.4 && vent <= 28.5) {
			beaufort = "10 sur l'échelle eud' Beaufort, ça décorne eul'vac'";
		}
		else if (vent > 28.5 && vent <= 32.7) {
			beaufort = "11 sur l'échelle eud' Beaufort, l'arb' del' gardin y s'barre";
		}
		else if (vent > 32.7 && vent <= 36.7) {
			beaufort = "12 sur l'échelle eud' Beaufort, tout fout l'camp";
		}
		else {
			beaufort = "13 sur l'échelle eud' Beaufort. Y'a plus rin d'bout";
		}
	$scope.souffler = beaufort;
	};
}