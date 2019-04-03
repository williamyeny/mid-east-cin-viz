var circleY = 0
var circleX = 0
var angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  // background
  background(0, 10)

  fill(color(255))
  ellipse(mouseX, height - Math.pow(Math.pow(height*3/4, 2) - Math.pow(width/2-mouseX, 2), 0.5), 40, 40)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
