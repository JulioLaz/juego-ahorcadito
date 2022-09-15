// cursor en input entrada
// const btnEnfocar = document.querySelector('#comprobar'),
//       $nombre = document.querySelector('#letra');
//       btnEnfocar.addEventListener('click', () => {$nombre.focus();});

let soloLetras = /^[a-zA-Z]/;
let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida');
   //  help = document.querySelector('#helpWord');
    
    info.value='Ingresar una Letra!!!';//en el input #info
    document.getElementById('errores').innerHTML='🤩: ';
    
function listasAdd(lsts){
   console.log('inicio0001');

      let numeroAleatorio=Math.floor(Math.random()*lsts.length);
      let palabraSecreta=lsts[numeroAleatorio];
     palabrita= palabraSecreta.toLowerCase();
     palabraSecreta=palabrita;
      console.log('toLowerCase: '+palabrita+palabraSecreta)
      arrayWord(palabraSecreta);
      helpWordAdd(palabraSecreta)
      return palabraSecreta;
   }
   function btnhelpWord(){
   helpWordAdd(palabraSecreta)

}
function helpWordAdd(palabraSecreta){
console.log(palabraSecreta);
if (listasNumeros.includes(palabraSecreta)){
   document.getElementById('helpWord').innerHTML='NUMEROS😘';
   console.log(palabraSecreta);
}
   if (listasFrutas.includes(palabraSecreta)){
      document.getElementById('helpWord').innerHTML='FRUTAS😒';
      console.log(palabraSecreta);
}
   if (listasMeses.includes(palabraSecreta)){
      document.getElementById('helpWord').innerHTML='MESES😕';
      console.log(palabraSecreta);
}


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
    
function btnPalabraAdd(){
   console.log('inicio0004');

   let palabraAdd = document.querySelector('#palabraAdd');

      listas.push(palabraAdd.value);
      listaSinVacios= listas.filter((item) => item !== '')
      console.log('listas add: '+ listaSinVacios);
      console.log('listas add.lengt: '+ listaSinVacios.length);
      console.log('palabra nueva: '+ palabraAdd);
      document.getElementById('errores').innerHTML='🤩: ';
      palabraAdd.value="";
      listasAdd(listaSinVacios);
      ingresoCaracter();
      vidas.value=5;
      vida=5;
   
}
//verificacion de caracteres
function ingresoPalabra(){

   console.log('inicio0005');
   
   let inputPalabra = document.getElementById('palabraAdd');
   // let nuevoInputPalabra=inputPalabra;
   // inputPalabra.value.toLowerCase();
   // console.log(nuevoInputPalabra.value)
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
         alert('Caracter no válido -SOLO LETRAS MINÚSCULAS!!!');
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
         info.value= 'Te quedan '+ veces + ' intentos';
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
             alert('!!!PERDISTE!!!'+arrayPalabra);
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
   info.value='JUGAR OTRA VEZ';

}
btnJugar();

function refrescar(){window.location.reload()}