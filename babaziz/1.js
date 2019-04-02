var darkblue
var lightblue
var sands = []
var backgroundY = 0.0

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
    let inter = map(i, 0, backgroundY + height/2, 0, 1);
    let c = lerpColor(darkblue, lightblue, inter);
    stroke(c);
    line(0, i, width, i);
  }

  // sands
  stroke(color(168,138,112))
  strokeWeight(5)
  sands.forEach(function(sand) {
    point(sand.x, sand.y + backgroundY / 5)
    sand.x += noise(sand.x + sand.seed) * 10
    sand.y += noise(sand.seed)

    if (sand.x > width) {
      delete sand
    }
  })

  // smooth transition to mouseY
  backgroundY += (mouseY - backgroundY) / 30
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
