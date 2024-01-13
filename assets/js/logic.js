var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")

var questionsDiv = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var questionChoises = document.querySelector("#choices")

var timerEL = document.querySelector("#time")
var timerDiv = document.querySelector(".timer")
var timeLeft = 75
var timePenalty = 15
timerEL.textContent = `${timeLeft} Secconds remaining`

var questionsAlreadyAsked = []
var currentQuestion;

var score = 0
var scoreIncrement = 11;


function startQuiz(){
    questionsAlreadyAsked = []
    score = 0
    startScreen.remove()
    questionsDiv.classList.remove("hide")
    startTimer()
    renderQuestionAndAnswers(getRandomQuestion())
}

function startTimer(){
    var timeInterval = setInterval(function () {
    if(timeLeft >= 10){
        timerEL.textContent = `${timeLeft} Secconds remaining`
    } else if (timeLeft < 10 && timeLeft > 1) {
        timerDiv.style.color = "red"
        timerEL.textContent = `${timeLeft} Seccond remaining`
    } else if (timeLeft === 1) {
        timerEL.textContent = `${timeLeft} Seccond remaining`
    } else {
        clearInterval(timeInterval)
        timerDiv.remove()
    }
    timeLeft--
    }, 1000);
}

function getRandomQuestion(){
    var randomIndex = Math.floor(Math.random()*quizData.length)
    while (questionsAlreadyAsked.includes(randomIndex)){
        randomIndex = Math.floor(Math.random()*quizData.length)
    }
    questionsAlreadyAsked.push(randomIndex)
    var randQuestion = quizData[randomIndex]
    currentQuestion = randQuestion //i tried to avoid having currentQuestion as a global variabale but i didnt know how to get this into the event handeler :(
    return randQuestion
}

function renderQuestionAndAnswers(currentQuestion){
    questionChoises.innerHTML = "" //removes previus buttons
    questionTitle.textContent = currentQuestion.question
    currentQuestion.answers.forEach((answer, i) => {
        var answerBTN = document.createElement("button")
        answerBTN.setAttribute("data-index", i)
        answerBTN.textContent = `${i+1}. ${answer}`
        questionChoises.appendChild(answerBTN)
    });

}

function onAnswerSelect(e){
    var element = e.target
    if(element.matches("button") === true){
        var index = parseInt(element.getAttribute("data-index"));
        var correctAnswerIndex = currentQuestion.answers.indexOf(currentQuestion.correctAnswer)
        if(index === correctAnswerIndex){
            score += scoreIncrement
        } else {
            timeLeft -= timePenalty
        }

        renderQuestionAndAnswers(getRandomQuestion())
    }
}


startButton.addEventListener("click",startQuiz)
questionChoises.addEventListener("click", onAnswerSelect)