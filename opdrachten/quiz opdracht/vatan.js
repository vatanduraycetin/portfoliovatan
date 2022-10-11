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
    new Question("Who was the first Premier League manager or player to test positive for coronavirus?", ["Mikel Arteta", "Mohamed Salah","Frank Lampard", "Sergio Aguero"], "Mikel Arteta"),
    new Question("What was the last European game played in England before football was suspended in March?", ["Manchester United vs. LASK", "Chelsea vs. Bayern Munich", "Liverpool vs. Atletico Madrid", "Manchester City vs. Porto"], "Liverpool vs Atletico Madrid"),
    new Question("Which of the big European leagues resumed football before anyone else?", ["Ligue 1, France", "Bundesliga, Germany", "LaLiga, Spain", "Premier League, England"], "Bundesliga, Germany"),
    new Question("Which Premier League club was first to welcome their fans back into the stadium in December?", ["West Ham United", "Chelsea", "Crystal Palace", "Everton"], "West Ham United"),
    new Question("Who preceded Ronald Koeman as Barcelona manager?", ["Ernesto Valverde", "Xavi Hernandez", "Quique Setien" , "Andres Iniesta"], "Quique Setien"),
    new Question("Which Bundesliga side has already sacked two managers this season?", ["Werder Bremen", "Borussia Dortmund", "Schalke" , "Augsburg"], "Schalke"),
    new Question("Which player was the most expensive Premier League import in the summer of 2020?", ["Timo Werner", "Kai Havertz", "Thomas Partey" , "Ben Chilwell"], "Kai Havertz"),
    new Question("Who was Andrea Pirlo's first signing as Juventus manager?", ["Federico Chiesa", "Alvaro Morata", "Weston McKennie" , "Dejan Kulusevski"], "Weston McKennie"),
    new Question("How much did Liverpool pay Bayern Munich for Thiago?", ["£35,8m", "£27,3m", "£10m" , "£15m"], "£27,3m"),
    new Question("Jan Vertonghen left Tottenham after eight years to join which club on a free transfer?", ["Feyenoord Rotterdam", "Heracles", "Chelsea" , "Benfica"], "Benfica"),
    

  ];
  
  
  var quiz = new Quiz(questions);
  
  
  populate();