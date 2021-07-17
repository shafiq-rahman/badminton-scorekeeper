player1 = {
    number: 1,
    score: 0,
    button: document.querySelector("#plusPlayer1"),
    text: document.querySelector("#player1")
}
player2 = {
    number: 2,
    score: 0,
    button: document.querySelector("#plusPlayer2"),
    text: document.querySelector("#player2")
}

const reset = document.querySelector("#reset")
const selectWinPoint = document.querySelector("#maxScore")
const comment = document.querySelector(".subtitle")
let isgameOver = false
let winpoint = 7

function updateScore(player, opponent) {
    player.score += 1
    player.text.textContent = player.score
    if (!isgameOver) {
        if (player.score == winpoint - 1) {
            checkTie()
        }
        if (player.score === winpoint) {
            player.text.classList.add("has-text-success")
            opponent.text.classList.add("has-text-danger")
            comment.classList.remove("has-text-danger")
            comment.classList.add("has-text-success", "has-text-weight-bold")
            comment.textContent = ` Player ${player.number} Wins !!`
            player.button.disabled = true
            opponent.button.disabled = true
        }
    }
}

selectWinPoint.addEventListener("change", function () {
    winpoint = parseInt(selectWinPoint.value)
})

player1.button.addEventListener("click", function () {
    updateScore(player1, player2)
})

player2.button.addEventListener("click", function () {
    updateScore(player2, player1)
})

reset.addEventListener("click", function () {
    for (let player of [player1, player2]) {
        player.score = 0
        player.text.textContent = 0
        player.text.classList.remove("has-text-success", "has-text-danger")
        player.button.disabled = false
    }
    comment.classList.remove("has-text-success", "has-text-danger", "has-text-weight-bold")
    comment.textContent = "Tap the button to view the score"
    winpoint = parseInt(selectWinPoint.value)
})

function checkTie() {
    if (player1.score === player2.score) {
        winpoint++
        comment.classList.add("has-text-danger", "has-text-weight-bold")
        comment.textContent = `Tie Break : ${winpoint} to Win`
    }
}
