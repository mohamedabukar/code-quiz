var startButton = document.querySelector(".start-button");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var quiz = document.querySelector(".quiz");
var choices = document.querySelector(".choices");

var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;
var timer;
var timerCount;
var index = 0;
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
    for(var i = 0; i < questions[index].answers.length; i++){
        //choices.textContent = questions[0].answers[i];
        //create button for each answer
        var choiceBtn = document.createElement("BUTTON");
        //display each of the answers onto the button
        choiceBtn.textContent = questions[0].answers[i]
        //append the button to choices div 
        choices.appendChild(choiceBtn)

        //create click event to click on the answer
    }
}

function x (){
    
}

//when one of the choices is clicked
//index++;
//startGame()

startButton.addEventListener("click", startGame);