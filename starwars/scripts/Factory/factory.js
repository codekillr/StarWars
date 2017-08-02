var starWars = angular.module('starWars');
starWars.factory('getPeopleFactory',['$http',function($http) {
	return {
		getPeople : function(){
						var people = {};
						for(var i =1; i < 88;i++){
							var httpGet = $http.get('http://swapi.co/api/people/'+i+'/')
							httpGet.then(function(result) {
							    people[result.data.name.toLowerCase().replace(/\s/g, "")] = result.data.birth_year;
							});
						}
						return people;
					}
	}
}]);
starWars.factory('getPlanetFactory',['$http','$q',function($http,$q) {
	return {
		getPlanets : function(){
						var deferred = $q.defer();
						var planets = [];
						for(var i =1; i < 70;i++){
							var httpGet = $http.get('http://swapi.co/api/planets/'+i+'/')
							httpGet.then(function(result) {
								deferred.resolve(result.data);
								planets.push({
									"name" : result.data.name,
									"population" : result.data.population,
									"id" : result.data.url.replace("http://swapi.co/api/planets/","").replace("/","")
								});
							})
							.catch(function(response){
					          deferred.reject(response);
					        });
						}
						return planets;
					}
	}
}]);
starWars.factory('viewPlanetFactory',['$http','$q',function($http,$q) {
	return {
		getPlanet : function(id){
						var deferred = $q.defer();
							var httpGet = $http.get('http://swapi.co/api/planets/'+id)
							httpGet.then(function(response) {
								deferred.resolve(response.data);
							})
							.catch(function(response){
					          deferred.reject(response);
					        });
					        return deferred.promise;
					}
	}
}]);