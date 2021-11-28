class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    //getter & setters
    get getTipoEntrada() {
        return this.tipoEntrada;
    }

    /**
     * @param {String} tipoEntrada
     */
    set setTipoEntrada(tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    get getMarca() {
        return this.marca;
    }

    /**
     * @param {String} marca
     */
    set setMarca(marca) {
        this.marca = marca;
    }
}

class Raton extends DispositivoEntrada {

    //atributos de clase
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    //getter & setters
    get getIdRaton() {
        return this.idRaton;
    }

    //métodos
    toString() {
        //return "IdRat=" + this.getIdRaton + " " + this.getTipoEntrada + " " + this.getMarca;
        return `IdRat=${this.getIdRaton} ${this.getTipoEntrada} ${this.getMarca}`;
    }
}

class Teclado extends DispositivoEntrada {

    //atributos de clase
    static contadorTeclados = 0;

    //Constructor
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    //getter & setters
    get getIdTeclado() {
        return this.idTeclado;
    }
    
    //métodos
    toString() {
        return "idTec=" + this.getIdTeclado + " " + this.getTipoEntrada + " " + this.getMarca;
    }
}

class Monitor {

    //atributos de clase
    static contadorMonitores = 0;

    //constructor
    constructor(marca, tamanio) {
        this.marca = marca;
        this.tamanio = tamanio;
        this.idMonitor = ++Monitor.contadorMonitores;
    }

    //getter & setters
    get getIdMonitor() {
        return this.idMonitor;
    }

    get getMarca() {
        return this.marca;
    }

    set setMarca(marca) {
        this.marca = marca;
    }

    get getTamanio() {
        return this.tamanio;
    }

    set setTamanio(tamanio) {
        this.tamanio = tamanio;
    }
    
    //métodos
    toString() {
        return "IdMon=" + this.getIdMonitor + " " + this.getMarca + " " + this.getTamanio;
    }    
}

class Computadora {

    //atributos de clase
    static contadorComputadoras = 0;

    //constructor
    constructor(nombre, monitor, teclado, raton) {
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.idComputadora = ++Computadora.contadorComputadoras;
    }

    //getter & setters
    get getIdComputadora() {
        return this.idComputadora;
    }

    get getNombre() {
        return this.nombre;
    }

    /**
     * @param {String} nombre
     */
    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getMonitor() {
        return this.monitor;
    }

    /**
     * @param {String} monitor
     */
    set setMonitor(monitor) {
        this.monitor = monitor;
    }

    get getTeclado() {
        return this.teclado;
    }

    /**
     * @param {String} teclado
     */
    set setTeclado(teclado) {
        this.teclado = teclado;
    }

    get getRaton() {
        return this.raton;
    }

    /**
     * @param {String} raton
     */
    set setRaton(raton) {
        this.raton = raton;
    }
    
    toString() {
        return "idComp=" + this.getIdComputadora + " " 
                         + this.getNombre + ":\n " 
                         + this.getMonitor + ",\n "
                         + this.getRaton + ",\n "
                         + this.getTeclado + ".\n";
    }    
}

class Orden {

    //atributos de clase
    static contadorOrdenes = 0;

    //constructor
    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.contadorProductos = 0;
        this.computadoras = [];
    }

    //getters
    get getIdOrden() {
        return this.idOrden;
    }

    //métodos
    agregarComputadora(c) {
        
        this.computadoras.push(c);
    }

    mostrarOrden() {

        let computadorasOrden = '';
        for(let computadora of this.computadoras) {
            computadorasOrden += '\n' + computadora + ' ';
        }
        
        console.log(`IdOrden=${this.getIdOrden} ${computadorasOrden}`);
    }
}

    
    let m1 = new Monitor("HP", "15 pulg");
    let m2 = new Monitor("Dell", "27 pulg");
    
    let t1 = new Teclado("Bluetooth", "MSI");
    let t2 = new Teclado("USB", "ACER");
    
    let r1 = new Raton("USB", "HP");
    let r2 = new Raton("Bluetooth", "Dell");
    
    let c1 = new Computadora("HP", m2, t1, r2);
    let c2 = new Computadora("Armada", m1, t2, r1);

    
    console.log(m1.toString());
    console.log(m2.toString());
    console.log(t1.toString());
    console.log(t2.toString());
    console.log(r1.toString());
    console.log(r2.toString());
    console.log(c1.toString());
    console.log(c2.toString());
    
    
    let o1 = new Orden();
    let o2 = new Orden();
    o1.agregarComputadora(c1);
    o1.agregarComputadora(c2);

    o2.agregarComputadora(c2);
    o2.agregarComputadora(c2);

    o1.mostrarOrden();
    o2.mostrarOrden();