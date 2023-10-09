const url = new URL(window.location.href);
const difficulty = url.searchParams.get('difficulty');
console.log(difficulty);

const timer = document.getElementById("timer");
const end = document.getElementById("game-over");
let score = 0;
const start = document.querySelector('.start');
// const target = document.querySelector('.target');
const gameContainer = document.querySelector('.game-container');
let targetInterval;
let target;

start.addEventListener('click', () => {
    start.remove();
    createTarget();
    gameTimer = setInterval(updateTimer, 1000);
    targetInterval = setInterval(createTarget, 2000);
    // Promise.all([targetInterval, gameTimer]);
})

function updateTimer() {
    if (timer.innerHTML == 0) {
        endGame();
    }
    timer.innerHTML -= 1;
}

target.addEventListener('click', () => {
    score += 1;
    document.getElementById('score').innerHTML = score;
});

function createTarget() {
    // Remove the previous target element
    if (target) {
        target.removeEventListener('click', incrementScore);
        gameContainer.removeChild(target);
    }
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;
    const borderWidth = 20;

    const randomTop = Math.floor(Math.random() * (containerHeight - 20 - 2 * borderWidth)) + borderWidth;
    const randomLeft = Math.floor(Math.random() * (containerWidth - 20 - 2 * borderWidth)) + borderWidth;

    target = document.createElement('div');
    target.style.width = '20px';
    target.style.height = '20px';
    target.style.borderRadius = '100%';
    target.style.position = 'absolute';
    target.style.backgroundColor = 'red';
    target.style.left = `${randomLeft}px`;
    target.style.top = `${randomTop}px`;

    target.addEventListener('mouseover', () => {
        target.style.cursor = 'pointer';
    });

    target.addEventListener('click', incrementScore);
    gameContainer.appendChild(target);
}

function incrementScore() {
    score += 1;
    document.getElementById('score').innerHTML = score;
    clearInterval(targetInterval);
    createTarget();
    targetInterval = setInterval(createTarget, 2000);
}

function endGame() {
    clearInterval(gameTimer);
    clearInterval(targetInterval);
    if (target) {
        target.removeEventListener('click', incrementScore);
    }
    alert("Game Over! Your score is " + document.getElementById('score').innerHTML);
    location.reload();
}