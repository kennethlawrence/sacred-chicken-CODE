// City Love Data Processor
// ========================

var sqlite3 = require('sqlite3').verbose(),
    Q = require('q');
    City = require('./models/city');

    var wpg = City.build("Winnipeg", "Manitoba")
      .then(function(city) {
        console.log(city);
      })
      .fail(function(error) {
        console.log("Error", error);
      })

