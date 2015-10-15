function locationService($http){
	return {
		recoverInfoLocation: function(location){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + location +'&appid=686dadf15e6bc69aaaf1f31609e6d886');
		}
	}
};