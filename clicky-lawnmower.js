function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 80;

var x2;
var y2;
var radius;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-20-random(h));
  noStroke();

  x = x + 1;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      x = 0;
      h = 80;
    }
  }
  
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
