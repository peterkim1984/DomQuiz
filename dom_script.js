(function() {

  var score = 0
  var question = document.getElementById("question");
  var answer = document.getElementById("answer");

  var questionList = [
    "How many fingers are on one human hand? (numeric value)",
    "How many toes are on two human feet? (numeric value)",
    "How many heads does a human have? (numeric value",
    "How many elbows does a human have? (numeric value",
    "How much wood could a woodchuck chuck? (numeric value)",
  ];

  var answerList = [
    "5",
    "10",
    "1",
    "2",
    "32",
  ];

  var i = 0

  question.innerHTML = questionList[i];

  submit.onclick = function() {
    if (answer.value == answerList[i]) {
      console.log("You are correct");

      score++;
    } else {
      //user is wrong

    }
    i++;
    console.log(i);

    if (i >= questionList.length) {
      document.body.removeChild(answer);
      document.body.removeChild(submit);
      question.innerHTML = "Good job! Your score is "+score;
    } else {
      question.innerHTML = questionList[i];
      console.log(questionList[i]);
      answer.value = null;
      console.log(questionList.length);
    }
  };






})();