//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);
//console.log(a);

//Definimos un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);