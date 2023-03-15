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
  x: 0,
  y: 0,
  body: [],
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

  // respown food when snake eate food
  if (snake.x === food.x && snake.y === food.y) {
    snake.body.push([food.x, food.y]);
    console.log(snake.body);
    randomPlace(food);
  }

  // snake body's follows its head
  // the last dependency of body should be get semilast of dependeny index position
  for (let i = snake.body.length - 1; i > 0; i--) {
    snake.body[i] = snake.body[i - 1];
  }

  // now we should defined the first body dependency should be snake head position
  if (snake.body.length) {
    snake.body[0] = [snake.x, snake.y];
  } // the following snake body algorithm look easy, but understanding that for me was so hard, i can't beleave that, that's only 6 line :)

  // snake
  ctx.fillStyle = 'green';
  snake.x += velocityX * blockSize;
  snake.y += velocityY * blockSize;
  ctx.fillRect(snake.x, snake.y, blockSize, blockSize);
  for (let i = 0; snake.body.length > i; i++) {
    ctx.fillRect(snake.body[i][0], snake.body[i][1], blockSize, blockSize);
  }


  // now we need condition, how lose the game
  // if snake out of range screen should be head creash
  if (snake.x < 0 || snake.y < 0 || snake.x >= frame.width || snake.y >= frame.height) {
    gameOver('Snake head cresh');
  }

  // if snake crash with her body
  for (let i = 0; i < snake.body.length; i++) {
    if(snake.x == snake.body[i][0] && snake.y == snake.body[i][1]) {
      gameOver('You lose, body crash!');
    }
  }
}

// create random position
function randomPlace(obj) {
  obj.x = Math.floor(Math.random() * cols) * blockSize;
  obj.y = Math.floor(Math.random() * rows) * blockSize;
}

function moveHandler(e) {
  if (e.code == 'ArrowUp') {
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
