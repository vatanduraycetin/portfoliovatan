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
  new Question("Which team knocked out Manchester City in the quarter-finals of the Champions League?", ["Lyon", "RB Leipzig","Tottenham", "Real Madrid"], "Lyon"),
  new Question("Who was awarded the Man of the Match award in Bayern's 8-2 thrashing of Barcelona?", ["Robert Lewandowski", "Thomas Muller","Manuel Neuer", "Lionel Messi"], "Thomas Muller"),
  new Question("Which Bayern Munich player scored the only goal of the Champions League final?", ["Joshua Kimmich", "David Alaba", "Kingsley Coman", "Leon Goretzka"], "Kingsley Coman"),
  new Question("Who scored PSG's last minute winner against Atalanta in the quarter-finals?", ["Neymar JR", "Kylian Mbappe", "Mauro Icardi", "Eric Maxim Choupo-Moting"], "Eric Maxim Choupo-Moting"),
  new Question("Which city hosted the final stages of the Champions League in August?", ["Amsterdam", "Lisbon", "Madrid", "Turin"], "Lisbon"),
  new Question("Alan Pardew left which Dutch side by 'mutual consent' back in April 2020?", ["Heracles", "Vitesse", "AZ Alkmaar", "ADO Den Haag"], "ADO Den Haag"),
  new Question("Slaven Bilic's last game for West Brom before he was sacked ended with which scoreline?", ["2-1 loss to Newcastle United", "1-1 draw vs Manchester City", "5-1 loss to Crystal Palace", "1-0 loss to Manchester United"], "1-1 draw vs Manchester City"),
  new Question("Which was the first Premier League match played when the league resumed in June?", ["Aston Villa vs. Sheffield United", "Norwich City vs. Southampton", "Manchester City vs. Arsenal", "Liverpool vs. Chelsea"], "Aston Villa vs. Sheffield United"),
  new Question("Who was the first Premier League manager to be sacked in 2020?", ["Manuel Pellegrini", "Nigel Pearson", "Eddie Rowe", "Jurgen Klopp"], "Nigel Pearson"),
  new Question("Valencia sold captain Dani Parejo and Francis Coquelin to which LaLiga side for a combined €8m?", ["Real Sociedad", "Villarreal", "Sevilla", "Athletic Bilbao"], "Villarreal"),
];


var quiz = new Quiz(questions);


populate();