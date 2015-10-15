function config($routeProvider) {
	$routeProvider
	  .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/info/:plage', {
      	templateUrl: 'views/info.html',
      	controller: 'infoController'
      })
      .otherwise({
        redirectTo: '/'
      });
}

// change your path name into the Url
// function run($rootScope, $location){
//     var path = function() { return $location.path(); };
//     $rootScope.$watch(path, function(newVal, oldVal){
//         $rootScope.activetab = newVal;
//     });
// }

angular.module('shell-sea', ['ngRoute'])
   .config(config)
   .controller('homeController', homeController)
   .controller('infoController', infoController)
   .service('locationService', locationService)