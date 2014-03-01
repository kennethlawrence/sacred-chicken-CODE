const nhs = 'nhs2011',
      census = 'census2011';

var Q = require('q'),
    Data = require('./data');

var build = function(name, province) {

  var finished = Q.defer(),
      city = {
        name: name,
        province: province
      }

  Data.metrics.artsAndEntertainmentAffinity(114000)
    .then(function(data) {
      console.log(data);
    })

  return finished.promise;
}

module.exports.build = build;
