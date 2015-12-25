// function mapController($scope, $location, mapService) {
  
//   	// var dato = {};
// 	mapService.getMap().then(function(response){
// 	      //SUCCESS
// 	      // dato = response.data;
// 	      // console.log(dato);

// 	      // Create a map object and specify the DOM element for display.
		
// 	      initMap();
//      });

// 	function initMap() {
// 		  var map = new google.maps.Map(document.getElementById('googleMAP'), {
// 		    center: {lat: 48.471, lng: 1.014},
// 		    scrollwheel: false,
// 		    zoom: 6
// 		  })
// 	}


// }


function mapController($scope, $location, mapService) {
  
  	var data = {};
	mapService.getMap().then(function(response){
	      //SUCCESS
	      data = response.data;
	      console.log(data);


		initMap();
		  
		getMarker();
		 
		

     });

	function initMap() {
		  var map = new google.maps.Map(document.getElementById('googleMAP'), {
		    center: {lat: 48.471, lng: 1.014},
		    scrollwheel: false,
		    zoom: 6
		  });
		}

	function getMarker() { new google.maps.Marker({
		    map: map,
		    position: {[-1.166666667, 46.016666669999985]},
		    title: site
		 });
	}
		    	
}