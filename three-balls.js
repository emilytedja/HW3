var ballX = 0;
var ballXSpeed = 3;

var ballX2 = 0;
var ballXSpeed2 = 5;

var ballX3 = 0;
var ballXSpeed3 = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, 200, 20);
  ellipse(ballX2, 100, 20);
  ellipse(ballX3, 300,20);
  
  ballX = ballX + ballXSpeed;
  ballX2 = ballX2 + ballXSpeed2;
  ballX3 = ballX3 + ballXSpeed3;
  
  //first ball bounce
  if (ballX > width) {
    ballXSpeed = -ballXSpeed;
  }
    if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
  // Second ball bounce
    if (ballX2 > width) {
    ballXSpeed2 = -ballXSpeed2;
  }
    if (ballX2 < 0) {
    ballXSpeed2 = -ballXSpeed2;
  }
  //third ball bounce
    if (ballX3 > width) {
    ballXSpeed3 = -ballXSpeed3;
  }
    if (ballX3 < 0) {
    ballXSpeed3 = -ballXSpeed3;
  }
}
