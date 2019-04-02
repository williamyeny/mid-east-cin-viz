var darkblue
var lightblue
var sands = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()

  darkblue = color(134,166,213)
  lightblue = color(195,207,221)

  setInterval(function() {
    sands.push({
      seed: Math.random() * 100,
      x: -5,
      y: Math.random() * height
    })
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
  stroke(color(168,138,112))
  strokeWeight(5)
  sands.forEach(function(sand) {
    point(sand.x, sand.y)
    sand.x += noise(sand.x + sand.seed) * 10
    sand.y += noise(sand.seed)

    if (sand.x > width) {
      delete sand
    }
  })
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
