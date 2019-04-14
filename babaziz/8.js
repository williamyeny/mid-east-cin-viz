var size = 0
var div

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30)
  background(0)
}

function mouseMoved() {
  div = 10
}

function draw() {
  background(0, 10)
  translate(width/2, height/2)
  stroke(255)
  noFill()
  beginShape()
  for (a = 0; a < TWO_PI; a+=0.1) {
    var xoff = map(cos(a), -1, 1, 0, 5)
    var yoff = map(sin(a), -1, 1, 0, 5)
    
    var r = map(noise(xoff, yoff, frameCount/div), 0, 1, size/2, size)
    curveVertex(r * cos(a), r * sin(a))
  }
  endShape(CLOSE)
  size += 10
  if (size > width) {
    size = 0
  }

  div += (20 - div)/20
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = max(width, height)
}