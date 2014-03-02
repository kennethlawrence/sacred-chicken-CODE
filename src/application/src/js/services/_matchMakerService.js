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

