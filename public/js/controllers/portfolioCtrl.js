var portfolioCtrl = angular.module('portfolioCtrl', []);
portfolioCtrl.controller('portfolioCtrl',['$scope', '$location', function($scope, $location) {
  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/468125/${getRandomNum()}')`;
    $('.randomize-bg-image').css("background-image", url);
  })();

  $scope.goToProject = function(project) {
    console.log(project);
    switch(project) {
        case 'war':
            $location.path('/war-game');
          break;
        default:
    }
  };

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 50000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
  $('.count2').each(function () {
    $(this).prop('Counter',116).animate({
      Counter: $(this).text()
    }, {
      duration: 20000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

}]);
