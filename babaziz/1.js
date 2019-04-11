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
    sands.push(new Sand())
  }, 100)
}

function draw() {
  // gradient background
  // for (i = 0; i <= height; i++) {
  //   let inter = map(i, 0, backgroundY + height/2, 0, 1);
  //   let c = lerpColor(darkblue, lightblue, inter);
  //   stroke(c);
  //   line(0, i, width, i);
  // }
  background(221,196,158, map(noise(frameCount/2), 0, 1, 100, 255))

  // sands
  // stroke(color(168,138,112))
  
  for (let s of sands) {
    s.update(frameCount/60); // update snowflake position
    s.display(); // draw snowflake
    if (s.posY > width) {
      delete s
    }
  }

  // smooth transition to mouseY
  backgroundY += (mouseY - backgroundY) / 30
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Sand() {
  // initialize coordinates
  this.posY = 0;
  this.posX = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(3, 7);
  this.color = lerpColor(color(158,123,88), color(221,196,158), random())

  this.radius = sqrt(random(pow(height / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posY = height / 2 + this.radius * cos(angle) + backgroundY;

    // different size snowflakes fall at slightly different y speeds
    this.posX += pow(this.size, 0.5) + 5;
  };

  this.display = function() {
    fill(this.color)
    ellipse(this.posX, this.posY, this.size);
  };
}