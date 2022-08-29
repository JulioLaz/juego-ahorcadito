const palabras=[
   "casa",
   "mesa",
   "arbol",
   "loro",
   "cama",
   "comida",
   "flor",
   "perro",
   "gato",
   "ave",
   "pan"
];
//ejecuta la funcion del boton comprobar con ENTER o SPACE
let elInput = document.getElementById('letra');
elInput.addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13 || keycode == 32) {
   btnComprobar();
  }
});

//cursor en input entrada
const btnEnfocar = document.querySelector("#comprobar"),
	   $nombre = document.querySelector("#letra");
      btnEnfocar.addEventListener("click", () => {$nombre.focus();});

let salida = document.querySelector(".letraIngresada"),
    entrada = document.querySelector(".letra"),
    info = document.querySelector(".info");

info.value="Inserte una letra"
//Palabra secreta aleatoria:
let palabraSecreta=palabras[Math.round(Math.random()*10)];
console.log(palabraSecreta)
//array sin comas
let arrayPalabra= palabraSecreta.split("");
//conversion de la palabra en guiones
let palabraOculta=arrayPalabra.map((letra,indice, arrayPalabra)=>{
    return letra==arrayPalabra[indice] ? "_ " : letra})

let e=0;

function btnComprobar(){
   const letra = document.querySelector("#letra").value;
   let ltr=letra.toLowerCase()
   
   e++;
   for(let i in arrayPalabra){
      if(ltr==arrayPalabra[i]){
         palabraOculta[i]=ltr;
         salida.value= palabraOculta.join("");
         console.log("palabra oculta: "+ palabraOculta)
         entrada.value="";
      }
   }
   contadorFallos(ltr);
   contadorIntentos(ltr,e);
}

let a=0;
let arrayErrores=[];

function contadorFallos(ltr){

   if(!((ltr=== " ")||(ltr=== ""))){

   if(!arrayPalabra.includes(ltr)){
      arrayErrores[a]=ltr;
      a=a+1;
      let veces=3-parseInt(a);
      info.value= "erraste: quedan "+ veces + ' intentos';
      entrada.value="";
      arrayErroresLimpio = arrayErrores.filter(Boolean);
console.log("array sin guioen: "+ arrayErroresLimpio)
      if(arrayErrores.length === 3){
          info.value="PERDISTE";
          setTimeout(function(){
            alert("Inicia un nuevo juego");
            location. reload();
          }, 500);
      }
   }
}else{
   entrada.value="";
}
}
function contadorIntentos(ltr,e){
      
   e=e-1;
   let a1=palabraOculta.join(''),
       a2=arrayPalabra.join('');
         
   const comparacionArrayEntradaSalida = function (a1, a2){
      let i = a1.length;
      if (i != a2.length) return false;
         
      while (i--) {
        if (a1[i] !== a2[i]) return false;
      }
      return true;
   }
         
      if(arrayPalabra.includes(ltr)){
         if(comparacionArrayEntradaSalida(a1,a2)){
            info.value="-----GANASTE-----";
            setTimeout(function(){
               alert("Inicia un nuevo juego");
               location. reload();
             }, 500);
         }else{
            info.value= "Ingesa otra letra";
         }
      }
}

let guiones = palabraOculta.toString();

function ponerGuiones(){
   salida.value =palabraOculta.join("");
}
ponerGuiones();