//Declaración de la función
function miFuncion(a, b){
    //arguments.length (propiedad del objeto function) sirve para ver cuantos argumentos tiene la función.
    //debe usarse dentro del cuerpo (code-block) de la función.
    console.log(arguments.length);
    return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

(function (a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

console.log(typeof miFuncion);

//método toString() del objeto function
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//esto es los que devuelve el método toString():
/*
function miFuncion(a, b) { 
    var $_$c = $_$wf(1); 
    $_$w(1, 0, $_$c), $_$tracer.log(arguments.length, 'arguments.length', 1, 0); 
    return $_$w(1, 1, $_$c), a + b; 
}
*/