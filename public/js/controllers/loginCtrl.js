var loginCtrl = angular.module('loginCtrl', []);
loginCtrl.controller('loginCtrl', function($scope) {
  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/585293/${getRandomNum()}')`;
    $('.randomize-bg-image').css("background-image", url);
  })();
});
