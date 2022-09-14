//cursor en input entrada
// const btnEnfocar = document.querySelector('#comprobar'),
// 	   $nombre = document.querySelector('#letra');
//       btnEnfocar.addEventListener('click', () => {$nombre.focus();});

let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida'),
    puntos = document.querySelector('#puntos');
    
    info.value='Inicia con una letra!!!';//en el input #info
    
    document.getElementById('errores').innerHTML='😒: ';
    
    let soloLetras = /^[a-zA-Z]/;
    
   //  console.log(listas);

function listasAdd(lsts){
      console.log('inicio0001');
      console.log('listas: '+lsts);
      
      let numeroAleatorio=Math.floor(Math.random()*lsts.length);
      let palabraSecreta=lsts[numeroAleatorio];
      console.log('numero random: '+ numeroAleatorio);
      console.log('tamaño lista: '+ lsts.length); 
      console.log('palabraSecreta: '+ palabraSecreta); 
      arrayWord(palabraSecreta);

      return palabraSecreta;
      
}

function btnJugar(){
   ponerGuiones();

}
   // yyy=listasAdd(listas);
   function arrayWord(palabraSecreta){
      arrayPalabra= palabraSecreta.split('');
      console.log('arrayWord: '+ arrayPalabra);
      wordHidden(arrayPalabra)
      return arrayPalabra;
   }
   function wordHidden(arrayPalabra){
      palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
      console.log('palabraOculta:  '+palabraOculta);
      // ponerGuiones();
      verPalabra(palabraOculta);
      return palabraOculta;

   }
      document.getElementById('listaBanner').innerHTML= listas;
    
   //  console.log('palabras secreta: '+ yyy);
    
    
function btnPalabraAdd(){
      console.log('inicio0002');

   let palabraAdd = document.querySelector('#palabraAdd').value;
   listas.push(palabraAdd);
   console.log('palabra nueva: '+ palabraAdd);
   console.log(listas);
   // console.log('yyy:' + yyy);
   yyy=palabraAdd;
   listasAdd(listas);

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

function verPalabra(palabraOculta){
   console.log('inicio0004: verPalabra');
   console.log('inicio0004: palabraOculta'+palabraOculta);
   // console.log('inicio0004: palabraOculta'+palabraOculta.split(''));
      let yyy=palabraOculta;
      console.log(yyy);
      let elemento='';
          letras = yyy.split('');

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
   console.log('inicio0005');

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
             setTimeout(function(){alert('!!!PERDISTE!!!');
               location. reload()}, 500);
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
               location. reload();
             }, 1000);
         }else{
            info.value= 'Ingesa otra letra';
         }
      }
}

function ponerGuiones(){
   console.log('inicio0008');

   // verPalabra();
   ingresoCaracter();
   vidas.value=5;
}
// ponerGuiones();
// }
function refrescar(){window.location.reload()}