function mapController($scope, $location, mapService) {
  
  	var data = {};

  	var laloupe = {lat: 48.471, lng: 1.014};
	mapService.getMap().then(function(response){
	   console.log(response.data.records[0]);

	    var map = new google.maps.Map(document.getElementById('googleMAP'), {
		    center: laloupe,
		    scrollwheel: false,
		    zoom: 6
		  });

	   var list = response.data.records;
 	
 		list.forEach(function(element, index, list){
 			var newLat = element.fields.latitude;
 			var newLon = element.fields.longitude;
 			var newSite = element.fields.site;

 			var myLatLng = {lat: newLat, lng: newLon};

 			var marker = new google.maps.Marker({
			    map: map,
			    position: myLatLng,
			    title: newSite
			 });

 		});
 		//  this.marker.addListener('click', function() {
	  //   $scope.plage = this.newSite;
	  //   $scope.plage = $routeParams.plage;
	  //   $location.url("http://127.0.0.1:8080/#/info/");
	  // });
		  

		 
     });


	   	
}