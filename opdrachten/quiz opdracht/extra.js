function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
  }
  
  Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
  
    this.questionIndex++;
  }
  
  Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
  }
  
  
  function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
  }
  
  
  function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
  
        
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
  
        showProgress();
    }
  };
  
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
  };
  
  
  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
  };
  
  function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  };
  
  
  var questions = [
    new Question("Who scored the first goal of 2020?", ["Cesar Azpilicueta", "Jack Grealish", "Mohamed Salah", "Roberto Firmino"], "Cesar Azpilicueta"),
    new Question("Which club has won the most Champions League titles?", ["Bayern Munchen", "Juventus", "Real Madrid", "Barcelona"], "Real Madrid"),
    new Question("Who is the only player to win the Champions League with three different clubs?", ["Cristiano Ronaldo", "Mario Gotze", "Arjen Robben", "Clarence Seedorf"], "Clarence Seedorf"),
    new Question("Which team was the first from the UK to win the European Cup?", ["Rangers", "Celtic", "Aberdeen", "Livingston"], "Celtic"),
    new Question("Who is the Champions League's top goalscorer of all time?", ["Robert Lewandowski", "Erling Haaland", "Cristiano Ronaldo", "Lionel Messi"], "Cristiano Ronaldo"),
    new Question("Which Portuguese team did Ronaldo play for before signing for Manchester United?", ["Sporting", "Porto", "Benfica", "Braga"], "Sporting"),
    new Question("Messi famously retired from international duty in which year before reversing his decision?", ["2015", "2016", "2017", "2020"], "2016"),
    new Question("Which player scored the fastest hat-trick in the Premier League?", ["Roberto Firmino", "Harry Kane", "Sadio Mane", "Raheem Sterling"], "Sadio Mane"),
    new Question("Which team won the first Premier League title?", ["Manchester United", "Manchester City", "Arsenal", "Chelsea"], "Manchester United"),
    new Question("The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?", ["Roberto Firmino", "Kevin De Bruyne", "Shane Long", "Danny Ings"], "Shane Long"),
   
  ];
  
  
  var quiz = new Quiz(questions);
  
  
  populate();