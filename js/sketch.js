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
	  fill(0);
	  if (mouseIsPressed){
		  line(mouseX,mouseY,550,600);
		  stroke(0, 0, 255)  }
		  strokeWeight(9);
		  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
