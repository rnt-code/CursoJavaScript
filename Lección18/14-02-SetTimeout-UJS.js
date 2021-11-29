/*
miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3, imp);
*/

//Llamadas asíncronas con uso setTimeout
function miFuncionCallback(){
    console.log('saludo asíncrono 1, 3 seg después de -Mensaje uno-');
}

setTimeout(miFuncionCallback, 3000);//después de 3 seg

setTimeout( function(){ console.log('saludo asíncrono 2, 3 segundos después')}, 7000);

setTimeout( () => console.log('saludo asíncrono 3, 3 segundos después'), 11000);

console.log("Mensaje uno");