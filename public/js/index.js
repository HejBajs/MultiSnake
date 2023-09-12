var cnv;
gridSize = 10

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  if(windowWidth < windowHeight){
    cnv = createCanvas(windowWidth, windowWidth);
  }else {
    cnv = createCanvas(windowHeight, windowHeight);
  }
  centerCanvas();
  grid = new Grid(gridSize)
  createGrid(grid.grid, grid.size)
  console.log(grid.grid);
}

function windowResized() {
  centerCanvas();
}

function draw(){
  background(0);
}

function createGrid(grid, size){
  for(i=0; i<size;i++){
    for(j=0; j<size;j++){
      grid.push([i,j])
    }
  }
}