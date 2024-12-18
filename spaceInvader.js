function drawLine() {
   // Selecteer het canvas en stel grootte in
   const canvas = document.getElementById("myCanvas");
   canvas.width = 400; // Canvas breedte
   canvas.height = 400; // Canvas hoogte
 
   const context = canvas.getContext("2d");
 
   // Zwarte grote rechthoek
   context.lineWidth = 5;
   context.fillStyle = 'black';
   context.beginPath();
   context.rect(50, 50, 300, 300);
   context.fill();
 
   // Groene kleine rechthoeken
   context.fillStyle = 'green';
   context.beginPath();
   context.rect(75, 70, 50, 50);
   context.rect(75, 120, 50, 50);
   context.rect(75, 170, 50, 50);
   context.rect(125, 120, 50, 50);
   context.fill();
 
   // Groene rechthoek onder
   context.beginPath();
   context.rect(175, 220, 50, 50);
   context.fill();
 
   // Groene rechthoeken rechts
   context.beginPath();
   context.rect(225, 120, 50, 50);
   context.rect(275, 120, 50, 50);
   context.rect(275, 170, 50, 50);
   context.rect(275, 70, 50, 50);
   context.fill();
 }
 
 // Tekening uitvoeren zodra de pagina geladen is
 window.onload = drawLine;
 
