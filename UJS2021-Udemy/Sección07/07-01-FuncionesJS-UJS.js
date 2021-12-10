//Hoisting: podemos llamar a la función aún antes de que se llegue a la declaración
miFuncion(4, 2);

//Declaración de la función. Hoisting pasa la declaración al principio del programa.
function miFuncion(a, b) {
    console.log("Suma: " + (a + b)); //el paréntesis es para que se efectue la suma, ojo!!! 
}

//Llamando a la función
miFuncion(2, 3);

