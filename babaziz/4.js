var flameX, flameY, rotateVal

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function draw() {
  background(0)

  // flame
  flameX = width-200 + (noise(frameCount/10)-0.5)*5
  flameY = height/2 + (noise(frameCount/10 + 5)-0.5)*5

  push()
  rotateVal = noise(frameCount/10) - 0.5
  fill(236,129,19)
  translate(flameX, flameY-10)
  rotate(rotateVal)
  ellipse(0, -10, 60, 80)
  pop()

  push()
  rotateVal = noise(frameCount/10 + 0.5) - 0.5
  fill(255,202,75)
  translate(flameX, flameY-5)
  rotate(rotateVal)  
  ellipse(0, -5, 45, 55)
  pop()

  fill(255,255,200)
  ellipse(flameX, flameY, 30, 30)
  
  strokeWeight(2)
  for (i = height/2+40; i < height; i += 2) {
    stroke(223,207,99, 255-i*0.4)
    line(width - 220, i, width - 180, i)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}