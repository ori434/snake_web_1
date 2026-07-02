const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let currentSnake =[2,1,0];
let direction = 1;
let appleIndex = 0;
let score = 0;
let timerId = 0;
let intervalTime = 200;

function createBoard() {
  for (let i = 0; i < 400; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    squares.push(square);
  }
}
createBoard();

function startGame() {
  backGMusic();
  currentSnake.forEach(index => squares[index].classList.remove('snake'));
  squares[appleIndex].classList.remove('apple');
  clearInterval(timerId);
  
  score = 0;
  scoreDisplay.textContent = score;
  direction = 1;
  intervalTime = 200;
  currentSnake =[2,1,0];
  
  currentSnake.forEach(index => squares[index].classList.add('snake'));
  generateApple();
  
  timerId = setInterval(move, intervalTime);
}

function move() {
  const hitBottom = (currentSnake[0] + 20 >= 400 && direction === 20);
  const hitTop = (currentSnake[0] - 20 < 0 && direction === -20);
  const hitRight = (currentSnake[0] % 20 === 19 && direction === 1);
  const hitLeft = (currentSnake[0] % 20 === 0 && direction === -1);
  const hitSelf = squares[currentSnake[0] + direction]?.classList.contains('snake');

  if (hitBottom || hitTop || hitRight || hitLeft || hitSelf) {
    return endGame();
  }

  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);

  if (currentSnake[0] === appleIndex) {
    eatM();
    squares[appleIndex].classList.remove('apple');
    currentSnake.push(tail);

    squares[tail].classList.add('snake');
    
    generateApple();
    score++;
    scoreDisplay.textContent = score;
    
    clearInterval(timerId);
    intervalTime = intervalTime * 0.95;
    timerId = setInterval(move, intervalTime);
  }

  squares[currentSnake[0]].classList.add('snake');
}

function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains('snake'));
  squares[appleIndex].classList.add('apple');
}

function changeDir(newDir) {
  if (direction + newDir !== 0) {
    direction = newDir;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') changeDir(-20);
  if (e.key === 'ArrowDown') changeDir(20);
  if (e.key === 'ArrowLeft') changeDir(-1);
  if (e.key === 'ArrowRight') changeDir(1);
});

function endGame(){
  gameOver();
  return clearInterval(timerId);
}

const backgroundmusic = new Audio('assets/bgmusic.mp3');
const eat = new Audio('assets/eat.mp3');
const GameOver = new Audio('assets/endgamemusic.mp3');

function backGMusic(){
  backgroundmusic.play();
}
function eatM(){
  eat.currentTime = 0;
  eat.play();
}
function gameOver(){
  backgroundmusic.pause();
  backgroundmusic.currentTime = 0;
  GameOver.play();
}
