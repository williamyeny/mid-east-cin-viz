var cells = []
var cellsTemp = []
var cellWidth

function setup() {
  createCanvas(windowWidth, windowHeight)
  cellWidth = 2
  for (y = 0; y < height; y++) {
    cells.push([])
    cellsTemp.push([])
    for (x = 0; x < width; x++) {
      cells[y].push(0)
      cellsTemp[y].push(0)
    }
  }
}

function draw() {
  background(255)
  fill(158,123,88)
  for (y = 0; y < height / cellWidth; y++) {
    for (x = 0; x < width / cellWidth; x++) {
      if (cells[y][x] == 1) {
        rect(x*cellWidth, y*cellWidth, cellWidth, cellWidth)
      }
      if ((y > 0 && cells[y-1][x] == 1) || (y < height && cells[y+1][x] == 1 && cells[y][x] == 1)) {
        cellsTemp[y][x] = 1
      } else {
        cellsTemp[y][x] = 0
      }
    }
  }

  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      cells[y][x] = cellsTemp[y][x]
    }
  }
} 

function mouseMoved() {
  cells[int(mouseY/cellWidth)][int(mouseX/cellWidth)] = 1
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = max(width, height)
}