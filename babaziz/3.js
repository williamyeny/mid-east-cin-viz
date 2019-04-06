var cols, rows
var scl = 120
var w = 2000
var h = 1500
var colorRand = 0
var flying = 0
var terrain = []

// to prevent reassignment in computationally-heavy for loops
var y, x

// credit where credit is due...
// this is a highly-modified version of CodingTrain's 3D terrain
// necessary optimizations were needed to make it run smoothly, such as reducing polygons and removing var initialization
// https://github.com/CodingTrain/website/blob/master/CodingChallenges/CC_011_PerlinNoiseTerrain/P5/sketch.js

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl
  rows = h / scl

  for (x = 0; x < cols; x++) {
    terrain[x] = []
    for (y = 0; y < rows; y++) {
      terrain[x][y] = 0
    }
  }

  // stroke("rgba(0, 0, 0, 1)")
  // strokeWeight(10)
}

function draw() {
  translate(0, 50);
  rotateX(PI/3);
  translate(-w/2, -h/2);

  flying -= 0.02;
  for (y = 0; y < rows; y++) {
    for (x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(x * 0.3, y * 0.3 + flying), 0, 1, -100, 100);
    }
  }

  background(213,227,229);
  colorRand = noise(flying)
  fill(colorRand*40 + 146, colorRand*40 + 112, colorRand* 40 + 86);
  
  for (y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}