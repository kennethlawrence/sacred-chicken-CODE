/////////////////////////////////////////////////////
// Server Setup
var express = require('express');
var app = express();
var questionBank = require('./models/questions');
var statsticalData = require('./models/data');

app.configure(function() {
  app.use(app.router);
});

/////////////////////////////////////////////////////
// Server Routing
app.get('/questions', function (request, response) {
   response.setHeader('Access-Control-Allow-Origin', 'localhost:9000');
   response.setHeader('Access-Control-Allow-Methods', 'GET');
   response.json({
     questions: questionBank.questions
  });
});
app.get('/data/:metric', statsticalData.route);

app.use(express.static(__dirname + '/../../application/src'));

////////////////////////////////////////////////////
// Server Start
app.listen(9000);
