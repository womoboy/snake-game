// frame config
var frame;
var ctx;
var blockSize = 25;
var cols = 21;
var rows = 21;
var velocityX = 0;
var velocityY = 0;

// food
var food = {};

// snake
var snake = {
  x : 0,
  y : 0,
  body : [],
};

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

  setInterval(update, 1000 / 10);

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
  snake.x += velocityX * blockSize;
  snake.y += velocityY * blockSize;
  ctx.fillRect(snake.x, snake.y, blockSize, blockSize);
  for(let i = 0; snake.body.length > i; i++) {
    ctx.fillRect(snake.body[i][0], snake.body[i][1], blockSize, blockSize);
  }
  
  // respown food when snake eate food
  if(snake.x === food.x && snake.y === food.y) {
    snake.body.push([food.x, food.y]);
    console.log(snake.body);
    randomPlace(food);
  }

  // if snake out of range screen should be head creash
  if (snake.x < 0 || snake.y < 0 || snake.x >= frame.width || snake.y >= frame.height) {
    gameOver('Snake head cresh');
  }

}

// create random position
function randomPlace(obj) {
  obj.x = Math.floor(Math.random() * cols) * blockSize;
  obj.y = Math.floor(Math.random() * rows) * blockSize;
}

function moveHandler(e) {
  if(e.code == 'ArrowUp') {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == 'ArrowDown') {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == 'ArrowLeft') {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == 'ArrowRight') {
    velocityX = 1;
    velocityY = 0;
  }
}

function gameOver(str) {
  alert(str);
  return;
}
