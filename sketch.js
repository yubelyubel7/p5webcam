var capture;
var stepSize = 4;

function setup() {
  createCanvas(400, 300);
  capture = createCapture(VIDEO);
  capture.size(400, 300);
  capture.hide();
}

function draw() {
  background(220, 220, 220, 255);
  capture.loadPixels();
  
  for (var x = 0; x < capture.width; x += stepSize) {
    for (var y = 0; y < capture.height; y += stepSize) {
      var index = ((y * capture.width) + x) * 4;
      
      var redVal = capture.pixels[index];
      var greenVal = capture.pixels[index + 1];
      var blueVal = capture.pixels[index + 2];
      
      noStroke();
      
      redVal = floor(redVal / 32) * 32;
      greenVal = floor(greenVal / 32) * 32;
      blueVal = floor(blueVal / 32) * 32;
      
      fill(redVal, greenVal, blueVal);
      
      rectMode(CENTER);
      rect(x, y, stepSize, stepSize);
    }
  }
}

// webcam capture function was taken and modiified from Webcam Filters by Pole
// https://editor.p5js.org/Pole/sketches/XK-pRY4Tk