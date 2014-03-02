angular
  .module('CityLove', [
     'ngRoute',
     'cityLove.controllers',
     'cityLove.services',
     'cityLove.directives'
  ])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/about', {
          templateUrl: 'html/about.html'
        })
        .otherwise({
          templateUrl: 'html/home.html',
          controller : 'homeController'
        });
    }

  ])

  .constant('apiSettings', {
    port: 9000,
    address: 'localhost',
    dataUri: '/data',
    questionUri: '/questions'
  });
