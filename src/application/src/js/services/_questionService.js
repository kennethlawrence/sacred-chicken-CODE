.factory('questionService', [ '$rootScope', 'apiService',
  function($rootScope, apiService) {

    var questions = [],
        currentQuestionIndex = -1;

    var init = function() {
      apiService.getQuestionData()
        .success(function(data) {
          questions = data.questions;
          $rootScope.$broadcast("questionService: ready");
        })
    } 
    init();

    return {
      currentQuestionNumber : function() {
        return currentQuestionIndex + 1;
      },
      totalQuestions : function() {
        return questions.length;
      },

      getNextQuestion : function() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length)
          return questions[currentQuestionIndex][1];
      },

      submitAnswer : function(question, response) {
        responses[question] = response;
      },

      reset: function() {
        currentQuestionIndex = -1;
      }
    }
  }
])
 
