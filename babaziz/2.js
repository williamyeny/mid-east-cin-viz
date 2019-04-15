var circleY = 0
var circleX = 0
var angle = 0
var moonDist = 0
var stars = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  moonDist = height*3/4
  for (i = 0; i < 300; i++) {
    stars.push({
      dist: random(width), // distance to bottom middle of screen
      angle: random(TWO_PI), // angle relative to bottom middle of screen (used as offset)
      size: random(2, 6)
    })
  }
}

function draw() {
  // background
  background(0, 50)

  fill(color(255))
  angle += (atan2(mouseY - height, mouseX - width/2) - angle)/10
  ellipse(cos(angle)*moonDist + width/2, sin(angle)*moonDist + height, 40)
  
  stars.forEach(function(s) {
    ellipse(cos(angle/5 + s.angle)*s.dist + width/2, sin(angle/5 + s.angle)*s.dist + height, s.size)
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
