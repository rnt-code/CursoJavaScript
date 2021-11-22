let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    
    get getNombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    },

    get getNombre() {
        return this.nombre;
    },
}

console.log(persona.getNombreCompleto);
console.log(persona.getNombre);
