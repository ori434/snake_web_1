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
