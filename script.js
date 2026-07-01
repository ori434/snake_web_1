const grid = document.getelementbyid('grid');
const scoredisplay = document.getelementbyid('score');
let squares = {};
let currentsnake = [2, 1, 0];
let direction = 1;
let appleindex = 0;
let score = 0;
let timerid = 0;
let intervaltime = 200;

function endgame () {

function createbored() {
  for (let i = 0; i < 400; i++) {
    const square = document.createlement('div');
    grid.appendchild(square);
    squares.push(square);
  }
}
createbored();
gen

function startgame() {
  currentsnake.foreach(undex=> squares[index].classlist.remove('snake'));
  squares[appleindex].classlist.remove('apple');
  clearinteravl(timeid);
}

function move() {
  const hitbottom = (currentsnake[0] + 20 >= 400 && direction === 20);
  const hittop = (currentsnake[0] - 20 < 0 && direction === -20);
  const hitright = (currentsnake[0] % 20 === 19 && direction === 1);
  const hitleft = (currentsnake[0] % 20 === 0 && direction ===-1);
  const hitself= sqaures[currentsnake[0] + direction]?.classlist.contains('snake');
}

function generateapple() {
  do {
    appleindex = Math.floor(Math.random() * squares.length);
  } while (squares[appleindex].classlist.contains('snake'));
  squares[appleindex].classlist.add('apple');
}

function changeDir(newdir) {

  if (direction + newdir !== 0) {
    direction = newdir;
  }
}


document.addEventListener('keydown', (e) => {
  if (e.key === 'arrowup') changeDir(-20);
  if (e.key === 'arrowdown') changeDir(20);
  if (e.key === 'arrowleft') changeDir(1);
  if (e.key === 'arrowright') changeDir(-1);
})
