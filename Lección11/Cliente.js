class Cliente extends Persona {

    static contadorClientes = 0;

    fechaRegistro = new Date();
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = ++Cliente.contadorClientes;
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
        return `${super.toString()} ${this.idCliente} ${this.fechaRegistro}`;
        //return 'id=' + this.idCliente +': '+ this.nombre +' '+ this.apellido +', '+ this.edad + ' años, '+ this.fechaRegistro;
    }
}