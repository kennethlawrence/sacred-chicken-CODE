// Statistical Data - These are the points by which cities are compared, weighted
// and altered by the user input
const nhs = 'nhs2011',
      census = 'census2011';

var sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database('data/sqlite3/citydata.sq3'),
    Q = require('q');


var queryAll = function(queryString) {
  var deferred = Q.defer(),
      results = {}

  db.all(queryString, function(err, rows) {
      if(err) {
        deferred.reject(new Error(err));
      }
      else {
        rows.forEach(function(row) {
          results[row.name] = row.info || 0;
        });
        deferred.resolve(results);
      }
  });
  return deferred.promise;
}


var getAllData = function(source, topic, stat, bias) {
  var deferred = Q.defer(),
      results = {};

  bias = bias || "total";

  db.all('SELECT CMA_CA_Name as name, Total AS total, Male AS male, Female AS female FROM ' + source + ' Where Topic = "' + topic + '" AND Characteristic = "' + stat + '"',
       function(err, rows) {
         if(err) {
           deferred.reject(new Error(err));
         }
         else {
           rows.forEach(function(row) {
             results[row.name] = row[bias] || 0;
           });
           deferred.resolve(results);
         }
       });
  return deferred.promise; 
}

var getSingleRow = function(city, province, table, stat) {
    var deferred = Q.defer(), 
        result = {};

    db.each('SELECT Total, Male, Female FROM ' + table + ' WHERE Characteristic = "' +
        stat + '" AND CMA_CA_Name = "' + city + '" AND Prov_Name = "' + province + '"',
        function(err, row){
          if(err) {
            deferred.reject(new Error(err));
          }
          else {
            deferred.resolve(
              result = {
                total : row.Total || 0,
                male : row.Male || 0,
                female : row.Female || 0
              }
            );
          }
      });
    return deferred.promise;
}

var similarityScore = function(target, result) {
    return result > target ? parseInt(target / result * 100) : parseInt(result / target * 100);
}

var getPopulation = function(city) {
    return getSingleRow(city, census, "Population in 2011");
}

var percentageOfBaselineScore = function(source, topic, baseline, stat, bias) {
    var baselineQuery = getAllData(source, topic, baseline, bias),
        focusQuery = getAllData(source, topic, stat, bias),
        finished = Q.defer(),
        max = 0,

        baselineResult = {},
        focusResult = {},
        resultScores = {};

        baselineQuery.then(function(data) {
          baselineResult = data;
        });

        focusQuery.then(function(data) {
          focusResult = data;
        });

        Q.all([baselineQuery, focusQuery]).then(function() {
          Object.keys(focusResult).forEach(function(index) {
             resultScores[index] = (focusResult[index] / baselineResult[index] * 100) / 100;
             if(resultScores[index] > max) max = resultScores[index];
          });

          //Psudo Normalize the Scores to the maximum achievable
          Object.keys(resultScores).forEach(function(city) {
            resultScores[city] = parseInt(resultScores[city] / max * 100);
          });
          finished.resolve(resultScores);
        });

        return finished.promise;
}

var baseMetrics  = {
     affinity : function(source, topic, stat, target, bias) {
      // An affinity calculates how close a city is to the target rate
      // Penalties for going over or under the target rate
      var finished = Q.defer(),
        scores = {};

      query = getAllData(source, topic, stat, bias);
      query.then(function(data){
        Object.keys(data).forEach(function(city) {
          if(target === 0)
            scores[city] = parseInt((target + 1) / (data[city] + 1) * 100)
          else
            scores[city] = data[city] > target ? parseInt(target / data[city] * 100) : parseInt(data[city] / target * 100);
        });
        finished.resolve(scores);
      });
      return finished.promise;
    },

    similarity : function(source, topic, baseline, stat, bias) {
      //A Similarity calculates how much of the population matches 
      //the desired stat(istic).  This is a one way up to the maximum, it is
      //impossible to go over. 
      var finished = Q.defer();
        
      percentageOfBaselineScore(source, topic, baseline, stat, bias)
        .then(function(data) {
          finished.resolve(data);
        })

      return finished.promise;
    }
}

var route = function(request, response){
  var metric = request.params.metric;
  if(metric) {
    //console.log("metric", request.query.target, request.query.bias);
    metrics[metric](request.query.target, request.query.bias)
      .then(function(data) {
        response.setHeader('Access-Control-Allow-Origin', 'localhost:9000');
        response.setHeader('Access-Control-Allow-Methods', 'GET');
        response.json(data);
      });
  }
}

