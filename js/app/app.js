var Portfolio = angular.module('Portfolio', ['ngRoute', 'ngResource']);

Portfolio.run(function() {
  console.log('App is running!');
})

Portfolio.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  console.log('app loaded');

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/projects', {
    templateUrl: '/views/projects.html',
    controller: 'ProjectCtrl'
  })
  .otherwise({
    templateUrl: '/views/404.html'
  });

}]);