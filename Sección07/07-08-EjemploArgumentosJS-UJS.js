//hoisting
//A sumarTodo() se le pasan los argumentos necesarios, y también de forma dinámica.
let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //acumulador: suma = suma + arguments[i]
        console.log(suma);
    }
    return suma;
}