const canvas = document.getElementById('designCanvas');
const ctx = canvas.getContext('2d');
const frameImage = document.getElementById('frameImage');


function resizeCanvasToImage() {
  const imageWidth = frameImage.clientWidth;
  const imageHeight = frameImage.clientHeight;

  canvas.width = imageWidth * 0.41;
  canvas.height = imageHeight * 0.78;
  
}

function getRandomPastelColor() {
  const red = Math.floor(Math.random() * 127 + 127); 
  const green = Math.floor(Math.random() * 127 + 127);
  const blue = Math.floor(Math.random() * 127 + 127);
  return `rgb(${red}, ${green}, ${blue})`;
}

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function generateDesign() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const numCircles = 50; 
  const maxRadius = Math.min(canvas.width, canvas.height) * 0.1; 
  for (let i = 0; i < numCircles; i++) {
    const x = Math.random() * canvas.width; 
    const y = Math.random() * canvas.height;
    const radius = Math.random() * maxRadius; 
    const color = getRandomPastelColor(); 

    drawCircle(x, y, radius, color); 
  }
}


function initializeCanvas() {
  resizeCanvasToImage();
  generateDesign();
}


window.addEventListener('resize', initializeCanvas);
window.addEventListener('load', initializeCanvas);
