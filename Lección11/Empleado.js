class Empleado extends Persona {

    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.contadorEmpleados;
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
        return `${super.toString()} ${this.idEmpleado} ${this.sueldo}`;
        //return super.toString() + ' ' + this.idEmpleado + ' ' + this.sueldo;
        //return 'id=' + this.idEmpleado +': '+ this.nombre +' '+ this.apellido +', '+ this.edad + ' años' + ', ' + this.sueldo;
    }
}