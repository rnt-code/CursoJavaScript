/*
Ejemplo base
Tenemos un array numbers, en el cuál insertaremos números. Insertaremos la cantidad de números que figura en iterations. En cada iteración se insertará un number, que habrá sido generado con una simulación del lanzamiento de un dado (un número aleatorio del 1 al 6). En el caso de obtener un 6, paramos y rompemos el bucle:
*/

const iterations = 20;
const numbers = [];

for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
        console.log("ERROR");
        break;
    }
}

console.log(numbers);

/*
Al terminar este fragmento de código, tendremos un array numbers que contendrá todos los números obtenidos en los lanzamientos de los dados, es decir, 10 números si no hemos obtenido ningún 6. Si hemos obtenido un 6 puede que tengamos menos números, debido a que se rompe el bucle tras insertarlo.

    Ten en cuenta que este ejemplo es una tarea síncrona (aún no existe asincronía). Simplemente estamos explicando el ejemplo que usaremos de base en los siguientes capítulos del tema para controlar asincronía. Quizás lo ideal sería que cada lanzamiento del lado tardase un tiempo concreto en dar la respuesta, pero no se ha introducido ese retardo para simplificar los ejemplos de código.

*/

//Imaginemos el siguiente bucle tradicional para recorrer un array
const list = ["A", "B", "C"];

for (let i = 0; i < list.length; i++) {
    console.log("i=", i, " list=", list[i]);
}

/*
En i tenemos la posición del array que estamos recorriendo (va de 0 a 2) y con list[i] accedemos a la posición del array para obtener el elemento, es decir, desde A hasta C. Ahora veamos, como podemos hacer este mismo bucle utilizando el método forEach() del array al cuál le pasamos una función callback:
*/
list.forEach(function(e,i) {
    console.log("i=", i, "list=", e);
  });

//Esto se puede reescribir como:
["A", "B", "C"].forEach((e,i) => console.log("i=", i, "list=", e));

/*
Lo importante de este ejemplo es que se vea que la función callback que le hemos pasando a forEach() se va a ejecutar por cada uno de los elementos del array, y en cada iteración de dicha función callback, los parámetros e, i van a tener un valor especial:

    e es el elemento del array
    i es el índice (posición) del array

*/
