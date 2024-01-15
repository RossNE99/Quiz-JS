var highscoresOL = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")
var feedbackDiv = document.querySelector("#feedback")

function getHighScores(){
    var highScores = JSON.parse(localStorage.getItem("scores"))
    return highScores
}

function renderHighscores(highScores){
    highscoresOL.innerHTML = ""
    if(highScores.length < 1){
        var highScoreH3 = document.createElement("h3")
        highScoreH3.textContent = `There are no highsores yet`
        highscoresOL.appendChild(highScoreH3)
        return
    }
    highScores.sort((a, b) => b.score - a.score)
    highScores.forEach((score) => {
        var highScoreLI = document.createElement("li")
        highScoreLI.textContent = `${score.initials} - ${score.score}`
        highscoresOL.appendChild(highScoreLI)
    });
}

function clearHighScores(){
    if(getHighScores() < 1){
        feedbackDiv.classList.remove("hide")
        feedbackDiv.textContent = "There are currently no high scores"
        feedbackDiv.style.color = "red"
    
        setTimeout(() => {
            feedbackDiv.classList.add("hide")
        }, 3000)
        return
    } 
    localStorage.setItem("scores", "[]")
    renderHighscores(getHighScores())
    feedbackDiv.classList.remove("hide")
    feedbackDiv.textContent = "All high scores have been reset"
    feedbackDiv.style.color = "green"

    setTimeout(() => {
        feedbackDiv.classList.add("hide")
    }, 3000)
}

renderHighscores(getHighScores())

clearButton.addEventListener("click", clearHighScores)

