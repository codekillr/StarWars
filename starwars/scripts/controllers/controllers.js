var starWars = angular.module('starWars');
starWars.controller('getPeopleController',['$scope','$http','$state','getPeopleFactory','authenticationService',function($scope,$http,$state,getPeopleFactory,authenticationService) {
	$scope.welcomeName = "StarWars";
	$scope.people = getPeopleFactory.getPeople();

	$scope.onSubmit = function() {
		if($scope.username && $scope.password){
			var username = $scope.username.toLowerCase().replace(/\s/g, "");
			var password = $scope.password;
			$scope.submit = authenticationService.authenticate(username,password,$scope.people); 
			if($scope.submit)
				$state.go('search');
			else
				$scope.valid = true;
		}
		else {
			$scope.valid = true;
		}
		
	};
}]);

starWars.controller('getPlanetController',['$scope','$http','$state','getPlanetFactory',function($scope,$http,$state,getPlanetFactory) {
	$scope.welcomeName = "StarWars";
	$scope.showLoader = true;
	$scope.planets = getPlanetFactory.getPlanets();
	$scope.showLoader = false;
   	  $(".loading").fadeOut("slow"); 
}]);
starWars.controller('viewPlanetController',['$scope','$http','$stateParams','viewPlanetFactory',function($scope,$http,$stateParams,viewPlanetFactory) {
    $scope.showLoader = true;	
	viewPlanetFactory.getPlanet($stateParams.id).then(function(data){
		$scope.planet = data;	
	})
	.catch(function(response){
      console.log(response.status);
   })
	.finally(function() {
   	  $scope.showLoader = false;
   	  $(".loading").fadeOut("slow"); 
   }) ;
	
}]);