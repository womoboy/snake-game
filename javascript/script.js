// frame config
var frame;
var ctx;
var blockSize = 25;
var cols = 21;
var rows = 21;

// food
var food = {};

// snake
var snake = {};

window.onload = function() {
  frame = document.getElementById('frame');
  ctx = frame.getContext('2d');
  frame.width = cols * blockSize;
  frame.height = cols * blockSize;

  // spawn position snake
  randomPlace(snake)
  // spawn postion food
  randomPlace(food)

  // listening for action like press keys
  document.addEventListener('keyup', moveHandler);

  setInterval(update, 1000/10);

} 

function update() {
  // black screen
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);

  // food 
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, blockSize, blockSize);

  // snake
  ctx.fillStyle = 'green';
  ctx.fillRect(snake.x, snake.y, blockSize, blockSize);

}

// create random position
function randomPlace(obj) {
  obj.x = Math.floor(Math.random() * cols) * blockSize;
  obj.y = Math.floor(Math.random() * rows) * blockSize;
}

function moveHandler(e) {
  console.log(e.code)
}
