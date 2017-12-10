var app = angular.module('myApp', [
  'ngRoute', 'portfolioCtrl', 'homeCtrl', 'contactCtrl', 'loginCtrl',
  'resumeCtrl', 'warCtrl'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .when('/portfolio', {
      templateUrl: 'partials/portfolio.html',
      controller: 'portfolioCtrl'
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'loginCtrl'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'resumeCtrl'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
    .when('/war-game', {
      templateUrl: 'partials/war-game.html',
      controller: 'warCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

function scl() {
  $('#list').show();
}
