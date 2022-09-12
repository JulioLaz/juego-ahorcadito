newLista=[];
// let soloLetras = /^[a-zA-Z]/;

function btnGetWord(){
    
   let word = document.getElementById('palabraIngresada').value;
   listas.push(word);
   
   console.log('word: '+ word + "  listas nueva: "+ listas);
   // return listas;
}
// let y=star(listas);
   
   // let yy=ver();
   function ver(){
      newLista =   (listas.filter(el => el));
      console.log("newista: "+ newLista);
      return newLista;
   }
   
// function ingresoPalabra(){
//    let inputPalabra = document.getElementById('palabraIngresada');
//    let inputPalabraAdd = document.getElementById('palabraIngresadaAdd');
//    let arrayInput=[];
//    inputPalabra.addEventListener('keyup', e=> {
//    datos = e.key;
//    keycodes = e.keyCode;
//       if (datos.match(soloLetras)){
//          if ((keycodes === 13)){
//             btnGetWord();
//             document.getElementById('palabraIngresadaAdd').innerHTML=inputPalabra.value;
//             arrayInput.push(inputPalabra.value);
//             inputPalabraAdd.value=arrayInput;
//             inputPalabra.value="";
//          }
//       }else{
//          alert('Caracter no válido!!!');
//          inputPalabra.value="";
//          // setTimeout(function(){
//          // entrada.value=''}, 500);
//       }
//    });
// }
// ingresoPalabra();

console.log()