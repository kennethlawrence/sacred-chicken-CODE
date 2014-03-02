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
