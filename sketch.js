

var points = [
  { x: 400, y: 200 },
  { x: 600, y: 50 },
  { x: 650, y: 300},
  { x: 800, y: 180}
];

function preload(){
  bgImg = loadImage("assets/background.png")
}
function setup() {
  createCanvas(850, 400);

  

 
}

function draw() {
  background(bgImg);
  for(var i=0; i< points.length; i++){
    drawPoints(i);
  }
  
}



function drawPoints(i) {
  push();
  stroke("white")
  strokeWeight(3);
  ellipseMode(RADIUS);
  fill("blue");
  ellipse(points[i].x, points[i].y, 10, 10);
  pop();
}

