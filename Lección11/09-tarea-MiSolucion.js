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
    get getIdPersona() {
        return this.getIdPersona;
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
        //return 'id=' + this.idPersona +': '+ this.nombre +' '+ this.apellido +', '+ this.edad + ' años';
        //usamos el concepto de template string
        return `id=${this.idPersona}: ${this.nombre} ${this.apellido}, ${this.edad} años`;
    }
}

class Empleado extends Persona {

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = Persona.contadorPersonas;
    }

    //getters
    get getIdEmpleado() {
        return this.idEmpleado;
    }

    get getSueldo() {
        return this.sueldo;
    }
    
    //setters
    /**
     * @param {Number} sueldo
     */
    set setSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    //Overriding
    toString() {
        return 'id=' + this.idEmpleado +': '+ this.nombre +' '+ this.apellido +', '+ this.edad + ' años' + ', ' + this.sueldo;
    }
}

class Cliente extends Persona {

    fechaRegistro = new Date();
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = Persona.contadorPersonas;
    }

    //getters
    get getIdCliente() {
        return this.idCliente;
    }

    get getFechaRegistro() {
        return this.fechaRegistro;
    }

    //setters
    /**
     * @param {Date} fechaRegistro
     */
    set setFechaRegistro(fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    //métodos
    //Overriding
    toString() {
        return 'id=' + this.idCliente +': '+ this.nombre +' '+ this.apellido +', '+ this.edad + ' años, '+ this.fechaRegistro;
    }
}


let p1 = new Persona('Ramon','Taboada',53);
console.log(p1);
console.log(p1.toString());

let e1 = new Empleado('Jorge','Fernandez',34 ,4500);
console.log(e1);
console.log(e1.toString());

let e2 = new Empleado('Jorge','Fernandez',34 ,4500);
console.log(e2);
console.log(e2.toString());

let c1 = new Cliente('Manuel', 'Perez', 45, '6/05/2012');
console.log(c1);
console.log(c1.toString());

let c2 = new Cliente('Manuela', 'Gerez', 25, '17/11/2018');
console.log(c2);
console.log(c2.toString());
