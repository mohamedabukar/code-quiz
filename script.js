var startButton = document.querySelector(".start-button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var quiz = document.querySelector(".quiz");
var choices = document.querySelector(".choices");

var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;
var passed = false;
var secondsLeft = 15;
var timer;
var timerCount;
var index = 0;

var timeEl = document.querySelector(".timer-count");

var questions = [
    {
        question: "what is 1+1?",
        answers: [2, 3, 4, 5],
        correctAnswer: 2
    },
    {
        question: "what is 5+5?",
        answers: [8, 10, 11, 13],
        correctAnswer: 10
    }
]

function getCorrectAnswers() {
    var correctAnswers = localStorage.getItem("correctAnswer");
    if (correctAnswers === null) {
        correctAnswersCounter = 0;
    } else {
        correctAnswersCounter = correctAnswers;
    }
}

function startGame() {
    console.log(questions[index].question)
    quiz.textContent = questions[index].question;
    for (var i = 0; i < questions[index].answers.length; i++) {

        //create button for each answer
        var choiceBtn = document.createElement("BUTTON");
        //display each of the answers onto the button
        choiceBtn.textContent = questions[0].answers[i]
        choices.appendChild(choiceBtn)
        timer();
    }
}

function timer() {
    let timerInterval = setInterval(function () {
        
        timeEl.textContent = secondsLeft;
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            
        } else {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
        }
    }, 1000);
}

//when one of the choices is clicked
//index++;
//startGame()

startButton.addEventListener("click", startGame);