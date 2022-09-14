//cursor en input entrada
// const btnEnfocar = document.querySelector('#comprobar'),
//       $nombre = document.querySelector('#letra');
//       btnEnfocar.addEventListener('click', () => {$nombre.focus();});

let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida'),
    puntos = document.querySelector('#puntos');
    
    info.value='Inicia con una letra!!!';//en el input #info
    document.getElementById('errores').innerHTML='😒: ';
    
    let soloLetras = /^[a-zA-Z]/;
    vidas.value=5;

function listasAdd(lsts){
      let numeroAleatorio=Math.floor(Math.random()*lsts.length);
      let palabraSecreta=lsts[numeroAleatorio];
      arrayWord(palabraSecreta);
      return palabraSecreta;
}

function btnJugar(){
 btnPalabraAdd()
}

function arrayWord(palabraSecreta){
      arrayPalabra= palabraSecreta.split('');
      console.log('arrayWord: '+ arrayPalabra);
      wordHidden(arrayPalabra,palabraSecreta)
      return arrayPalabra;
   }

function wordHidden(arrayPalabra,palabraSecreta){
      palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
      console.log('palabraOculta:  '+palabraOculta);
      // ponerGuiones();
      verPalabra(palabraSecreta);
      // verPalabra();
      return palabraOculta;

   }
      document.getElementById('listaBanner').innerHTML= listas;
    
function btnPalabraAdd(){

   let palabraAdd = document.querySelector('#palabraAdd').value;
   listas.push(palabraAdd);
   console.log('palabra nueva: '+ palabraAdd);
   document.getElementById('errores').innerHTML='😒: ';
   listasAdd(listas);
   ponerGuiones();

}
// ejecuta la funcion del boton comprobar con ENTER
function ingresoCaracter(){
   console.log('inicio0003');

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

// verPalabra();
function verPalabra(palabraSecreta){
   // console.log('inicio0004: palabraOculta: '+palabraOculta);
   console.log('inicio0004: palabraSecreta: '+palabraSecreta);
   // console.log('inicio0004: arrayPalabra: '+arrayPalabra.join(''));
   // console.log('inicio0004: palabraOculta'+palabraOculta.split(''));
newArrayPalabra=arrayPalabra.join('');
   if(palabraSecreta==undefined){
   palabraSecreta=newArrayPalabra.toString();
}
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
   
function btnComprobar(palabraSecreta){
   // console.log('inicio0005: btnComprobar');
   // console.log(' palabraSecreta: '+palabraSecreta);

   // console.log('arrayPalabra: '+arrayPalabra);
   // console.log('palabraOculta: '+palabraOculta);

      let letra = document.querySelector('#letra').value,
         // palabraSecreta,
          ltr;

      if(letra.match(soloLetras)){
         ltr=letra.toLowerCase();
         
         for(let i in arrayPalabra){
            if(ltr==arrayPalabra[i]&&ltr.match(soloLetras)&&!((ltr=== ' ')||(ltr=== ''))){
               palabraOculta[i]=ltr;
               entrada.value='';
               console.log("palabra oculta/caracter: "+palabraOculta)
            }
         }
      }
      contadorFallos(ltr);
      contadorIntentos(ltr);
      console.log(' palabraSecreta: '+palabraSecreta);
      verPalabra(palabraSecreta);
}

let arrayErrores=[],
    arrayEntrada=[],
    vida=5;
    a=0;//incrementador array de letras erradas

function contadorFallos(ltr){
   console.log('inicio0006: contarFallos');

   if(!(ltr==undefined)){
      console.log(arrayPalabra);
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
             setTimeout(function(){
             alert('!!!PERDISTE!!!');
             btnPalabraAdd();
             info.value='JUEGA OTRA VEZ';
            }, 500);
         }
      }
      }else{
            entrada.value='';
      }
   }


function contadorIntentos(ltr){
   console.log('inicio0007');

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
               info.value='JUEGA OTRA VEZ';
               document.getElementById('errores').innerHTML= "";
               
            }, 1000);
            setTimeout(function(){
               btnJugar();               
            }, 1000);
            
         }else{
            info.value= 'Ingesa otra letra';
         }
      }
}

function ponerGuiones(){
   console.log('inicio0008');
   ingresoCaracter();
}
function refrescar(){window.location.reload()}
btnJugar();