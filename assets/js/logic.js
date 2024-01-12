var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start")

var questionsDiv = document.querySelector("#questions")

var timerEL = document.querySelector("#time")
var timerDiv = document.querySelector(".timer")
var timeLeft = 75
timerEL.textContent = `${timeLeft} Secconds remaining`


function startQuiz(){
    startScreen.remove()
    questionsDiv.classList.remove("hide")
    startTimer()
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

startButton.addEventListener("click",startQuiz)