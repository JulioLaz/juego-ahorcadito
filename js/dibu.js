   
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

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
ctx.moveTo(10,364);
ctx.lineTo(580,364);
ctx.stroke();

//soga
ctx.beginPath();
ctx.lineWidth=3;
ctx.strokeStyle = 'black';
ctx.lineTo(400,32);
ctx.lineTo(400,120);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=3;
ctx.arc(400, 144, 23, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.stroke();
}
patibulo();

function persona(){
//cabeza
ctx.beginPath();
ctx.fillStyle = "orange";
ctx.strokeStyle = "brown";
ctx.lineWidth=3;
ctx.arc(400, 144, 15, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();
ctx.stroke();

//cuerpo
ctx.beginPath();
ctx.lineWidth=8;
ctx.strokeStyle = 'brown';
ctx.moveTo(400,160);
ctx.lineTo(400,250);
ctx.stroke();

//manos
ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle = 'brown';
ctx.moveTo(350,200);
ctx.lineTo(400,175);
ctx.lineTo(450,200);
ctx.stroke();

//pies
ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle = 'brown';
ctx.lineTo(350,270);
ctx.lineTo(400,250);
ctx.lineTo(450,270);
ctx.stroke();
}

function cuervo(){
   let img = new Image();
   img. src = 'img/cuervo.png';
   img.onload= function(){ctx.drawImage(img, 470, 30,60,60);}
}

function muerte(){
let img = new Image();
img. src = 'img/death.png';
img.onload= function(){ctx.drawImage(img, 470, 100,180,200);}

ctx.beginPath();
ctx.lineWidth=3;
ctx.strokeStyle = 'black';
}

function personaDeath(){
   //cabeza
   ctx.beginPath();
   ctx.fillStyle = "black";
   ctx.strokeStyle = "black";
   ctx.lineWidth=3;
   ctx.arc(400, 144, 15, 0, Math.PI * 2, true);
   ctx.moveTo(110, 75);
   ctx.fill();
   ctx.stroke();
   
   //cuerpo
   ctx.beginPath();
   ctx.lineWidth=8;
   ctx.strokeStyle = 'black';
   ctx.moveTo(400,160);
   ctx.lineTo(400,250);
   ctx.stroke();

   //manosBorrados
ctx.beginPath();
ctx.lineWidth=8;
ctx.fillStyle = 'bisque';
ctx.strokeStyle = 'bisque';
ctx.moveTo(350,200);
ctx.lineTo(400,175);
ctx.lineTo(450,200);
ctx.stroke();

      //piesBorrados
      ctx.beginPath();
      ctx.lineWidth=8;
      ctx.fillStyle = 'bisque';
      ctx.strokeStyle = 'bisque';
      ctx.lineTo(350,270);
      ctx.lineTo(400,250);
      ctx.lineTo(450,270);
      ctx.stroke();
   
   //manosCaidas
   ctx.beginPath();
   ctx.lineWidth=6;
   ctx.strokeStyle = 'black';
   ctx.moveTo(382,220);
   ctx.lineTo(400,175);
   ctx.lineTo(418,220);
   ctx.stroke();
   
   //piesCaidos
   ctx.beginPath();
   ctx.lineWidth=6;
   ctx.strokeStyle = 'black';
   ctx.lineTo(382,290);
   ctx.lineTo(400,250);
   ctx.lineTo(418,290);
   ctx.stroke();
   }

function caja(a){
   if(a){
      ctx.beginPath();
      ctx.fillStyle = 'BROWN';
      ctx.fillRect(350,275,100,85);
      ctx.stroke();
}else{
   ctx.fillStyle = 'brown';
   ctx.fillRect(250,275,100,85);
   ctx.fillStyle = 'bisque';
   ctx.fillRect(350,275,100,85);
   ctx.stroke();
}
}

function ganaste(){
   //soga
ctx.beginPath();
ctx.fillStyle = 'bisque';
ctx.strokeStyle = 'bisque';
ctx.lineWidth=5;
ctx.lineTo(400,32);
ctx.lineTo(400,120);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'bisque';
ctx.strokeStyle = 'bisque';
ctx.lineWidth=5;
ctx.arc(400, 144, 23, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.stroke();

//cabeza
ctx.beginPath();
ctx.fillStyle = "orange";
ctx.strokeStyle = "brown";
ctx.lineWidth=3;
ctx.arc(400, 144, 15, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();
ctx.stroke();

//cuerpo
ctx.beginPath();
ctx.lineWidth=8;
ctx.strokeStyle = 'brown';
ctx.moveTo(400,160);
ctx.lineTo(400,250);
ctx.stroke();

//manosBorrar
ctx.beginPath();
ctx.lineWidth=8;
ctx.strokeStyle = 'bisque';
ctx.moveTo(350,200);
ctx.lineTo(400,175);
ctx.lineTo(450,200);
ctx.stroke();
//manos
ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle = 'brown';
ctx.moveTo(382,220);
ctx.lineTo(400,175);
ctx.lineTo(418,220);
ctx.stroke();

//piesBorrar
ctx.beginPath();
ctx.lineWidth=8;
ctx.strokeStyle = 'bisque';
ctx.lineTo(350,270);
ctx.lineTo(400,250);
ctx.lineTo(450,270);
ctx.stroke();

//pies
ctx.beginPath();
ctx.lineWidth=6;
ctx.strokeStyle = 'brown';
ctx.lineTo(382,290);
ctx.lineTo(400,250);
ctx.lineTo(418,290);
ctx.stroke();

//tapar muerte
ctx.fillStyle = 'bisque';
ctx.fillRect(420,50,200,400);
ctx.stroke();

//taburete
ctx.beginPath();
      ctx.fillStyle = 'BROWN';
      ctx.fillRect(350,275,100,85);
      ctx.stroke();
}