
var questions = [
    "What is the capital of France?",
    "What is the capital of Sweden?",
    "What is the capital of Thailand?",
    "What is the capital of Kazakhstan?"
  ];
  
  var answers = [
    "Paris",
    "Stockholm",
    "Bangkok",
    "Astana"
  ];
  
  var choice_options = [
    ["London", "Paris", "Berlin", "Madrid"],
    ["Stockholm", "Rome", "Moscow", "Ottawa"],
    ["Patong", "Bali", "Phuket", "Bangkok"],
    ["Almaty", "Nur-Sultan", "Astana", "Akmola"],
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  
  $(document).ready(function() {
    showQuestion();
  });
  
  function showQuestion() {
    var quiz = $("#quiz");
    quiz.empty();
    var question = $("<div>").addClass("question").text(questions[currentQuestion]);
    var options = $("<div>").addClass("options");
    for (var j = 0; j < choice_options[currentQuestion].length; j++) {
      var option = $("<input>").attr({
        type: "radio",
        name: "question-" + currentQuestion,
        value: choice_options[currentQuestion][j]
      });
      var label = $("<label>").text(choice_options[currentQuestion][j]);
      options.append(option, label);
    }
    quiz.append(question, options);
  }
  
  
  $("#submit").click(function() {
    var selected = $("input[name='question-" + currentQuestion + "']:checked").val();
    if (selected === answers[currentQuestion]) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    $("#quiz").hide();
    var result = $("<div>").addClass("result").text("Your score is: " + score + "/" + questions.length);
    $("#score").append(result);
  }
  


 
