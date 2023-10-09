const start = document.getElementById("start-button");
const timer = document.getElementById("timer");
const end = document.getElementById("game-over");
const score = document.getElementById("score");
const target = document.querySelector('.target');
const gameContainer = document.querySelector('.game-container');

start.addEventListener('click', () => {
    start.remove();
    gameTimer = setInterval(updateTimer, 1000);
    targetInterval = setInterval(createTarget, 3000);
})

function updateTimer() {
    if (timer.innerHTML == 0) {
        endGame();
    }
    timer.innerHTML -= 1;
}

function createTarget() {
    const maxX = 1185;
    const maxY = gameContainer.clientHeight - target.clientHeight;
    const randomX = 95 + Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = `${randomX}px`;
    target.style.top = `${randomY}px`;
    target.innerHTML = "test";
}

function endGame() {
    clearInterval(gameTimer);
    alert("Game Over! Your score is " + score.innerHTML);
    location.reload();
}