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

  update();

} 

function update() {
  // black screen
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, frame.width, frame.height);

  // food 
  randomPlace(food)
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
