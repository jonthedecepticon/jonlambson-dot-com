var homeCtrl = angular.module('homeCtrl', []);
homeCtrl.controller('homeCtrl', function($scope) {
  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/151749/${getRandomNum()}')`;
    $('.randomize-bg-image-home').css("background-image", url);
  })();

  // TODO: DRY up
  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/644302/${getRandomNum()}')`;
    $('.randomize-bg-image-1').css("background-image", url);
  })();

  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/644302/${getRandomNum()}')`;
    $('.randomize-bg-image-2').css("background-image", url);
  })();

  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/644302/${getRandomNum()}')`;
    $('.randomize-bg-image-3').css("background-image", url);
  })();
});
