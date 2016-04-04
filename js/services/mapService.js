function mapService($http){
	return {
		getMap: function(){
				return $http.get('http://shom.opendatasoft.com/api/records/1.0/search?dataset=references-altimetriques-maritimes0&rows=400&facet=zone&facet=rf&facet=organisme&facet=reference&exclude.zone=%C3%8Eles+Gambier&exclude.zone=Clipperton&exclude.zone=%C3%8Eles+Saint-Pierre-et-Miquelon&exclude.zone=Terre+Ad%C3%A9lie+(Antarctique)&exclude.zone=Saint-Martin+et+Saint-Barth%C3%A9lemy&exclude.zone=Mayotte&exclude.zone=Wallis-et-Futuna&exclude.zone=La+R%C3%A9union&exclude.zone=C%C3%B4tes+Ouest+de+la+Martinique&exclude.zone=C%C3%B4tes+Est+de+la+Martinique&exclude.zone=%C3%8Eles+Australes&exclude.zone=Terres+Australes&exclude.zone=Guyane&exclude.zone=Guadaloupe&exclude.zone=%C3%8Eles+Marquises&exclude.zone=Archipel+de+la+Soci%C3%A9t%C3%A9&exclude.zone=Abords+de+Port-Navalo&exclude.zone=Sud+de+l%27archipel+des+Tuamotu&exclude.zone=Nord+de+l%27archipel+des+Tuamotu&exclude.zone=Est+de+la+Nouvelle-Cal%C3%A9donie&exclude.zone=Ouest+de+la+Nouvelle-Cal%C3%A9donie', true);
		},

		 recoverInfoWeather: function(newsite){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + newsite +'&units=metric&appid=686dadf15e6bc69aaaf1f31609e6d886');
		 }
	}
};