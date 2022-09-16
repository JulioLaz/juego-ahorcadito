let soloLetras = /^[a-zA-Z]/;
let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida');
    help = document.querySelector('#helpWord');
    document.getElementById('helpWord').innerHTML='NUMEROS😘';
    document.getElementById('errores').innerHTML='🤩: ';
    info.value='Ingresar una Letra!!!';//en el input #info
    
function listasAdd(lsts){
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
   document.querySelector("#helpWord").style.width = "20vw";
   document.querySelector("#helpWord").style.height = "4.3vh";
   document.querySelector("#helpWord").style.border = "1px solid black";
   document.querySelector("#helpWord").style.background = "white";
}

function helpWordAdd(palabraSecreta){
   if (listasNumeros.includes(palabraSecreta)){help.value='NUMEROS'}
   if (listasFrutas.includes(palabraSecreta)){help.value='FRUTAS'}
   if (listasMeses.includes(palabraSecreta)){help.value='MESES'}
}

function arrayWord(palabraSecreta){
      arrayPalabra= palabraSecreta.split('');
      wordHidden(arrayPalabra,palabraSecreta)
      return arrayPalabra;
}

function wordHidden(arrayPalabra,palabraSecreta){
      palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
      console.log('palabraOculta:  '+palabraOculta);
      verPalabra(palabraSecreta);
      return palabraOculta;
}
    
function btnPalabraAdd(){
   let palabraAdd = document.querySelector('#palabraAdd');
      listas.push(palabraAdd.value);
      listaSinVacios= listas.filter((item) => item !== '')
      document.getElementById('errores').innerHTML='😁';
      palabraAdd.value="";
      listasAdd(listaSinVacios);
      ingresoCaracter();
      vidas.value=5;
      vida=5;
}
//verificacion de caracteres
function ingresoPalabra(){
   let inputPalabra = document.getElementById('palabraAdd');
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

function verPalabra(palabraSecreta){
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
      let letra = document.querySelector('#letra').value,
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
   if(!(ltr==undefined)){
      console.log(arrayPalabra);
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index}),
             vidasGit=[],
             veces=vida-arrayErrores.length;
             a++;

         document.getElementById('errores').innerHTML='😫: '+arrayErrores;
         info.value= 'Te quedan '+ veces + ' intentos';
         for(let i=1;i<=veces;i++){
            vidasGit.push('😊');
         }
         vidas.value=vidasGit.join('')
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
            vidas.value="💀"
            personaDeath();
            caja(false);
             info.value='JUEGA OTRA VEZ - PALABRA OCULTA: '+arrayPalabra.join('');
             document.getElementById('errores').innerHTML= "<img src=img/pinguinotriste.gif>";
             setTimeout(function(){
             alert('!!!PERDISTE!!!  PALABRA OCULTA: '+arrayPalabra.join(''));
             arrayErrores=[],arrayEntrada=[],vida=5;
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
   btnPalabraAdd()
   ingresoCaracter();
   vidas.value='😊😊😊😊😊';
   vida=5;
   info.value='JUGAR OTRA VEZ';
   document.querySelector("#helpWord").style.width = "0vw";
   document.querySelector("#helpWord").style.height = "0vh";
   document.querySelector("#helpWord").style.border = "none";
   document.querySelector("#helpWord").style.background = "none";
}
btnJugar();

function btnRefrescar(){window.location.reload()}