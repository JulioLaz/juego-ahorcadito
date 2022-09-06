   // const palabras=[
   //    "alura",
   //    "casa",
   //    "mesa",
   //    "arbol",
   //    "loro",
   //    "cama",
   //    "comida",
   //    "flor",
   //    "perro",
   //    "gato",
   //    "ave",
   //    "pan"
   // ];

      
let soloLetras = /^[a-zA-Z]/;
      // ejecuta la funcion del boton comprobar con ENTER o SPACE
function ingresoCaracter(){
         let elInput = document.getElementById('letra');
         elInput.addEventListener('keyup', e=> {
         dato = e.key;
         keycode = e.keyCode;
            if (dato.match(soloLetras)){
               if ((keycode === 13)){
                     btnComprobar();
               }
            }else{
               info.value='Caracter no válido!!!';
               setTimeout(function(){
               entrada.value=""}, 600);
               
            }
         });
      }
      

//cursor en input entrada
const btnEnfocar = document.querySelector("#comprobar"),
	   $nombre = document.querySelector("#letra");
      btnEnfocar.addEventListener("click", () => {$nombre.focus();});

let entrada = document.querySelector(".letra"),
    info = document.querySelector(".info"),
    vidas = document.querySelector("#vida"),
    puntos = document.querySelector("#puntos");
    
//Palabra secreta aleatoria:
function btnNivel01(lista01){
   let palabras=[];
   palabras=lista01.map(lista => lista)
   // let palabras=()=>{palabras=lista01};
   return palabras
}
// alert(lista01);
// console.log("palabras  "+palabras)

let palabraSecreta=palabras[Math.round(Math.random()*10)];
console.log(palabraSecreta);
info.value="Inserte una letra: "//en el input #info
//array sin comas
let arrayPalabra= palabraSecreta.split('');

//conversion de la palabra en guiones
let palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? "_ " : l});

function verPalabra(palabraOculta){
      let elem='';
      let letras = palabraSecreta.split('');

      console.log(palabraOculta+ "   "+ letras)         
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
      let letra = document.querySelector("#letra").value;
      let ltr;
      if(letra.match(soloLetras)){
         ltr=letra.toLowerCase();
         
         for(let i in arrayPalabra){
            if(ltr==arrayPalabra[i]&&ltr.match(soloLetras)&&!((ltr=== " ")||(ltr=== ""))){
               palabraOculta[i]=ltr;
               entrada.value="";
            }
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
   if(!((ltr.value=== " ")||(ltr.value=== ""))){//elimino espacios vacios
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index});
         let veces=3-arrayErrores.length;
         a=a+1;

         document.getElementById("errores").innerHTML=arrayErrores;
         info.value= "erraste: quedan "+ veces + ' intentos';
         vidas.value=veces
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
let acumuladoPuntos;
puntos.value=0;
function contadorIntentos(ltr){
   let a1=palabraOculta.join(''),
       a2=arrayPalabra.join('');
      acumuladoPuntos=(a2.length*1000/a1.length);    
       puntos.value=Math.ceil(acumuladoPuntos);
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
      acumuladoPuntos++;
}

function ponerGuiones(){
   verPalabra(palabraOculta);
   ingresoCaracter();
   vidas.value=3;

}
ponerGuiones();

function refrescar(){
   window.location.reload()
}