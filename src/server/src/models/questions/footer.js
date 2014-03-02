};

var questionArray = [];
for(var question in allQuestions)
  questionArray.push([question, allQuestions[question]]);

questionArray.sort(function(a,b) {
  return a[1].order - b[1].order
});
module.exports.questions = questionArray;
