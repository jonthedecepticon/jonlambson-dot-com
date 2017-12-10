var contactCtrl = angular.module('contactCtrl', []);
contactCtrl.controller('contactCtrl',['$scope', '$http', function($scope, $http){
  (function getBackgroundImage() {
    function getRandomNum() {
      return Math.floor(Math.random() * 60);
    }
    var url = `url('https://source.unsplash.com/collection/1121601/${getRandomNum()}')`;
    $('.randomize-bg-image').css("background-image", url);
  })();
  // Initializes Variables
  // ----------------------------------------------------------------------------
  $scope.formData = {};

  // Functions
  // ----------------------------------------------------------------------------
  // Creates a new user based on the form fields
  $scope.createContact = function() {
    // Grabs all of the text box fields
    var contactData = {
      name: $scope.formData.name,
      email: $scope.formData.email,
      message: $scope.formData.message,
    };

    // Saves the user data to the db
    $http.post('/contacts', contactData).success(function (data) {
      // Once complete, clear the form (except location)
      $scope.formData.name = "";
      $scope.formData.email = "";
      $scope.formData.message = "";
      $scope.getContacts();
    }).error(function (data) {
      console.log('Error: ' + data);
    });
  };

  $scope.getContacts = function() {
    $http.get('/contacts').success(function(data) {
      $scope.contacts = data;
    }). error(function(data) {
      console.log('ERROR: ', + data);
    });
  };
  $scope.getContacts();


  $scope.deleteContact = function(id) {
    $http.delete('/contacts/' + id).success(function(data) {
      $scope.getContacts();
    });
  };

  $scope.matchBorder = function(input) {
    if (input === 'name') {
      $('.orange-me1').css('border-color', '#f96332');
      $('.orange-me2').css('border-color', '#E3E3E3');
    } else if (input === 'email'){
      $('.orange-me1').css('border-color', '#E3E3E3');
      $('.orange-me2').css('border-color', '#f96332');
    } else {
      $('.orange-me1').css('border-color', '#E3E3E3');
      $('.orange-me2').css('border-color', '#E3E3E3');
    }
  };
}]);
