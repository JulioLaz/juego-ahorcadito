// cursor en input entrada
// const btnEnfocar = document.querySelector('#comprobar'),
//       $nombre = document.querySelector('#letra');
//       btnEnfocar.addEventListener('click', () => {$nombre.focus();});

let soloLetras = /^[a-zA-Z]/;
let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida'),
    puntos = document.querySelector('#puntos');
    
    info.value='Inicia con una letra!!!';//en el input #info
    document.getElementById('errores').innerHTML='😒: ';
    
function listasAdd(lsts){
   console.log('inicio0001');

      let numeroAleatorio=Math.floor(Math.random()*lsts.length);
      let palabraSecreta=lsts[numeroAleatorio];
      arrayWord(palabraSecreta);
      return palabraSecreta;
}

function arrayWord(palabraSecreta){
   console.log('inicio0002');

      arrayPalabra= palabraSecreta.split('');
      console.log('arrayWord: '+ arrayPalabra);
      wordHidden(arrayPalabra,palabraSecreta)
      return arrayPalabra;
   }

function wordHidden(arrayPalabra,palabraSecreta){
   console.log('inicio0003');

      palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
      console.log('palabraOculta:  '+palabraOculta);
      // jugar();
      verPalabra(palabraSecreta);
      // verPalabra();
      return palabraOculta;
}
      document.getElementById('listaBanner').innerHTML= listas;
    
function btnPalabraAdd(){
   console.log('inicio0004');

   let palabraAdd = document.querySelector('#palabraAdd').value;

      listas.push(palabraAdd);
      listaSinVacios= listas.filter((item) => item !== '')
      console.log('listas add: '+ listaSinVacios);
      console.log('listas add.lengt: '+ listaSinVacios.length);
      console.log('palabra nueva: '+ palabraAdd);
      document.getElementById('errores').innerHTML='😒: ';
      listasAdd(listaSinVacios);
      ingresoCaracter();
      vidas.value=5;
      vida=5;
      palabraAdd.value="";
   
}

function ingresoPalabra(){
   console.log('inicio0005');
   
   let inputPalabra = document.getElementById('palabraAdd');
   // let inputPalabraAdd = document.getElementById('palabraIngresadaAdd');
   let arrayInput=[];
   inputPalabra.addEventListener('keyup', e=> {
   dato = e.key;
   keycode = e.keyCode;
      if (dato.match(soloLetras)){
         if ((keycode === 13)){
            btnPalabraAdd();
            document.getElementById('info').innerHTML=inputPalabra.value;
            arrayInput.push(inputPalabra.value);
            // inputPalabraAdd.value=arrayInput;
            inputPalabra.value="";
         }
      }else{
         alert('Caracter no válido!!!');
         inputPalabra.value="";
      }
   });
}
ingresoPalabra();

// ejecuta la funcion del boton comprobar con ENTER
function ingresoCaracter(){
   console.log('inicio0006');

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

function verPalabra(palabraSecreta){
   console.log('inicio0007: palabraOculta: '+palabraOculta);
   console.log('inicio0007: palabraSecreta: '+palabraSecreta);
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
   console.log('inicio0008: btnComprobar');
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

let arrayErrores=[],arrayEntrada=[],vida=5;
    a=0;//incrementador array de letras erradas

function contadorFallos(ltr){
   console.log('inicio0009: contarFallos');

   if(!(ltr==undefined)){
      console.log(arrayPalabra);
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index}),
             veces=vida-arrayErrores.length;
             a++;

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
             arrayErrores=[],arrayEntrada=[],vida=5;
             info.value='JUEGA OTRA VEZ';
             canvas.width=canvas.width;
             patibulo();
             btnJugar();
            }, 500);
         }
      }
      }else{
            entrada.value='';
      }
   }


function contadorIntentos(ltr){
   console.log('inicio00010');

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
            arrayErrores=[],arrayEntrada=[],vida=5;
            setTimeout(function(){
               canvas.width=canvas.width;
               patibulo();
               btnJugar();
            }, 1000);
            
         }else{
            info.value= 'Ingesa otra letra';
         }
      }
}



function btnJugar(){
   console.log('inicio00012');
   btnPalabraAdd()
   console.log('inicio00011');
   ingresoCaracter();
   vidas.value=5;
   vida=5;
}
btnJugar();

function refrescar(){window.location.reload()}