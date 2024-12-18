const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Canvas grootte aanpassen aan de venstergrootte
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ['0', '1'];
const fontSize = 20;
const columnsArray = [];

// Initieer een array voor elke kolom
for (let x = 0; x < canvas.width / fontSize; x++) {
  columnsArray[x] = { y: Math.random() * canvas.height, x: x * fontSize };
}

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Event listener voor muisbeweging
canvas.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function drawMatrix() {
  // Maak het canvas bijna transparant om het effect van vallende symbolen te behouden
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';  // Groen kleur zoals in Matrix
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < columnsArray.length; i++) {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const col = columnsArray[i];

    // Bereken de afstand van de muis ten opzichte van de kolom
    const dx = mouseX - col.x;
    const dy = mouseY - col.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Als de muis boven de kolom is, beweegt het symbool omhoog
    if (dy < 0) {
      col.y -= 1; // Verlaag snelheid omhoog
    } else {
      col.y += 2; // Beweeg sneller naar beneden
    }

    // Teken het symbool op de huidige positie van de kolom
    ctx.fillText(symbol, col.x, col.y);

    // Zorg ervoor dat de kolommen door blijven bewegen
    if (col.y > canvas.height) {
      col.y = 0; // Laat de kolom weer vanaf boven vallen
    }
    if (col.y < 0) {
      col.y = canvas.height; // Laat de kolom vanaf de onderkant weer komen
    }
  }
}

// Update de canvas bij elke 50ms
setInterval(drawMatrix, 50);
