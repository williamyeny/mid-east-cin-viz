var t = 0
var pspace = 55
var pradius = 10

// heavily modified version of this: https://p5js.org/examples/interaction-wavemaker.html

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
}

function draw() {
  background(0)
  translate(-pradius, -pradius)

  pspace += (map(mouseX, 0, width, 57, 55) - pspace)/20
  pradius += (map(mouseY, 0, height, 10, 30) - pradius)/20
  fill(255)
  // make a x and y grid of ellipses
  for (let x = 0; x <= width + pradius*2; x = x + pspace) {
    for (let y = 0; y <= height + pradius*2; y = y + pspace) {
      // starting point of each circle depends on mouse position
      const xAngle = -4 * PI
      const yAngle = -4 * PI
      // and also varies based on the particle's location
      const angle = xAngle * (x / (width+pspace)) + yAngle * (y / height+pspace);

      // each particle moves in a circle
      const myX = x + pradius * cos(2 * PI * t + angle);
      const myY = y + pradius * sin(2 * PI * t + angle);

      // set color based on y value
      const blueness = map(sin(2 * PI * t + angle), -1, 1, 0, 255)
      fill(255-blueness, 255-blueness, 255)

      ellipse(myX, myY, 5); // draw particle
    }
  }
  

  t = t + 0.01; // update time
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}