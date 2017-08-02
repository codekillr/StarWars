var starWars = angular.module('starWars');
starWars.service('authenticationService', function() {
		this.authenticate = function(username,password,people) {
			console.log(people);
			if(people[username] == password){
				console.log("success"+username);
				return true;
			}
			else{
				console.log("fail"+username);
				return false;
			}
				
		};
});