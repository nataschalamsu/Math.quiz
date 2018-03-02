var operator = ['+', '*', '-', '/'];
var num1 = Math.round(Math.random() * 100 + 1);
var num2 = Math.round(Math.random() * 100 + 1);
var life = 3;
var score = 0;
var questions = document.getElementById('questions');
var currentLife = document.getElementById('currentLife');
var currentScore = document.getElementById('score');
var status = document.getElementById('status');
var userAnswers = document.getElementById('answers');
var submit = document.getElementById('submit');
var answers = 0;

window.onload = function() {
  quizzes();
}

function quizzes() {
  num1 = Math.round(Math.random() * 10 + 1);
  num2 = Math.round(Math.random() * 10 + 1);
  life = 3;
  score = 0;
  currentScore.innerHTML = score;
  currentLife.innerHTML = life;
  var index = Math.floor(Math.random() * operator.length)
  questions.innerHTML = num1 + ' ' + operator[index] + ' ' + num2;
}

submit.onclick = function() {checkAnswer()}

function checkAnswer() {
  answers = num1 + operator[index] + num2;
  if(userAnswers.innerHTML === answers) {
    win();
  } else {
    lose();
  }
}

// function addScore() {
//   score = 0;
//   life = 3;
//   if(answers === questions) {
//     score += 10;
//     currentScore.innerHTML = score;
//   } else if(score === 100) {
//     win();
//   } else {
//     life--;
//     score;
//     currentScore.innerHTML = score;
//     currentLife.innerHTML = life;
//     if(life === 0) {
//       lose();
//     }
//   }
// };

function lose() {
  status.innerHTML = 'You Lose! Try Again'
}

function win() {
  status.innerHTML = 'You Win! Congratulations!'
}
