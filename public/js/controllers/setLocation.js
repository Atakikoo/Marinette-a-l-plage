
function accueilController($scope) {
  $http({
    metho: 'GET',
    url: 'api.openweathermap.org/data/2.5/weather?q=' + location +'686dadf15e6bc69aaaf1f31609e6d886'
    }).then(function succes(response) {
      console.log("miaou")
    },
      function error(response) {
        console.log("nope")
    })
};