angular.module('cityLove.services', [])

.factory('apiService', [ '$http', 'apiSettings',
  function($http, apiSettings) {

    return {
      getMetricData : function(metric, target, bias) {
        var params = {
                target : target,
                bias : bias
            }
        return $http.get(apiSettings.dataUri + '/' + metric, { params: params });
      },

      getQuestionData : function() {
        return $http.get(apiSettings.questionUri);
      }
    }
  }
])

.factory('matchMakerService', [ 'profileService', 'apiService', '$rootScope',
  function(profileService, apiService, $rootScope) {

    var cityRankings = {},
        currentResults = [];

    return {
      processAnswer : function(metric, answer) {
        if(answer != null && metric != '') {
          apiService.getMetricData(metric, answer, profileService.bias)
            .then(function(results){
              Object.keys(results.data).forEach(function(key){
                cityRankings[key] = (cityRankings[key] || 0) + results.data[key];
              });
            });
        }
      },
      calculateMatch : function() {
        currentResults = [];
        for(var city in cityRankings)
          currentResults.push([city, cityRankings[city]]);
        currentResults.sort(function(a,b) {
          return b[1] - a[1]
        });
        $rootScope.$broadcast("matchMakerService: results ready");
      },
      getLatestResults : function() {
        return currentResults;
      },
      reset : function() {
        $rootScope.$broadcast("matchMakerServie: reset");
        cityRankings = {};
        currentResults =[];
      }

    }
  }
])


.factory('profileService', [
  function() {
  
    var current = {};

    var clearData = function() {
      current = {
        profile : {
          gender: null,
          religion: null,
          age: null
        },
        relationships : {
          status: null,
          children: null,
        },
        financial : {
          level: null,
          class: null,
          homeOwner: null,
          livingExpenses: null
        },
        education : {
          artsEntertainment: null,
          focus: null,
          level: null
        },
        lifestyle : {
          density: null,
          transportation: null,
          earlyRiser: null 
        },
        bias : "total"
      }
    }
    clearData();

    return {
        updateProfile :  function(category, indicator, value) {
          current[category][indicator] = value;
        },
        getCurrentProfile : function() {
          return current;
        },
        reset : function(){
          clearData();
        }

    }
  }
])

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
 
;