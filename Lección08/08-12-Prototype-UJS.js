//Funcion constructor de objetos de tipo Persona

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '44332211'; //con esto agregamos una nueva propiedad a Persona

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
//padre.tel = '11223344'; //esta propiedad se agrega solo al objeto 'padre'
console.log( padre.tel );

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
//madre.tel = '66889900'; //esta propiedad se agrega solo al objeto 'madre'
console.log( madre.tel );

