function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}

function draw() {
  fill(0);
  if (mouseIsPressed){
	  line(mouseX,mouseY,550,300);
	  stroke(255, 0, 0)  }
	  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
