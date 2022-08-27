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
   "ave"
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
let longitudPalabra= arrayPalabra.length;

let palabraOculta=arrayPalabra.map((letra,indice, arrayPalabra)=>{
   return letra==arrayPalabra[indice] ? "_ " : letra;
})

let intentos=[];
function btnComprobar(){
   e++;
   const letra =document.querySelector("#letra").value;
   let nuevaPalabraOculta=palabraOculta;


      for(let i in arrayPalabra){
         if(letra==arrayPalabra[i]){
            nuevaPalabraOculta[i]=letra;
            salida.value= palabraOculta.join("");
            entrada.value="";
         }
      }
      contadorIntentos(letra,e,count);
      
   }
   let e=0;

  
   
let count=0;
   function contadorIntentos(letra,e,count){
      
      count++;
      intentos[e]=letra;
      console.log(intentos);
      console.log(arrayPalabra.length);
      console.log(e);
      console.log("count: "+ count);
      
      const arraySinLetrasRepetidas = arrayPalabra.filter((valor, indice) => {
         return arrayPalabra.indexOf(valor) === indice});

      if(arrayPalabra.includes(letra)){
        
         info.value= "INGRESA OTRA LETRA"; console.log("INGRESA OTRA LETRA: "+e );
         
         if(arraySinLetrasRepetidas === arrayPalabra){
            console.log(arraySinLetrasRepetidas + arrayPalabra);
            info.value="GANASTE";
         }
      }else if(e<3){
         count++;
         let veces=3-parseInt(e);
         info.value="tenes "+ veces+ " intentos";
         console.log("SIGUE INTENTANDO")
         
         
         entrada.value="";
         console.log(e);
      }else{
         salida.value="";
         info.value="PERDISTE";
         console.log("PERDISTE")
      }
   }

// console.log("palabra a guiones: "+palabraOculta + "guiones: " +palabraOculta.toString());
let guiones = palabraOculta.toString();

function ponerGuiones(){
   
   salida.value =palabraOculta.join("");
   // console.log(salida.value);
}
ponerGuiones();

// console.log(palabraOculta.join("") + typeof palabraOculta );

