var balls = []
var barrierX

function setup() {
  createCanvas(windowWidth, windowHeight)
  // frameRate(5)
  barrierX = width/2
}

setInterval(function() {
  var nh = random(height)
  balls.push({
    x: -10,
    y: nh,
    mode: 0,
    offsetX: 0,
    offsetY: nh
  })
}, 2000)

function draw() {

  barrierX += (mouseX - barrierX)/10

  noStroke()
  fill(255)
  rect(0, 0, barrierX, height)
  fill(0, 50)
  rect(barrierX, 0, width, height)

  stroke(0)
  balls.forEach(function(b) {
    if (b.x > width + 10) {
      balls.splice(balls.indexOf(b), 1)
    }
    if (b.x > barrierX && b.mode == 0) {
      b.offsetX = barrierX
      b.offsetY = b.y
      b.mode = 1
    } else if (b.x < barrierX && b.mode == 1) {
      b.offsetX = 0
      b.offsetY = 0
      b.mode = 0
    }
    b.lastX = b.x
    if (b.offsetX > 0) {
      b.y = 500*noise(b.x/100) - 500*noise(b.offsetX/100) + b.offsetY
      b.x += 2
      fill(255*noise(frameCount/50 + b.offsetY), 255*noise(frameCount/50 + b.offsetY + 10), 255*noise(frameCount/50 + b.offsetY + 20))
    } else {
      b.x += 10
      fill(255)
    }
    
    ellipse(b.x, b.y, 20)

  })
} 


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}