var X = 100;
var ballY = 0;
var ballYSpeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  ellipse(X, ballY, 20, 20);
  
  ballY = ballY + ballYSpeed
  
  if (ballY > height) {
    ballYSpeed = -ballYSpeed;
  }
    if (ballY < 0) {
    ballYSpeed = -ballYSpeed;
  }
}
