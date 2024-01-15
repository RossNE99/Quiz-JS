var highscoresOL = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")

function getHighScores(){
    var highScores = JSON.parse(localStorage.getItem("scores"))
    return highScores
}

function renderHighscores(highScores){
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
    if(getHighScores() < 1) return
    localStorage.setItem("scores", "[]")
    renderHighscores(getHighScores())
}

renderHighscores(getHighScores())

clearButton.addEventListener("click", clearHighScores)

