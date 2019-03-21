var circleTimer = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(noise(frameCount/100) * 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
