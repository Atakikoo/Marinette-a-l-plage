function mapController($scope, $location, $routeParams, mapService) {
    var data = {};

    var laloupe = {
        lat: 48.471,
        lng: 1.014
    };
    mapService.getMap().then(function (response) {

        var list = response.data.records;

        var mapOptions = {
            center: laloupe,
            scrollwheel: false,
            zoom: 6,
            styles: [{
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            }, {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.country",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.province",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.province",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative.locality",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "poi.business",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ff9000"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#1e85f3"
                }, {
                    "visibility": "on"
                }]
            }]
        };

        var mapElement = document.getElementById('googleMAP');

        var map = new google.maps.Map(mapElement, mapOptions);
        // Create the info window
        var infoWindow = new google.maps.InfoWindow();

        list.forEach(function (element, index, list) {
            var newLat = element.fields.latitude;
            var newLon = element.fields.longitude;
            var newSite = element.fields.site;

            var myLatLng = {
                lat: newLat,
                lng: newLon
            };

            var marker = new google.maps.Marker({
                map: map,
                position: myLatLng,
                title: newSite
            });

            

            mapService.recoverInfoWeather(newSite).then(function(response){
                
                    var infoWeather = response.data;
                    
                    console.log(infoWeather);
                    var temp = Math.round(infoWeather.main.temp);
                    var wind =  Math.round(infoWeather.wind.speed);

                    marker.content = '<div class="infoWindowContent"> La température est de '+ temp +'° <br> et la vitesse du vent de '+ wind +' km/h.</div>';
                    // Add eventListener on click to marker
                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.setContent('<h2 style="color:red">' + marker.title + '</h2>' + marker.content);
                        infoWindow.open(map, marker);
                    });
            }); //end mapservice weather

        }); //end foreach

    }); //end mapservice



}
