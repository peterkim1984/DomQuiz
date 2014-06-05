(function(){


var question = document.getElementById("question");
var answer = document.getElementById("answer");

var questions = [
  "How many fingers are on one human hand? (numeric value)",
  "How many toes are on two human feet? (numeric value",







];

var answers = [
  "5",
  "10",

];

var i = 0

question.innerHTML = questions[i];

submit.onclick = function() {
    if(answer.value == answers[i]){
      console.log("You are correct");

    }

    i++
    
}

