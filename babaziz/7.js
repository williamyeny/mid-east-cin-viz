var circles = []
var radius
var angle

function setup() {
  createCanvas(windowWidth, windowHeight)
  radius = max(width, height)/2
}


setInterval(function() {
  spawnCircle()
}, 200)

function spawnCircle() {
  // random angle
  angle = random(2 * PI)
  var circleX = cos(angle)*radius + width/2 // use angle to position circles outside of screen
  var circleY = sin(angle)*radius + height/2
  circles.push({
    x: circleX,
    y: circleY,
    size: random(10, 40),
    speed: 10
  })
}

function draw() {
  fill(255)
  background(0)

  circles.forEach(function(c) {
    var mouseAngle = atan2(mouseY - c.y, mouseX - c.x)
    c.x += cos(mouseAngle) * c.speed
    c.y += sin(mouseAngle) * c.speed
  
    ellipse(c.x, c.y, c.size)

    if (c.size <= 0) {
      circles.splice(circles.indexOf(c), 1)
      console.log("delete")
    }
    

  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = max(width, height)
}