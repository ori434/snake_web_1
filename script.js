const grid = document.getelementbyid('grid');
const scoredisplay = document.getelementbyid('score');
let squares = {};
let currentsnake = {2, 1, 0};
let direction = 1;
let appleindex = 0;
let score = 0;
let timerid = 0;
let intervaltime = 200;


function createbored() {
  for (let i = 0; i < 400; i++) {
    connst square = document.createlement('div');
    grid.appendchild(square);
    squares.push(square);
  }
}
creatbored();


fuction startgame() {
  currentsnake.foreach(undex=> squares[index].classlist.remove('snake'));
  squares[appleindex].classlist.remove('apple');
  clearinteravl(timeid);
}

function move() {
  const hitbottom = (currentsnake[0] + 20 >= 400 && direction === 20);
  const hittop = (currentsnake[0] - 20 < 0 && direction === -20);
  const hitright = (currentsnake[0] % 20 === 19 && direction === 1);
  const hitleft = (currentsnake[0] % 20 === 0 && direction ===-1);
  const hitself= sqaures[currentsnake[0] + direction]?classlist.contains('snake');
}
