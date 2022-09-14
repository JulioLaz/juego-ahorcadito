newLista=[];
let soloLetras = /^[a-zA-Z]/;

function btnGetWord(){
    
   let word = document.querySelector('#palabraIngresada').value;
   listas.push(word);

   console.log('word: '+ word + " +   nueva lista: "+ listas);
   // ver();
   return listas;
  }
   // let y=ver();
   // function ver(){
   //    newLista =   (listas.filter(el => el));
   //    console.log("newista: "+ newLista);
   //    return newLista;
   // }
   
   // console.log("nueva listas: "+ y);
   console.log("nueva listas: "+ listas);

function ingresoPalabra(){
   let inputPalabra = document.getElementById('palabraIngresada');
   let inputPalabraAdd = document.getElementById('palabraIngresadaAdd');
   let arrayInput=[];
   inputPalabra.addEventListener('keyup', e=> {
   dato = e.key;
   keycode = e.keyCode;
      if (dato.match(soloLetras)){
         if ((keycode === 13)){
            btnGetWord();
            document.getElementById('palabraIngresadaAdd').innerHTML=inputPalabra.value;
            arrayInput.push(inputPalabra.value);
            inputPalabraAdd.value=arrayInput;
            inputPalabra.value="";
         }
      }else{
         alert('Caracter no válido!!!');
         inputPalabra.value="";
         // setTimeout(function(){
         // entrada.value=''}, 500);
      }
   });
}
ingresoPalabra();

console.log