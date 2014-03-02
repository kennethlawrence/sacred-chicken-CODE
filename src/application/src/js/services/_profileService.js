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
        reset : function(){
          clearData();
        }
    }
  }
])
