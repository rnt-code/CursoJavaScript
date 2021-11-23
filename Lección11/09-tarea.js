//Clase Persona
class Persona {
     
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this.idPersona = ++Persona.contadorPersonas;
        this.nombre = nombre; 
        this.apellido = apellido;
        this.edad = edad;
    }

    //getters
    get getNombre() {
        return this.nombre;
    }
    get getApellido() {
        return this.apellido;
    }
    get getEdad() {
        return this.edad;
    }

    //setters
    /**
     * @param {String} nombre
     */
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    /**
     * @param {String} apellido
     */
    set setApellido(apellido) {
        this.apellido = apellido;
    }
    /**
     * @param {Number} edad
     */
    set setEdad(edad) {
        if(edad > 0) {
            this.edad = edad;
        }
    }

    //métodos
    //Overriding
    toString() {
        return `${this.nombre} ${this.apellido}, ${this.edad} años`;
    }
}

class Empleado extends Persona {

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
}

class Cliente extends Persona {

    constructor(nombre, apellido, edad, fecha) {
        super(nombre, apellido, edad);
        this.fecha = fecha;
    }
}


let p1 = new Persona('Ramon','Taboada',53);
console.log(p1);
p1.toString();

let e1 = new Empleado('Jorge','Fernandez',34,4500);
console.log(e1);