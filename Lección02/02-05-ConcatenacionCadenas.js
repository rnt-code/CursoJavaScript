var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

//Contexto string
var x = nombre + 21 + 9; //el número se trata como una cadena porque está por detrás
console.log(x);

var x = nombre + (2 + 4); //acá el numero si lo toma como número porque está entre paréntesis
console.log(x);

var x = 2 + 4 + nombre; //acá el numero si lo toma como número porque está adelante
console.log(x);

