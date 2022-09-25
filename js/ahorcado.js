let soloLetras = /^[A-Z]/;
let entrada = document.querySelector('.letra'),
    info = document.querySelector('.info'),
    vidas = document.querySelector('#vida');
    help = document.querySelector('#helpWord');
    puntos = document.querySelector('#puntos');
    document.getElementById('helpWord').innerHTML='NUMEROS😘';
    document.getElementById('errores').innerHTML='🤩: ';

    info.value='Ingresar una Letra!!!';//en el input #info
    puntos.value="PUNTOS: 0"


    const audioInicioJuego = new Audio(`sonidos/inicioJuego.mp3`)
    const audioAcierto = new Audio(`sonidos/acierto.mp3`)
    const audioFinalPerdido = new Audio(`sonidos/finalPerdido.mp3`)
    const audioEnter = new Audio(`sonidos/ingresoLetra.mp3`)
    const audioPerderVida = new Audio(`sonidos/perderVida.mp3`)
    const audioVictoria = new Audio(`sonidos/victoria.mp3`)

function listasAdd(lsts){
      let numeroAleatorio=Math.floor(Math.random()*lsts.length);
      let palabraSecreta=lsts[numeroAleatorio];
     palabrita= palabraSecreta.toUpperCase();
     palabraSecreta=palabrita;
     console.log("palabraSecreta: "+palabraSecreta)
      arrayWord(palabraSecreta);
      helpWordAdd(palabraSecreta)
      return palabraSecreta;
   }
function btnhelpWord(){
   audioEnter.play();
   document.getElementById('ayuda').innerHTML="";
   document.querySelector("#ayuda").style.border = "none";
   document.querySelector("#ayuda").style.margin = "0vw";
   document.querySelector("#ayuda").style.padding = "0vw";
   document.querySelector("#ayuda").style.width = "0vw";
   document.querySelector("#ayuda").style.height = "0vh";

   document.querySelector("#helpWord").style.border = 0;
   document.querySelector("#helpWord").style.width = "22vw";
   document.querySelector("#helpWord").style.height = "3.8vh";
   document.querySelector("#helpWord").style.background = "black";
   document.querySelector("#helpWord").style.color = "white";
}

function helpWordAdd(palabraSecreta){
   if (listasNumeros.includes(palabraSecreta.toLowerCase())){help.value='UN NUMERO'}
   if (listasFrutas.includes(palabraSecreta.toLowerCase())){help.value='UNA FRUTA'}
   if (listasMeses.includes(palabraSecreta.toLowerCase())){help.value='UN MES'}
   if (!(listasNumeros.includes(palabraSecreta.toLowerCase()))&&!(listasFrutas.includes(palabraSecreta.toLowerCase()))&&!(listasMeses.includes(palabraSecreta.toLowerCase())))
   {help.value='Es tu palabra'}
}

function arrayWord(palabraSecreta){
      arrayPalabra= palabraSecreta.split('');
      wordHidden(arrayPalabra,palabraSecreta)
      return arrayPalabra;
}

function wordHidden(arrayPalabra,palabraSecreta){
      palabraOculta=arrayPalabra.map((l,i, arrayPalabra)=>{return l==arrayPalabra[i] ? '_ ' : l});
      verPalabra(palabraSecreta);
      return palabraOculta;
}
    
let listaJugador=[];
function btnPalabraAdd(){
      audioEnter.play();
      let palabraAdd = document.querySelector('#palabraAdd');
      listas.push(palabraAdd.value);
      listaJugador.push(palabraAdd.value);
      listaSinVacios= listas.filter((item) => item !== '')
      document.getElementById('errores').innerHTML='😁';
      listasAdd(listaSinVacios);
      ingresoCaracter();
      deleteHelp()
      vidas.value='😊😊😊😊😊';
      info.value='Palabra agregada: '+listaJugador.join(' ');
      document.querySelector(".info").style.color = "pink";
      setTimeout(() => {
         document.querySelector(".info").style.color = "yellow";
         info.value='INGRESA UNA LETRA';
         
      }, 1500);
      document.querySelector(".info").style.color = "pink";
      vida=5;
      palabraAdd.value="";
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
            inputPalabra.value="";
         }
      }else{
         // alert('No válido - LETRAS MAYÚSCULAS!!!');
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
                  info.value='PROBÁ CON MAYÚSCULA';
            }, 500);
               setTimeout(function(){entrada.value=''}, 500);
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
            audioAcierto.play();
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
         ltr=letra.toUpperCase();
        
         for(let i in arrayPalabra){
            if(ltr==arrayPalabra[i]&&ltr.match(soloLetras)&&!((ltr=== ' ')||(ltr=== ''))){
               palabraOculta[i]=ltr;
               entrada.value='';
            }
         }
      }
      contadorFallos(ltr);
      contadorIntentos(ltr);
      verPalabra(palabraSecreta);
}

let arrayErrores=[],arrayEntrada=[],vida=5;
    a=0;//incrementador array de letras erradas

