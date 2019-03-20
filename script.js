function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

var bh = 10
var bw = 150
var bm = 50 // bar margin (from sides)

var mox = 0 // mouse offset x
var moy = 0 // mouse offset y

function draw() {
  background(0, 100, 200)

  mox = -(windowWidth/2 - mouseX) * ( bm/(windowWidth/2) )
  moy = -(windowHeight/2 - mouseY) * ( bm/(windowHeight/2) )

  // draw bars
  fill(255)
  rect(bm + mox, bm + moy, bw, bh)
  rect(bm + mox, bm + moy, bh, bw)
  rect(windowWidth - bm - bw + mox, bm + moy, bw, bh)
  rect(windowWidth - bm - bh + mox, bm + moy, bh, bw)
  rect(bm + mox, windowHeight - bm - bw + moy, bh, bw)
  rect(bm + mox, windowHeight - bm - bh + moy, bw, bh)
  rect(windowWidth - bm - bw + mox, windowHeight - bm - bh + moy, bw, bh)
  rect(windowWidth - bm - bh + mox, windowHeight - bm - bw + moy, bh, bw)

  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
