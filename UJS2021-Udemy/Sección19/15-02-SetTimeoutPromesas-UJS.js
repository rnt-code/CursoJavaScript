let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');    
});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
//miPromesa.then(valor => console.log(valor)).catch(error=>console.log(error));
//------------------------------------------------------------------------------

//no es obligatorio manejar los dos parámetros: resolver y rechazar
//instanciamos un objeto promesa
let promesa = new Promise((resolver) => {
    console.log('inicio promesa');
    setTimeout(()=> resolver('saludos con promesa y timeout'), 3000);
    console.log('fin promesa');
});

//función callback
let resolver = valor => console.log(valor)

promesa.then(resolver);