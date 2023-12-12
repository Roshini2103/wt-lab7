const boardElement = document.getElementById('board');
const counterElement = document.getElementById('counter');
const scorecardElement = document.getElementById('scorecardpoints');
let count = 0;
let scorecard = 0;
const squares = [];

for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('click', () => toggleSquare(x, y));
        boardElement.appendChild(square);
        squares.push(square);
    }
}
initializeBoard();

function toggleSquare(x, y) {
    squares[y * 5 + x].classList.toggle('is-off');
    flipAdjacentSquares(x, y);
    checkWinCondition();
    count++;
    counterElement.innerHTML = count;
    scorecard=count*5;
    scorecardElement.innerHTML = scorecard;
}

function flipAdjacentSquares(x, y) {
    const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
    ];

    for (const [neighborX, neighborY] of neighbors) {
        if (neighborX >= 0 && neighborX < 5 && neighborY >= 0 && neighborY < 5) {
            squares[neighborY * 5 + neighborX].classList.toggle('is-off');
        }
    }
}

function checkWinCondition() {
    if (document.querySelectorAll('.square.is-off').length === 1 || document.querySelectorAll('.square.is-off').length === 0) {
        alert('You win!');
    }
}

function initializeBoard() {
    let isSolvable = false;
    while (!isSolvable) {
        for (const square of squares) {
            square.classList.remove('is-off');
        }

        const simulatedClicks = [];
        while (simulatedClicks.length < 100) {
            const randomX = Math.floor(Math.random() * 5);
            const randomY = Math.floor(Math.random() * 5);
            simulatedClicks.push([randomX, randomY]);
            count=0;
            scorecard=0;
            toggleSquare(randomX, randomY);
        }

        isSolvable = isBoardSolved(squares);
    }
}

function isBoardSolved(board) {
    return board.every(row => row.every(cell => cell === 0));
}