var metrics = {
    agerelation: function(target, bias) {
      var minAge = 5 * Math.floor(target/5),
          maxAge = minAge + 4,
          stat;

      if(target < 85)
        stat = "   " + minAge + " to " + maxAge + " years"; 
      else
        stat = "   85 years and over";

      return baseMetrics.similarity(census, "Age characteristics", "Total population by age groups", stat, bias);
    },

    maritalstatus : function(target, sex) {
      var options = {
        'single' : '   Not married and not living with a common-law partner',
        'married' : '   Married or living with a common-law partner'
      }
      return baseMetrics.similarity(census, "Marital status", "Total population 15 years and over by marital status", options[target], sex);
    },

    specificreligion : function(target, bias) {
      target = target.toLowerCase();

      var options = {
        'buddhist'    : '  Buddhist',
        'christian'   : '  Christian',
        'hindu'       : '  Hindu',
        'jewish'      : '  Jewish',
        'muslim'      : '  Muslim',
        'sikh'        : '  Sikh',
        'traditional' : '  Traditional (Aboriginal) Spirituality',
        'other'       : '  Other religions',
        'none'        : '  No religious affiliation'
      }
      return baseMetrics.similarity(nhs, "Religion", "Total population in private households by religion", options[target], bias);
    },

    educationlevel : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        'none'           : '  No certificate, diploma or degree',
        'highschool'     : '  High school diploma or equivalent',
        'apprenticeship' : '    Apprenticeship or trades certificate or diploma',
        'college'        : '    College, CEGEP or other non-university certificate or diploma',
        'bachelor'       : '    University certificate or diploma below bachelor level',
        'masters'        : '    University certificate, diploma or degree at bachelor level or above'
      }
      return baseMetrics.similarity(nhs, "Education", "Total population aged 25 to 64 years by highest certificate, diploma or degree", options[target], bias);
    },

    educationfocus : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        'none'         : '  No postsecondary certificate, diploma or degree',
        'education'    : '  Education',
        'arts'         : '  Visual and performing arts, and communications technologies',
        'humanities'   : '  Humanities',
        'socialstudies': '  Social and behavioural sciences and law',
        'business'     : '  Business, management and public administration',
        'physed'       : '  Physical and life sciences and technologies',
        'math'         : '  Mathematics, computer and information sciences',
        'engineering'  : '  Architecture, engineering, and related technologies',
        'agriculture'  : '  Agriculture, natural resources and conservation',
        'health'       : '  Health and related fields',
        'protective'   : '  Personal, protective and transportation services',
        'other'        : '  Other fields of study'
      }
      return baseMetrics.similarity(nhs, "Education", "Total population aged 25 to 64 years by highest certificate, diploma or degree", options[target], bias);
    },

    employmentclass : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        'employee'     : '    Employee',
        'selfemployed' : '    Self-employed',
      }
      return baseMetrics.similarity(nhs, "Class of worker", "  All classes of worker", options[target], bias);
    },

    transportation : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        'driver'    : '  Car, truck or van - as a driver',
        'passenger' : '  Car, truck or van - as a passenger',
        'public'    : '  Public transit',
        'walk'      : '  Walked',
        'bike'      : '  Bicycle',
        'other'     : '  Other methods',
      }
      return baseMetrics.similarity(nhs, "Mode of transportation", 
          "Total employed population aged 15 years and over with a usual place of work or no fixed workplace address by mode of transportation", 
          options[target], bias);
    },

    workdeparture : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        '5am' : '  Between 5 and 6:59 a.m.',
        '7am' : '  Between 7 and 9:00 a.m.',
        '9am' : '  Anytime after 9:00 a.m.'
      }
      return baseMetrics.similarity(nhs, "Time leaving for work", 
          "Total employed population aged 15 years and over by time leaving for work", 
          options[target], bias);
    },

    homeowner : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        'own' : '  Owner',
        'rent' : '  Renter'
      }
      return baseMetrics.similarity(nhs, "Household characteristics", 
          "Total number of private households by tenure", 
          options[target], bias);
    },

    numberofchildren : function(target, bias) {
      target = target.toLowerCase();
      var options = {
        '0' : '   Size of census family: 2 persons',
        '1' : '   Size of census family: 3 persons',
        '2' : '   Size of census family: 4 persons',
        '3+': '   Size of census family: 5 or more persons'
      }
      return baseMetrics.similarity(census, "Family characteristics", 
          "Total number of census families in private households", 
          options[target], bias);
    },

    artsentertainment: function(weight) {
      //This Affinity makes the assumption that cities with high levels of the
      //population employed in arts, culture, recreation, and sport indicate
      //a thriving arts and entertainment industry in the city.
      // MAX VALUE  : 113490;
      // MIN_VALUE  : 25;
      //return baseMetrics.affinity(nhs, "Occupation", "    5 Occupations in art, culture, recreation and sport", target);
      var finished = Q.defer(),
          query = baseMetrics.similarity(nhs, "Occupation", "  All occupations",
            "    5 Occupations in art, culture, recreation and sport");
      query.then(function(data) {
        Object.keys(data).forEach(function(city) {
          data[city] = Math.round(data[city] * weight);
        });
        finished.resolve(data);
      });
      return finished.promise;
    },

    housingcost: function(target) {
      target = target.toLowerCase();
      var options = {
        '30up'   : '  Spending 30% or more of household total income on shelter costs',
        '30down' : '  Spending less than 30% of household total income on shelter costs',
      }
      return baseMetrics.similarity(nhs, "Shelter costs",
        "Total number of owner and tenant households with household total income greater than zero, in non-farm, non-reserve private dwellings by shelter-cost-to-income ratio", 
          options[target]);
      //return baseMetrics.affinity(nhs, "Shelter costs", "  Average monthly shelter costs for owned dwellings ($)", target);
      
    },

    incomelevel: function(target) {
      return baseMetrics.affinity(nhs, "Income of individuals in 2010", "  Average income ($)", target);
    },

    profileage : function(target) {
      return baseMetrics.affinity(census, "Age characteristics", "Median age of the population", target);
    },

    populationaffinity : function(target) {
      return baseMetrics.affinity(census, "Population and dwelling counts", "Population in 2011", target);
    },

    populationdensity : function(target) {
      return baseMetrics.affinity(census, "Population and dwelling counts", "Population density per square kilometre", target);
    },

    populationgrowth : function(target) {
      //Target : growth in full percent i.e. 5 = 5%;
      // WARNING: Produces Negative Values for declining cities.
      return baseMetrics.affinity(census, "Population and dwelling counts", "2006 to 2011 population change (%)", target);
    }
}

module.exports.metrics = metrics;
module.exports.route = route;
