var straightBalls = []
var curveBalls = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  // frameRate(5)
}

setInterval(function() {
  straightBalls.push({
    x: -10,
    y: random(height),
    lastX: -20
  })
  strokeWeight(2)
}, 2000)

function draw() {
  fill(255)
  rect(0, 0, mouseX, height)
  fill(0)
  rect(mouseX, 0, width, height)

  straightBalls.forEach(function(b) {
    if (b.x > width + 10) {
      straightBalls.splice(straightBalls.indexOf(b), 1)
    }
    if (b.x > mouseX && b.lastX <= mouseX) {
      
    } 
    lastX = b.x
    b.x += 10

    if (b.offsetX > 0) {
      console.log("oof: " + b.offsetX)
      b.y = 200*sin(b.x/80 + b.offsetX) + b.offsetY
      b.x += 5
    } else {
      b.x += 10
    }

    fill(255)
    ellipse(b.x, b.y, 10)

  })

  curveBalls.forEach(function(b) {
    b.x += 5
    b.y = 200*sin(b.x/80)
  })
} 


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}