
var starWars = angular.module('starWars', ['ui.router']);

starWars.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller:'getPeopleController'
        })

        .state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller : 'getPlanetController'
        })

        .state('planet', {
            url: '/planet/:id',
            templateUrl: 'views/planet.html',
            controller : 'viewPlanetController'
        });

});