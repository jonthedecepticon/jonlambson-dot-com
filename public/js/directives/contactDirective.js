app.directive('contactMe', [function () {
  return {
    restrict: 'EA',
    templateUrl: '/partials/widgets/contact-me.html',
    controller: 'contactCtrl'
  };
}]);
