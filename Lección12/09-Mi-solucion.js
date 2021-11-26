class Orden {

    static get MAX_PRODUCTO() {
        return 5;
    }
    static contadorOrdenes = 0;
    
    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        //this.contadorProductosAgregados = 0;
    }

    //getters
    get getIdOrden() {
        return this.idOrden;
    }

    //metodos
    agregarProducto(producto) {
        
        if(this.productos.length < Orden.MAX_PRODUCTO) {
            this.productos.push(producto);
        }
        else {
            console.log('No se pueden agregar mas productos')
        }
    }

    calcularTotal() {
        
        let acumulador = 0;
        for(let producto of this.productos) {
            acumulador += producto.precio;
        }
        return acumulador;
    }

    mostrarOrden() {

        let productosOrden = '';
        for(let producto of this.productos) {
            productosOrden += '\n' + producto.toString() + ' ';
        }
        
        console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
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

let o1 = new Orden();
o1.agregarProducto(p1);
o1.agregarProducto(p2);
o1.agregarProducto(p3);

console.log(o1.getIdOrden);
o1.mostrarOrden();

let o2 = new Orden();
let p4 = new Producto('Mesa', 3500);
o2.agregarProducto(p4);
o2.mostrarOrden(); 
