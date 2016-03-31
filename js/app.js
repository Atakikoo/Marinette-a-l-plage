function config($routeProvider) {
	$routeProvider
	  .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/info/:plage', {
      	templateUrl: 'views/info.html',
      	controller: 'locationController'
      })
      .when('/map', {
      	templateUrl: 'views/map.html',
      	 controller: 'mapController'
      })
      .otherwise({
        redirectTo: '/'
      });
}


angular.module('shell-sea', ['ngRoute'])
   .config(config)
   .controller('homeController', homeController)
   .controller('locationController', locationController)
   .controller('mapController', mapController)
   .service('locationService', locationService)
   .service('mapService', mapService)


