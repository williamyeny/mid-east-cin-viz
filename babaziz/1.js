var darkblue
var lightblue
var sands = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()

  darkblue = color(134,166,213)
  lightblue = color(195,207,221)

  setInterval(function() {
    sands.push(new Sand(-5, Math.random() * height))
  }, 200)
}

function draw() {
  // gradient background
  for (i = 0; i <= height; i++) {
    let inter = map(i, 0, mouseY + height/2, 0, 1);
    let c = lerpColor(darkblue, lightblue, inter);
    stroke(c);
    line(0, i, width, i);
  }
  stroke(color(198,168,142))
  strokeWeight(5)
  sands.forEach(function(sand) {
    point(sand.x, sand.y)
    sand.x += noise(sand.x + sand.seed) * 10
    sand.y += noise(sand.y + sand.seed) * 10
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Sand {
  Sand(x, y) {
    this.seed = Math.random() * 100
    this.x = x
    this.y = y
  }
}