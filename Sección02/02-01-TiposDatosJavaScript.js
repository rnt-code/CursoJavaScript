/*
Ejmplos de 
tipos de datos
en javaScript
*/ 
//tipo de dato string
var nombre = "Carlos"
console.log(nombre);

//Tipo de dato numérico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: '45687455'
}
//En javascript, el tipado es dinámico
console.log(objeto);
//typeof es para saber el tipo de la variable
console.log(typeof objeto);

nombre = 15;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion() {

}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol('mi símbolo');
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase, pero es una función
class Persona {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo undefine, es un indefinido
var x;
console.log(x);
console.log(typeof x);

var x1 = undefined;
console.log(x1);

//null = ausencia de valor, es un objeto
var y = null;
console.log(y);
console.log(typeof y);

//tipo array, los arreglos son objeto
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//valores vacios
var z = '';
console.log(z);
console.log(typeof z);