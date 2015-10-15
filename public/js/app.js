function config($routeProvider) {
	$routeProvider
	  .when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'accueilController'
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
   .controller('accueilController', accueilController)