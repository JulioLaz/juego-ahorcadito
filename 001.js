   let canvas = document.getElementById("canvas");
   let ctx = canvas.getContext("2d");

function patibulo() {
ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle = 'brown';
ctx.moveTo(400,20);
ctx.lineTo(20,20);
ctx.lineTo(20,28);
ctx.lineTo(70,28);
ctx.lineTo(120,80);
ctx.lineTo(120,350);
ctx.lineTo(120,350);
ctx.lineTo(20,350);
ctx.lineTo(20,358);
ctx.lineTo(240,358);
ctx.lineTo(240,350);
ctx.lineTo(128,350);
ctx.lineTo(128,350);
ctx.lineTo(128,80);
ctx.lineTo(180,28);
ctx.lineTo(400,28);
ctx.lineTo(400,17);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=3;
ctx.strokeStyle = 'black';
ctx.lineTo(400,16);
ctx.lineTo(400,120);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=3;
ctx.arc(400, 144, 23, 0, Math.PI * 2, true); // Círculo externo
ctx.moveTo(110, 75);
ctx.stroke();
}

patibulo();

function persona(){
   let img = new Image();
   img. src = "varon.png";
   img.onload= function(){ctx.drawImage(img, 366, 125,70,200);}
}
persona();

function caja(){
   ctx.fillStyle = "black";
   ctx.fillRect(350,325,100,40);
}
caja();