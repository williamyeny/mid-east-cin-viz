var size = 0
var div = 20
var seed

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  background(0)
  seed = 0
}

function mouseMoved() {
  div = 5
}

function draw() {
  background(0, 10)
  translate(width/2, height/2)
  stroke(255)
  noFill()
  beginShape()
  for (a = seed; a < TWO_PI + seed; a+=0.1) {
    var xoff = map(cos(a), -1, 1, 0, 5)
    var yoff = map(sin(a), -1, 1, 0, 5)
    
    var r = map(noise(xoff, yoff, frameCount/div), 0, 1, size/2, size)
    curveVertex(r * cos(a), r * sin(a))
  }
  endShape(CLOSE)
  size += 10
  if (size > width) {
    size = 0
    seed = frameCount
  }

  div += (20 - div)/5
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = max(width, height)
}