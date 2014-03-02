angular.module('cityLove.controllers', ['cityLove.services'])

.controller('homeController', ['$scope', 'questionService', 'profileService', 'matchMakerService', '$location',
  function($scope, questionService, profileService, matchMakerService, $location) {

    $scope.ready = false;
    $scope.currentQuestionNumber = questionService.currentQuestionNumber();
    $scope.totalQuestions = questionService.totalQuestions;
    $scope.$on("questionService: ready", function() {
      $scope.ready = true;
      updateCount();
    });
    $scope.$on("matchMakerService: results ready", function() {
      $scope.quizResults = matchMakerService.getLatestResults();
      console.log($scope.quizResults);
    });

    var updateCount = function() {
      $scope.currentQuestionNumber = questionService.currentQuestionNumber();
      $scope.totalQuestions = questionService.totalQuestions();
    }

    $scope.reset  = function() {
      questionService.reset();
      profileService.reset();
      matchMakerService.reset();
      updateCount();
      $scope.quizResults = null;
      $scope.currentAnswer = null;
    }

    $scope.nextQuestion = function() {
      if($scope.currentQuestionNumber > 0 && $scope.currentQuestionNumber <= $scope.totalQuestions && $scope.ready) {
        if($scope.currentAnswer.relative){
         $scope.currentAnswer.option += profileService.getCurrentProfile().profile[$scope.currentAnswer.relative]
        }

        profileService.updateProfile(
          $scope.question.category,
          $scope.question.indicator,
          $scope.currentAnswer.option
        );
        matchMakerService.processAnswer(
          $scope.question.slug,
          $scope.currentAnswer.option
        );
      }
      $scope.currentAnswer = { option: null }; 
      $scope.question = questionService.getNextQuestion();
      updateCount();
      if($scope.currentQuestionNumber > $scope.totalQuestions) {
        matchMakerService.calculateMatch();
      }
 
    };

    $scope.selectAnswer = function(index) {
      $scope.currentAnswer = $scope.question.answers[index];
    };
  }
])

.controller('resultsController', ['$scope', 'matchMakerService',
  function($scope, matchMakerService) {

    $scope.results = matchMakerService.getLatestResults();
    console.log($scope.results);
  }
])
;