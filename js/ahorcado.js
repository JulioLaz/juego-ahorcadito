//cursor en input entrada
const btnEnfocar = document.querySelector('#comprobar'),
	   $nombre = document.querySelector('#letra');
      btnEnfocar.addEventListener('click', () => {$nombre.focus();});

let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida'),
    puntos = document.querySelector('#puntos');

    info.value='Inicia con una letra!!!';//en el input #info

document.getElementById('errores').innerHTML='😒: ';
      
let soloLetras = /^[a-zA-Z]/;

// if( )
// console.log(newlista);
console.log(listas);
let numeroRandom=Math.round(Math.random()*10);
console.log(numeroRandom)
let palabraSecreta=listas[numeroRandom],
    arrayPalabra= palabraSecreta.split(''),
    palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
   
    console.log('palabras secreta: '+ palabraSecreta);

document.getElementById('listaBanner').innerHTML= listas;
// ejecuta la funcion del boton comprobar con ENTER
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
               entrada.value=''}, 500);
            }
         });
   }

function verPalabra(palabraOculta){

      let elemento='',
          letras = palabraSecreta.split('');

      letras.forEach((e)=> {
         if(palabraOculta.includes(e)){
            elemento += `<div class='hidden'>${e}</div>`;
         }
         else{
            elemento += `<div class='hidden'>🙈</div>`;
         }
      });
      document.getElementById('letraI').innerHTML=elemento;
   }
   
function btnComprobar(){

      let letra = document.querySelector('#letra').value,
          ltr;

      if(letra.match(soloLetras)){
         ltr=letra.toLowerCase();
         
         for(let i in arrayPalabra){
            if(ltr==arrayPalabra[i]&&ltr.match(soloLetras)&&!((ltr=== ' ')||(ltr=== ''))){
               palabraOculta[i]=ltr;
               entrada.value='';
            }
         }
      }
      contadorFallos(ltr);
      contadorIntentos(ltr);
      verPalabra(palabraOculta);
}

let arrayErrores=[],
    arrayEntrada=[],
    vida=5;
    a=0;//incrementador array de letras erradas

function contadorFallos(ltr){

   if(!(ltr==undefined)){
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index}),
             veces=vida-arrayErrores.length;
             a=a+1;

         document.getElementById('errores').innerHTML='😫: '+arrayErrores;
         info.value= 'erraste: quedan '+ veces + ' intentos';
         vidas.value=veces
         if(veces===(vida-1)){
            caja(true);
         }
         if(veces===(vida-2)){
            persona();
         }
         if(veces===(vida-3)){
            muerte();
         }
         if(veces===(vida-4)){
            cuervo();
         }
         entrada.value='';
         if(arrayErrores.length === vida){
            personaDeath();
            caja(false);
             info.value='PERDISTE';
             document.getElementById('errores').innerHTML= "<img src=img/pinguinotriste.gif>";
             setTimeout(function(){alert('!!!PERDISTE!!!');
               location. reload()}, 500);
         }
      }
      }else{
            entrada.value='';
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
            document.getElementById('errores').innerHTML= "<img src=img/pinguino.gif>";
            ganaste();
            info.value='-----GANASTE-----';
            setTimeout(function(){
               alert('!!!GANASTE!!!');
               location. reload();
             }, 1000);
         }else{
            info.value= 'Ingesa otra letra';
         }
      }
}

function ponerGuiones(){
   verPalabra(palabraOculta);
   ingresoCaracter();
   vidas.value=5;
}
ponerGuiones();
// }
function refrescar(){window.location.reload()}