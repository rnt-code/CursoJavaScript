let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ', tel: ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log( persona1.nombreCompleto('Lic.', '66887711') );

//Uso de apply para usar el metodo persona1.nombreCompleto con los datos del persona2

let arreglo = ['Ing.','55443322'];
console.log( persona1.nombreCompleto.apply( persona2, arreglo) );