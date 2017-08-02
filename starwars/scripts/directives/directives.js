
var starWars = angular.module('starWars');

starWars.directive('planets',function(){
    return {
        restrict:'E',
        templateUrl: '././views/planets.html'
    };
});