//Tipos primitivos (los primitivos no tienen ni atributos ni métodos asociados)
let x = 10;

function cambiarValor(a){
    a = 20;
    //el return es implícito
}

//Paso por valor
cambiarValor(x);//10
console.log(x);//console.log(a);
//x no sufrió cambios, x solo pasó su valor a la función. x no está relacionado con a. Esto es paso por valor.


