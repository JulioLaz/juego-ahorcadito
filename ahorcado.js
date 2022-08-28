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
]

const $btnEnfocar = document.querySelector("#comprobar"),
	   $nombre = document.querySelector("#letra");
      $btnEnfocar.addEventListener("click", () => {$nombre.focus();});

let salida = document.querySelector(".letraIngresada"),
    entrada = document.querySelector(".letra"),
    info = document.querySelector(".info");

let palabraSecreta=palabras[Math.round(Math.random()*10)]; 
   console.log(palabraSecreta);

let arrayPalabra= palabraSecreta.split("");

let palabraOculta=arrayPalabra.map((letra,indice, arrayPalabra)=>{
   return letra==arrayPalabra[indice] ? "_ " : letra;
})
let e=0;
let arrayIntentos=[];

function btnComprobar(){
   const letra =document.querySelector("#letra").value;
   
   e++;
   for(let i in arrayPalabra){
      if(letra==arrayPalabra[i]){
         palabraOculta[i]=letra;
         salida.value= palabraOculta.join("");
         entrada.value="";
      }
   }
   contadorIntentos(letra,e);
   contadorFallos(letra)
   console.log("e en funcion boton: "+e);
}
let a=0;
let arrayErrores=[];
function contadorFallos(letra){
   if(!arrayPalabra.includes(letra)){
      arrayErrores[a]=letra;
      a=a+1;
      let veces=3-parseInt(a);
      info.value= "erraste: quedan "+ veces + ' intentos';
      console.log("a: "+a);
      entrada.value="";
    if(arrayErrores.length === 3){
       console.log('arrayErrores: '+ arrayErrores);
       info.value="PERDISTE";
    }
   }
}
function contadorIntentos(letra,e){
      
      e=e-1;
      let a=0;
      console.log(arrayIntentos);
      console.log("arrayPlalbras: "+arrayPalabra.length);
      console.log("e en contador: " +e);
      
      const arraySinLetrasRepetidas = arrayPalabra.filter((valor, indice) => {
         return arrayPalabra.indexOf(valor) === indice});
         
         if(arrayPalabra.includes(letra)){
         arrayIntentos[e]=letra;
           info.value= "INGRESA OTRA LETRA";
         if(arrayIntentos.length == arraySinLetrasRepetidas.length){
            console.log(arraySinLetrasRepetidas + arrayIntentos);
            info.value="GANASTE";
         }}
   }

let guiones = palabraOculta.toString();

function ponerGuiones(){
   
   salida.value =palabraOculta.join("");
}
ponerGuiones();


