let stars = [];
let speed;
var mx, my

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for(let i = 0; i < 300; i += 1) {
    stars[i] = new Star();
  }

  mx = width/2
  my = height/2
} // setup

function Star() {
  this.z = random(width);
  this.x = random(-width/2, width/2)
  this.y = random(-height/2, height/2)
  
  this.display = function() {
    noStroke();
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    let r = map(this.z, 0, width, 12, 0);
    ellipse(sx, sy, r, r);
  } // display
  
  this.update = function() {
    this.z += speed;
    
    if(this.z > width) {
      this.z = 0
      // if (random()*2 > 1) {
      //   this.x = random(-width, -width/2);
      // } else {
      //   this.x = random(width/2, width)
      // }

      // if (random()*2 > 1) {
      //   this.y = random(-height, -height/2);
      // } else {
      //   this.y = random(height/2, height)
      // }
      this.x = random(-width/2, width/2)
      this.y = random(-height/2, height/2)
      // console.log(this.x)
      // console.log(this.y)
    }
  } // update
} // Star

function draw() {
  background(0, 20);
  if (mouseX != 0 && mouseY != 0) {
    mx += (mouseX - mx)/50
    my += (mouseY - my)/50
  }
  translate(mx, my);
  speed = 5
  fill(255);
  for(let i = 0; i < stars.length; i += 1) {
    stars[i].display();
    stars[i].update();
  }
} // draw 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = max(width, height)
}