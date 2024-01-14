var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")

var questionsDiv = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var questionChoises = document.querySelector("#choices")

var feedbackDiv = document.querySelector("#feedback")

var endScreenDiv = document.querySelector("#end-screen")
var finalScoreSpan = document.querySelector("#final-score")

var submitButton = document.querySelector("#submit")
var initialsInput = document.querySelector("#initials")

var playAgainButton = document.querySelector("#play-again")

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
    timeLeft = 75
    startScreen.remove()
    questionsDiv.classList.remove("hide")
    timerDiv.classList.remove("hide")
    endScreenDiv.classList.add("hide")
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
        timerDiv.classList.add("hide")
        endQuiz()
    }

    if(!endScreenDiv.classList.contains("hide")) { // this hides the timer on the end screen
        timerDiv.classList.add("hide")
        clearInterval(timeInterval)
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
    if(questionsAlreadyAsked.length >= quizData.length){ //user has answered all questions
        endQuiz()
        return
    }
    var element = e.target
    if(element.matches("button") === true){
        var index = parseInt(element.getAttribute("data-index"));
        var correctAnswerIndex = currentQuestion.answers.indexOf(currentQuestion.correctAnswer)
        feedbackDiv.classList.remove("hide")
        if(index === correctAnswerIndex){
            score += scoreIncrement
            feedbackDiv.style.color = "green"
            feedbackDiv.textContent = "Correct!"
        } else {
            timeLeft -= timePenalty
            feedbackDiv.style.color = "red"
            feedbackDiv.textContent = "Incorrect!"
        }

        setTimeout(() => {
            feedbackDiv.classList.add("hide")
        }, 1000)
        
        renderQuestionAndAnswers(getRandomQuestion())
    }
}

function endQuiz(){
    questionsDiv.classList.add("hide")
    endScreenDiv.classList.remove("hide")
    finalScoreSpan.textContent = score
    initialsInput.value = ""
}

function handelSubmitScore(){
    if(initialsInput.value.length < 2){
        feedbackDiv.classList.remove("hide")
        feedbackDiv.style.color = "red"
        feedbackDiv.textContent = "You initials must be atleast 2 characters. Score NOT saved"  
        setTimeout(() => {
            feedbackDiv.classList.add("hide")
        }, 3000)
        return
    }
    var submitData = {
        initials: initialsInput.value,
        score
    }
    var prevScores = JSON.parse(localStorage.getItem("scores"))
    if(!prevScores) prevScores = [];
    console.log(prevScores)
    localStorage.setItem("scores", JSON.stringify([...prevScores, submitData]))

    feedbackDiv.classList.remove("hide")
    feedbackDiv.textContent = "You score has been submitted"
    feedbackDiv.style.color = "green"

    setTimeout(() => {
        feedbackDiv.classList.add("hide")
    }, 3000)

}


startButton.addEventListener("click",startQuiz)
questionChoises.addEventListener("click", onAnswerSelect)
submitButton.addEventListener("click", handelSubmitScore)
playAgainButton.addEventListener("click", startQuiz)