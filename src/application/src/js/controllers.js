angular.module('cityLove.controllers', ['cityLove.services'])

.controller('homeController', ['$scope',
  function($scope) {
    $scope.testData = "This is a test";
  }
])
;