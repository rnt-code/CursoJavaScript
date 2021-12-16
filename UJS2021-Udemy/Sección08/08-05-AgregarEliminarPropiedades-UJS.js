let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//son dos propiedades distintas, queremos eliminar la propiedad tel
persona.tel = '55443322';
persona.te1 = '44332211';

console.log( persona );

//eliminar la propiedad tel
delete persona.tel;

console.log( persona );