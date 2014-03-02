.controller('resultsController', ['$scope', 'matchMakerService',
  function($scope, matchMakerService) {

    $scope.results = matchMakerService.getLatestResults();
    console.log($scope.results);
  }
])
