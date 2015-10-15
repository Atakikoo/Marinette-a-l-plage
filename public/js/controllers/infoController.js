function infoController($scope, $routeParams, locationService){
	$scope.plage = $routeParams.plage;

	var data = {};

	locationService.recoverInfoLocation($scope.plage).then(function(response){
      //SUCCESS
      data = response.data;
      $scope.icone = data.weather[0].icon;
      $scope.temp = data.main.temp;
      console.log(response.data);
    }, function(){
      //ERROR
    })

	// function initialisation(){
 //  		var centreCarte = new google.map.LatLng(data.coord.lat, data.coord.lon);
 //  		var optioncarte = {
 //  		zoom:8,
 //  		center: centreCarte
 //  		mapTypeId:google.maps.MapTypeId.ROADMAP
 //  		}
 //  		var maCarte = new google.maps.Map(document.getElementById("googleMap"), optionCarte);
 //  		var marker = new google.maps.Marker({
	//       position: {lat: data.coord.lat, lng: data.coord.lon},
	//       map: maCarte,
	//       title: 'Hello World!'

	function initMap() {
		  // Create a map object and specify the DOM element for display.
		  var map = new google.maps.Map(document.getElementById(data.coord.lat, data.coord.lon), {
		    center: {lat: -34.397, lng: 150.644},
		    scrollwheel: false,
		    zoom: 8
		  });
		}
  	// };
  		// initMap();
  	// initialisation();

}