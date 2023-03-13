// frame config
var frame;
var ctx;
var blockSize = 25;
var cols = 21;
var rows = 21;

window.onload = function() {
  frame = document.getElementById('frame');
  ctx = frame.getContext('2d');
  frame.width = cols * blockSize;
  frame.height = cols * blockSize;

  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, frame.width, frame.height)
} 
