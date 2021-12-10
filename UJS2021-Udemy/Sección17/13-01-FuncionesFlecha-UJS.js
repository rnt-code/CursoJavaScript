function miFuncion_estandar() {
    console.log('saludos desde mi función estándar');
}

let miFuncion_anonima = function () {
    console.log('saludos desde mi función anónima');
}

//type <nombre_variable> = () => { cuerpo de la función}
const miFuncion_flecha = () => {
    console.log('saludos desde mi función flech, que también es anónima');
}

miFuncion_estandar();
miFuncion_anonima();
miFuncion_flecha();

//en caso que la función felcha devuelva un objeto:
const regresaObjeto = () => ({Nombre: 'Juan', apellido: "López"});
console.log(regresaObjeto());

//con parámetro
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("saludos desde mi función con un parámetro");

//si solo tenemos un parámetro, podemos omitir el paréntesis en el parámetro
const funcionConParametros2 = mensaje => console.log(mensaje);
funcionConParametros2("saludos desde mi función con un parámetro, parámetro sin paréntesis");

//si tenemos varios parámetros
const funcionConVariosParametros = (param1, param2) => param1 + param2;
console.log(funcionConVariosParametros(8,9));

const funcionConVariosParametros2 = (param1, param2) => {
    
    resultado = param1 + param2;
    return resultado;
};
console.log(funcionConVariosParametros2(8,5));