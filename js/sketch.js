function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noStroke();
    pixelDensity(2);



}

function draw() {
    fill(0);
    if (mouseIsPressed) {
        line(mouseX, mouseY, 550, 300);
        stroke(255, 0, 0)
        line(mouseX, mouseY, 550, 600);
        stroke(0, 0, 255)
    } else {
        line(mouseX, mouseY, 550, 300);
        stroke(0, 0, 0)

    }
    fill(0);


    strokeWeight(4);
    cursor(CROSS, 8, 20)





}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);

}