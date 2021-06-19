var startButton = document.querySelector(".start-button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var quiz = document.querySelector(".quiz");
var choices = document.querySelector(".choices");

var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;
var passed = false;
var secondsLeft = 80;
var timer;
var timerCount;
var index = 0;

var timeEl = document.querySelector(".timer-count");

var title = [
    {
        question: "what is 1+1?",
        answers: [2, 3, 4, 5],
        correctAnswer: 2
    },
    {
        question: "what is 5+5?",
        answers: [8, 10, 11, 13],
        correctAnswer: 10
    },
    {
        question: "What is 7+7?",
        answers: [6, 16, 14, 20],
        correctAnswer: 14
    },
    {
        question: "What is 10+10?",
        answers: [12, 14, 30, 20],
        correctAnswer: 20
    },
]

function getCorrectAnswers() {
    var correctAnswer = localStorage.getItem("correctAnswer");
    if (correctAnswer === null) {
        correctAnswersCounter = 0;
    } else {
        correctAnswersCounter = correctAnswers;
    }
}

function startGame() {
    console.log(title[index].question)
    quiz.textContent = title[index].question;
    for (var i = 0; i < title[index].answers.length; i++) {

        //create button for each answer
        var choiceBtn = document.createElement("BUTTON");
        //display each of the answers onto the button
        choiceBtn.textContent = title[index].answers[i];
        choiceBtn.setAttribute("class", "button");
        choiceBtn.onclick = clickedQuestion;

        choices.appendChild(choiceBtn);
        //        var button = document.querySelector(".button");
        //        button.addEventListener("click", function (event) {
        //            console.log(this)
        //            console.log(event.target)
        // //clickedQuestion()

        //        })
    }
    //clickedQuestion(choiceBtn[0]);
    //console.log(choiceBtn[0])
    // choiceBtn.addEventListener("click", function () {
    //     console.log("button 2")
    //     clickedQuestion(choiceBtn[1]);
    // })
    // choiceBtn.addEventListener("click", function () {
    //     console.log("button 3")
    //     clickedQuestion(choiceBtn[2]);
    // })
    // choiceBtn.addEventListener("click", function () {
    //     console.log("button 4")
    //     clickedQuestion(choiceBtn[3]);
    // })
    timer();
}

function clickedQuestion(event) {
   // console.log(event.target.textContent);
    // console.log(title[index].correctAnswer);
    if (event.target.textContent != title[index].correctAnswer){
        index++;
        console.log("not equal")
        secondsLeft-=10;
    } else{
        console.log("equal")
        //choices.empty();
        index++;
        startGame();
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