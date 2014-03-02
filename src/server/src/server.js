var express = require('express');
var app = express();
var questionBank = require('./models/questions');
var statsticalData = require('./models/data');

app.configure(function() {
  app.use(app.router);
});

app.get('/questions', function (request, response) {
  response.json({
    questions: questionBank.allQuestions
  });
});

app.get('/data/:metric', statsticalData.route);

app.listen(9000);
