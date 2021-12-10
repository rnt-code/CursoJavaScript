function miFuncion(fn) {
    nombre = 'Juan';
    fn(nombre);
}

saludar = function(nombre) {
    console.log("Hola " + nombre);
}

miFuncion(saludar);