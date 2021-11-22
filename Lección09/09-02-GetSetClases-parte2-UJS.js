class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; 
        this.apellido = apellido;
    }
    get getNombre(){
        return this.nombre;
    }
    /**
     * @param {String} nombre
     */
    set setNombre(nombre){
        this.nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.setNombre = 'Juan Carlos';//set nombre('Juan Carlos')
console.log( persona1.getNombre );//get nombre