function contadorFallos(ltr){
   if(!(ltr==undefined)){
      if(!arrayPalabra.includes(ltr)){
         arrayEntrada[a]=ltr;

         let arrayErrores = arrayEntrada.filter((item,index)=>{
             return arrayEntrada.indexOf(item) === index});
         let vidasGit=[];
             veces=vida-arrayErrores.length;
             a++;
         
         audioPerderVida.play();
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
         console.log(arrayErrores.length+ '  '+ vida)
         if(arrayErrores.length === vida){
            puntaje=99999;
            puntosAdd(puntaje)
            document.getElementById('titulo').innerHTML= 'PERDISTE5️⃣0️⃣0️⃣PUNTOS';

            vidas.value="💀PERDISTE💀"
            personaDeath();
            caja(false);
            audioFinalPerdido.play();
             info.value='PALABRA OCULTA: '+arrayPalabra.join('');
             document.getElementById('errores').innerHTML= "<img src=img/pinguinotriste.gif>";
             setTimeout(function(){
            //  alert('!!!PERDISTE!!!  PALABRA OCULTA: '+arrayPalabra.join(''));
             arrayErrores=[],arrayEntrada=[],vida=5;
             canvas.width=canvas.width;
             patibulo();
             btnJugar();
            }, 3500);
         }
      }
      }else{
            entrada.value='';
      }
   }

let puntaje=0;
function contadorIntentos(ltr){
   let a1=palabraOculta.join(''),
   a2=arrayPalabra.join(''),
   cantidadLetrasAcertadas;
   cantidadLetras=a2.length;
   cantidadLetrasAcertadas=(palabraOculta.filter(e=>e!='_ ')).length;
   puntaje=(cantidadLetrasAcertadas*1000)/(cantidadLetras);
   const comparacionArrayEntradaSalida = function (a1, a2){
      let i = a1.length;
      if (i != a2.length) return false;
      while(i--){
         if (a1[i] !== a2[i]) return false;
      }
      return true;
   }
   if(arrayPalabra.includes(ltr)){
      puntosAdd(puntaje);
      
      if(comparacionArrayEntradaSalida(a1,a2)){
         document.getElementById('errores').innerHTML= "<img src=img/pinguino.gif>";
         ganaste();
         audioVictoria.play();
         document.getElementById('titulo').innerHTML= '🤩 1️⃣0️⃣0️⃣0️⃣ 🤩';
         
         info.value='GANASTE '+puntos.value;
         
         setTimeout(function(){
               //  alert('!!!GANASTE!!! PUNTOS: '+puntos.value);
                info.value='JUGAR OTRA VEZ';
                document.getElementById('errores').innerHTML= ""}, 2500);
                arrayErrores=[],arrayEntrada=[],vida=5;
                setTimeout(function(){
                   canvas.width=canvas.width;
                   patibulo();
                   btnJugar();
                  }, 5000);
                  
               }else{
                  info.value= 'Ingresa otra letra';
               }
               console.log(ltr)
   }
}

function btnJugar(){
    audioInicioJuego.play();
   btnPalabraAdd()
   ingresoCaracter();
   vidas.value='😊😊😊😊😊';
   vida=5;
   info.value='INGRESA UNA LETRA';
   deleteHelp();
 document.getElementById('titulo').innerHTML=
 `<div class="titulo">
      <h1 id="titulo" class="h1">
         JUEGO DEL <strong>AHORCADITO</strong>
      </h1>
   </div>`;

}
btnJugar();

function deleteHelp(){
   document.querySelector("#helpWord").style.width = "0vw";
   document.querySelector("#helpWord").style.height = "0vh";
   document.querySelector("#helpWord").style.border = "none";
   document.querySelector("#helpWord").style.background = "none";
   
   document.getElementById('ayuda').innerHTML="AYUDA";
   document.querySelector("#ayuda").style.border = "1px solid white";
   document.querySelector("#ayuda").style.background = "chocolate";
   document.querySelector("#ayuda").style.margin = "0vw";
   document.querySelector("#ayuda").style.padding = "0vw";
   document.querySelector("#ayuda").style.width = "22vw";
   document.querySelector("#ayuda").style.height = "4vh";

}

function btnRefrescar(){
   audioEnter.play();
   window.location.reload()
}

let arrayPuntos=[],
score=0;

function puntosAdd(puntaje){
      let arrayPalabraNoRepeat = arrayPalabra.filter((item,index)=>{
         return arrayPalabra.indexOf(item) === index});
         LetraAcertadas=(palabraOculta.filter(e=>e!='_ '));
      let LetraAcertadasNoRepeat = LetraAcertadas.filter((item,index)=>{
         return LetraAcertadas.indexOf(item) === index});
         if(arrayPalabraNoRepeat.length==LetraAcertadasNoRepeat.length){
            for(let i =0;i<10;i++){
               arrayPuntos.push(Math.random())
            }
         }
         arrayPuntos.push((puntaje));
         if(puntaje==99999){
            for(let i =0;i<=arrayPalabraNoRepeat.length;i++){
               arrayPuntos.pop()
            }
         }
   for(let i =0;i<arrayPuntos.length;i++){
      if(arrayPuntos[i]==arrayPuntos[i-1]){
         arrayPuntos.pop()
      }
   }
   score=arrayPuntos.length*100;
   puntos.value='PUNTOS: '+ score;
        
}
               
               
               