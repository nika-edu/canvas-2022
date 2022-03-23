// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 0.8 * window.innerHeight;

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
let c = canvas.getContext("2d");

function paintSquare() {
  // Blå kvadrat
  c.fillStyle = "blue";
  c.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 200, 400, 400);
  //c.fillRect(0, 0, 50, 50);

  c.font = "60px Arial";
  c.fillStyle = "Yellow";
  c.textAlign = "center";
  c.fillText("Canvas Rect", canvas.width / 2, canvas.height / 2);
}

function paintCircle() {
  // Gul cirkel
  c.fillStyle = "yellow";
  c.beginPath();
  c.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI); // En cirkel är en "arc" som går mellan 0 och 2pi
  c.closePath();
  c.fill();
}

function paintSimpleSquarePattern() {
  let color = ["blue", "red"];
  for (let row = 0; row <= 10; row++) {
    for (let col = 1; col <= 5; col++) {
      c.fillStyle = color[row % 2];
      if (col % 2 === 1) {
        c.fillStyle = color[(row + 1) % 2];
      }
      c.fillRect(row * 100 + 400, col * 100 + 50, 50, 50);
    }
  }
}
paintSquare();
// paintCircle();
// paintSimpleSquarePattern();
