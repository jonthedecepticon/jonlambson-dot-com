var resumeCtrl = angular.module('resumeCtrl', []);
resumeCtrl.controller('resumeCtrl', function($scope) {
  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/430468/${getRandomNum()}')`;
    $('.randomize-bg-image').css("background-image", url);
  })();
});
