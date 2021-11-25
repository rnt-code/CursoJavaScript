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
        return `id=${this.idPersona}: ${this.nombre} ${this.apellido}, ${this.edad} años`;
        //return 'id=' + this.idPersona +': '+ this.nombre +' '+ this.apellido +', '+ this.edad + ' años';
        //usamos el concepto de template string
       
    }
}