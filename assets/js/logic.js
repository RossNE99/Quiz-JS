var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")

var questionsDiv = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var questionChoises = document.querySelector("#choices")

var timerEL = document.querySelector("#time")
var timerDiv = document.querySelector(".timer")
var timeLeft = 75
timerEL.textContent = `${timeLeft} Secconds remaining`

var questionsAlreadyAsked = []


function startQuiz(){
    questionsAlreadyAsked = []
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
    return randQuestion
}

function renderQuestionAndAnswers(currentQuestion){
    questionTitle.textContent = currentQuestion.question
    currentQuestion.answers.forEach((answer, i) => {
        var answerBTN = document.createElement("button")
        answerBTN.textContent = `${i+1}. ${answer}`
        questionChoises.appendChild(answerBTN)
    });
}

startButton.addEventListener("click",startQuiz)