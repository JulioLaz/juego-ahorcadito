let palabraSecreta=listas[Math.round(Math.random()*10)],
    arrayPalabra= palabraSecreta.split(''),
    palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
   
    console.log('palabras secreta: '+ palabraSecreta);

   //cursor en input entrada
const btnEnfocar = document.querySelector('#comprobar'),
	   $nombre = document.querySelector('#letra');
      btnEnfocar.addEventListener('click', () => {$nombre.focus();});

let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida'),
    puntos = document.querySelector('#puntos');

    info.value='Inicia con una letra!!! '//en el input #info

document.getElementById('errores').innerHTML='😒: ';
      
let soloLetras = /^[a-zA-Z]/;

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
    a=0;//incrementador array de letras erradas

function contadorFallos(ltr){

   if(!(ltr==undefined)){
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index}),
             veces=3-arrayErrores.length;
             a=a+1;

         document.getElementById('errores').innerHTML='😫: '+arrayErrores;
         info.value= 'erraste: quedan '+ veces + ' intentos';
         vidas.value=veces
         if(veces===2){
            caja(true);
         }
         if(veces===1){
            persona();
         }
         entrada.value='';
         if(arrayErrores.length === 3){
            caja(false);
             info.value='PERDISTE';
             document.getElementById('errores').innerHTML= "<img src=pinguinotriste.gif>";
             setTimeout(function(){alert('Inicia un nuevo juego');
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
            document.getElementById('errores').innerHTML= "<img src=pinguino.gif>";

            info.value='-----GANASTE-----';
            setTimeout(function(){
               alert('Inicia un nuevo juego');
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

function refrescar(){window.location.reload()}