var operator = ['+', '*', '-', '/'];
var num1 = Math.round(Math.random() * 100 + 1);
var num2 = Math.round(Math.random() * 100 + 1);
var index = Math.floor(Math.random() * operator.length);
var questions = document.getElementById('questions');
var nameBox = document.getElementById('name');
var userName = document.getElementById('yourName')
var userStatus = document.getElementById('status');
var userAnswers = document.getElementById('answers');
var submit = document.getElementById('submit');
var submitName = document.getElementById('submitName');
var answers = 0;

window.onload = function() {
  quizzes();
}

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

submitName.onclick = function() {yourName()};

function yourName() {
  names = nameBox.value;
  if(names !== '') {
    userName.innerHTML = 'Hi! ' + names;
    submit.disabled = false;
  } else {
    userName.innerHTML = 'Please enter your name';
    submit.disabled = true;
  }
}

submit.onclick = function() {checkAnswer()};

function checkAnswer() {
  answerCalculate();
  if(userAnswers.value == answers) {
    win();
  } else {
    lose();
  }
}

function lose() {
  userStatus.innerHTML = 'Wrong! You Lose! Try Again'
}

function win() {
  userStatus.innerHTML = 'Correct! You Win! Congratulations!'
}
