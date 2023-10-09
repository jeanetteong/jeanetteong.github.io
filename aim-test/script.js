const start = document.getElementById("start-button");
const timer = document.getElementById("timer");
const end = document.getElementById("game-over");
const score = document.getElementById("score");

start.addEventListener('click', () => {
    start.remove();
    gameTimer = setInterval(updateTimer, 1000);
})

function updateTimer() {
    if (timer.innerHTML == 0) {
        endGame();
    }
    timer.innerHTML -= 1;
}

function endGame() {
    clearInterval(gameTimer);
    alert("Game Over! Your score is "+score.innerHTML);
    location.reload();
}