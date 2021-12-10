let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let acumulador = 0;

mostrar = function(numero) {
    console.log(numero);
}

/*
mostrarPar = function(numero) {
    if(numero % 2 == 0) {
        console.log(numero);
    }
}
*/

mostrarImpar = function(numero) {
    if(numero % 2 == 1) {
        console.log(numero);
    }
}

sumarNumeros = function(numero) {
    acumulador +=numero
    return acumulador;
}

//numeros.forEach(mostrarPar);
numeros.forEach(numero => (numero % 2 == 0) ? console.log(numero): null);
numeros.forEach(mostrarImpar);
numeros.forEach(sumarNumeros);
console.log(acumulador);


const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

const array = [1,2,3,4,5,6,7,8,9,10];

//función callback: x => {return 2*x}

//.maps
//let dobles = array.map(x => {return 2*x});
let dobles = array.map(x => 2*x); //funciona igual porque las funciones flecha tienen return implícito
console.log(dobles);

//.filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

let data = [12, 5, 8, 130, 44]
//var filtrados = [12, 5, 8, 130, 44].filter(x => {return x >= 10});
var filtrados = data.filter(x => x >= 10); //funciona igual porque las funciones flecha tienen return implícito
console.log(filtrados);