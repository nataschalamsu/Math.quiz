var operator = ['+', '*', '-', '/'];
var num1 = Math.round(Math.random() * 100 + 1);
var num2 = Math.round(Math.random() * 100 + 1);
var index = Math.floor(Math.random() * operator.length);
var life = 3;
var score = 0;
var questions = document.getElementById('questions');
var currentLife = document.getElementById('currentLife');
var currentScore = document.getElementById('score');
var userStatus = document.getElementById('status');
var userAnswers = document.getElementById('answers');
var submit = document.getElementById('submit');
var answers = 0;

window.onload = function() {
  quizzes();
}

answerCalculate();

function answerCalculate() {
  switch(index) {
    case 0: answers = num1 + num2; break;
    case 1: answers = num1 * num2; break;
    case 2: answers = num1 - num2; break;
    case 3: answers = num1 / num2; break;
  }
}

function quizzes() {
  num1 = Math.round(Math.random() * 10 + 1);
  num2 = Math.round(Math.random() * 10 + 1);
  questions.innerHTML = num1 + ' ' + operator[index] + ' ' + num2;
}



submit.onclick = function() {checkAnswer()}

function checkAnswer() {
  if(userAnswers.value === answerCalculate()) {
    win();
  } else {
    lose();
  }
}

function lose() {
  userStatus.innerHTML = 'You Lose! Try Again'
}

function win() {
  userStatus.innerHTML = 'You Win! Congratulations!'
}
