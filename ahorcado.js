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
      var keycode = e.keyCode;
      if (keycode == 13 || keycode == 32) {
         btnComprobar();
      }
});

//cursor en input entrada
const btnEnfocar = document.querySelector("#comprobar"),
	   $nombre = document.querySelector("#letra");
      btnEnfocar.addEventListener("click", () => {$nombre.focus();});

let entrada = document.querySelector(".letra"),
    info = document.querySelector(".info");
    
    //Palabra secreta aleatoria:
let palabraSecreta=palabras[Math.round(Math.random()*10)];
console.log(palabraSecreta);
info.value="Inserte una letra: "+palabraSecreta;//en el input #info
   
//array sin comas
let arrayPalabra= palabraSecreta.split('');

//conversion de la palabra en guiones
let palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? "_ " : l});

function verPalabra(palabraOculta){
      let elem='';
      let letras = palabraSecreta.split('');

      letras.forEach((e)=> {
         if(palabraOculta.includes(e)){
            elem += `<div class="hidden">${e}</div>`;
         }
         else{
            elem += `<div class="hidden">🙈</div>`;
            }
         });
      document.getElementById("letraI").innerHTML=elem;
   }

function btnComprobar(){
      let letra = document.querySelector("#letra").value,
          ltr=letra.toLowerCase();
      for(let i in arrayPalabra){
         if(ltr==arrayPalabra[i]){
            palabraOculta[i]=ltr;
            entrada.value="";
         }
      }
      contadorFallos(ltr);
      contadorIntentos(ltr);
      verPalabra(palabraOculta);
}

let arrayErrores=[],
    arrayEntrada=[],
    a=0;//incrementador array de letras erradas

function contadorFallos(ltr){
   if(!((ltr=== " ")||(ltr=== ""))){//elimino espacios vacios
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index});
         let veces=3-arrayErrores.length;
         a=a+1;

         document.getElementById("errores").innerHTML=arrayErrores;
         info.value= "erraste: quedan "+ veces + ' intentos';
         
         if(veces===2){
            caja(true);
         }
         if(veces===1){
            persona();
         }
         entrada.value="";
         if(arrayErrores.length === 3){
            caja(false);
             info.value="PERDISTE";
             setTimeout(function(){alert("Inicia un nuevo juego");
               location. reload()}, 500);
         }
      }
      }else{
      entrada.value="";
      }
   }
   
function contadorIntentos(ltr){
   let a1=palabraOculta.join(''),
       a2=arrayPalabra.join('');
   const comparacionArrayEntradaSalida = function (a1, a2){
      let i = a1.length;
      if (i != a2.length) return false;
      while(i--){
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

function ponerGuiones(){
   verPalabra(palabraOculta);
}
ponerGuiones();