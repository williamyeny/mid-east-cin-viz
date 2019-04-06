var subs = document.getElementsByTagName("p")
var subIndex = 1
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(noise(frameCount/100) * 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


setInterval(function() {
  if (subIndex == subs.length) {
    subIndex = 0
  }

  for (var i = 0; i < subs.length; i++) {
    if (i == subIndex) {
      subs[i].style.display = "block"
    } else {
      subs[i].style.display = "none"
    }

  }

  subIndex++
}, 6000)

