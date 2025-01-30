let currentColor;
let colors = [
  'red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'magenta', 'brown', 'white', 'black'
];
let paletteWidth = 50; // Width of the color palette
let prevX, prevY; // Variables to store the previous mouse position for drawing lines

function setup() {
  createCanvas(800, 600);
  background(255);
  noStroke();

  // Draw the color palette once
  drawPalette();

  // Set default color to black
  currentColor = 'black';
}

function draw() {
  // Draw on the canvas when the mouse is pressed and dragged
  if (mouseIsPressed) {
    stroke(currentColor);
    strokeWeight(5);
    line(prevX, prevY, mouseX, mouseY); // Draw a line from the previous mouse position to the current one
  }

  // Update the previous mouse position
  prevX = mouseX;
  prevY = mouseY;
}

function mousePressed() {
  // Change the current color when clicking on the palette
  if (mouseX < paletteWidth) {
    for (let i = 0; i < colors.length; i++) {
      if (mouseY > i * 50 && mouseY < (i + 1) * 50) {
        currentColor = colors[i];
        break;
      }
    }
  }
}

function drawPalette() {
  // Draw the color palette
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(0, i * 50, paletteWidth, 50);
  }
}

function keyPressed() {
  // Clear the canvas (including the palette) when the 'C' key is pressed
  if (key === 'c' || key === 'C') {
    background(255);
    drawPalette(); // Redraw the palette
  }
}