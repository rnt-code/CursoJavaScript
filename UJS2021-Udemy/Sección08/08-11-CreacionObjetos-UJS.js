//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre.nombreCompleto() );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre.nombreCompleto() );

padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );

let miObjeto = new Object(); //sintaxis formal para crear objetos
let miObjeto2 = {}; //sintaxis simplificada para igual propósito

let miCadena = new String('Hola'); //sintaxis formal
let miCadena2 = 'Hola'; //sintaxis simplificada

let miNumero = new Number(1); //formal
let miNumero2 = 1; //simplificada

let miBoolean = new Boolean(false); //formal
let miBoolean2 = false; //simplificada

let miArreglo = new Array(); //formal 
let miArreglo2 = []; //simplificada

let miFuncion = new Function(); //formal
let miFuncion2 = function(){}; //simplificada