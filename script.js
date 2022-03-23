// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "90%";
canvas.style.height = "90%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
let c = canvas.getContext("2d");

function paintSquare() {
  // Blå kvadrat
  c.fillStyle = "blue";
  c.fillRect(canvas.width / 2 - 200, canvas.height / 2 - 200, 400, 400);
  // c.fillRect(0, 0, 50, 50); // Origo

  c.font = "48px Arial";
  c.fillStyle = "Yellow";
  c.textAlign = "center";
  c.fillText("Canvas Rect", canvas.width / 2, canvas.height / 2);
}

function paintCircle() {
  // Gul cirkel
  c.fillStyle = "yellow";
  c.beginPath();
  // c.arc(x, y, radie, startvinkel, slutvinkel)
  c.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI); // En cirkel är en "arc" som går mellan 0 och 2pi
  c.closePath();
  c.fill();
}

function paintRings() {
  console.log(canvas.width, canvas.height);
  console.log(400 + 100 * Math.cos((Math.PI * 45) / 180));
  c.fillStyle = "red";
  for (let i = 1; i <= 12; i++) {
    c.beginPath();
    c.arc(
      canvas.width / 2 + 200 * Math.cos((((Math.PI * 360) / 12) * i) / 180),
      canvas.height / 2 + 200 * Math.sin((((Math.PI * 360) / 12) * i) / 180),
      15,
      0,
      2 * Math.PI
    );
    c.closePath();
    c.fill();
  }
}

function paintSimpleSquarePattern() {
  let color = ["blue", "red"];
  for (let row = 0; row <= 8; row++) {
    for (let col = 0; col <= 8; col++) {
      c.fillStyle = color[row % 2];
      if (col % 2 === 1) {
        c.fillStyle = color[(row + 1) % 2];
      }
      c.fillRect(row * 110 + 5, col * 110 + 5, 40, 40);
    }
  }
}

paintSquare();
// paintCircle();
// paintSimpleSquarePattern();
// paintRings();
