//Declaración Función de tipo Expresión
//Valores por defecto: a = 4, b = 5, si no se asignan valores a a y b, JS tomas los valores por defecto.

let sumar = function (a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + c;
};

resultado = sumar(3, 6);
console.log(resultado);