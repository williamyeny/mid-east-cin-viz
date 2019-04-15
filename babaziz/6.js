var t = 0
var pspace = 55
var pradius = 10
var circles = []

// heavily modified version of this: https://p5js.org/examples/interaction-wavemaker.html

function setup() {
  createCanvas(windowWidth, windowHeight)
  // circles.push({
  //   x: width/2,
  //   y: 0,
  //   speed: 0,
  //   gravity: 1,
  //   alpha: 255
  // })

}

function mouseMoved() {
  var r = random(0.2, 2)
  circles.push({
    x: mouseX,
    y: mouseY,
    speed: 0,
    gravity: r,
    alpha: 255,
    size: 60/r
  })
}

function draw() {
  background(255)
  fill(0)
  rect(0, height/2, width, height/2)

  circles.forEach(function(c) {
    c.y += c.speed
    if (c.y < height/2) {
      c.speed += c.gravity
      if (c.y + c.speed >= height/2) { // if cross middle
        c.speed *= 0.7 // add some friction
        if (c.speed < 2) { // if it's really low (i.e. vibrating at the middle)
          c.speed = 0
        }
      }
    } else {
      c.speed -= c.gravity
    }

    if (c.speed == 0) {
      c.alpha -= 10
    }
    if (c.alpha <= 0) {
      circles.splice(circles.indexOf(c), 1)
    }
  
    stroke(255, c.alpha)
    fill(0, c.alpha)
    ellipse(c.x, c.y, c.size)
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}