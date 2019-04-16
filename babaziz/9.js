var curves = []
var amplitude = 200

function setup() {
  createCanvas(windowWidth, windowHeight)
  curves.push({
    y: -amplitude,
    seed: 0
  })
  noFill()

  setInterval(function() {
    curves.push({
      y: -amplitude,
      seed: frameCount // guarantee each curve is unique
    })
  }, 1000)
}

function draw() {
  background(22,25,53, 10)
  stroke(158,123,88, 200)
  strokeWeight(2)
  for (i = 0; i < curves.length; i++) {
    if (curves[i].y > height*2) {
      curves.splice(i, 1)
      continue
    }

    // amplitude: height of the curve
    // frameCount/20: on each new frame, make a new curve
    // seed: make sure each generated curve is different
    // y: position of curve
    bezier(
      0, // x1
      amplitude * noise(frameCount/50 + curves[i].seed + 10) + curves[i].y, // y1
      width/2, // x2
      amplitude * noise(frameCount/50 + curves[i].seed + 30) + curves[i].y, // y2
      width*3/4,
      amplitude * noise(frameCount/50 + curves[i].seed + 50) + curves[i].y,
      width,
      amplitude * noise(frameCount/50 + curves[i].seed + 70) + curves[i].y
    )

    curves[i].y += 3
  }
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}