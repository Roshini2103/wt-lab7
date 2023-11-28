const gameContainer = document.getElementById("game-container");
const heart = document.getElementById("heart");
var up = document.getElementById("scores");
let score = 0;

heart.addEventListener("click", shootHeart);

function shootHeart() {
    score++;
    alert("Shot my heart! Score: " + score);
    up.innerHTML=score;
    resetHeartPosition();
}

function resetHeartPosition() {
    const maxX = gameContainer.clientWidth - heart.width;
    const maxY = gameContainer.clientHeight - heart.height;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    heart.style.left = newX + "px";
    heart.style.top = newY + "px";
}
