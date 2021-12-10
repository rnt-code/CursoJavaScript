let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ', ' + "tel: " + tel;
    }
    //titulo y tel no son propiedades del objeto
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}


console.log( persona1.nombreCompleto('Lic.', '44332288') );

//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto.call( persona2, 'Ing.', '5544332211' ) );