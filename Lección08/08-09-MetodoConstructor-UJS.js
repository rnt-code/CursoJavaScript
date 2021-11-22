//Funcion constructor de objetos de tipo Persona

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log( padre );
console.log(typeof padre);

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );

//cambio en una propiedad del objeto padre
padre.nombre = 'Carlos';

console.log( padre );
console.log( madre );