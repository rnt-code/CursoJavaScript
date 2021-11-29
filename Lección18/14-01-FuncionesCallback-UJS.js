miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log('función 1');
}

function miFuncion2(){
    console.log('función 2');
}

//Función de tipo callback
let imprimir = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let suma = op1 + op2;
    funcionCallback(`Resultado: ${suma}`);
}

sumar(5,3, imprimir);