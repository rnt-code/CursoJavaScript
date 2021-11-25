class Orden {

    static MAX_PRODUCTO = 5;
    static contadorOrdenes = 0;
    static contadorProductosAgregados = 0;

    
    constructor() {
        this.idOrden = ++contadorOrdenes;
    }

    //metodos
    agregarProducto(producto) {
        ++contadorProductosAgregados;
        let i = contadorProductosAgregados;
        p[i] = new Producto;
        p[i] = producto;
    }

    calcularTotal() {
        let acumulador = 0;
        for(let i=0; i < contadorProductosAgregados; i++) {
            let acumulador = acumulador + p[i].precio;
        }
        return acumulador;
    }

    mostrarOrden() {

        for(let i=0; i < contadorProductosAgregados; i++) {
            return p[i].nombre + ' ' + p[i].precio;
        }
    }
}

class Producto {

    static contadorProductos = 0;
    
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = ++Producto.contadorProductos;
    }

    //getters
    get getIdProducto() {
        return this.idProducto;
    }
    get getNombre() {
        return this.nombre;
    }
    get getPrecio() {
        return this.precio;
    }

    //setters
    /**
     * @param {String} nombre
     */
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    /**
     * @param {Number} precio
     */
    set setPrecio(precio) {
        this.precio = precio;
    }

    //métodos
    toString() {
        return `id=${this.getIdProducto}, ${this.getNombre}, \$${this.getPrecio}`;
        //return 'id='+this.getIdProducto + ', ' + this.getNombre + ', $' + this.getPrecio;
    }
}

let p1 = new Producto('Pantalón', 3400);
console.log(p1.toString());
let p2 = new Producto('Camisa', 4500);
console.log(p2.toString());
let p3 = new Producto('Calzoncillo', 1200);
console.log(p3.toString());