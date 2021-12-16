let miPromesa = new Promise((resolver, rechazar) => {

    let expresion = true;
    if(expresion)
        resolver('Resolvió correctamente');
    else
        rechazar('Se produjo un error');    

});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
miPromesa
    .then(valor => console.log(valor))
    .catch(error=> console.error(error));

//la promesa puede tener solo uno de los parámetros

let promesa = new Promise((resolver) => {
    
});
