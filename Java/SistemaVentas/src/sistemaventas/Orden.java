package sistemaventas;

public class Orden {
    
    //atributos de clase
    static private final int MAX_PRODUCTOS = 5;
    static private int contadorOrdenes;
    static private int contadorProductosAgregados;
    
    //atributos de instancia
    private int idOrden;
    private Producto[] productos;
    
    //constructor
    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        productos = new Producto[5];
        Orden.contadorProductosAgregados = 0;
    }
    
    //setters & getters
    public int getIdOrden() {
        return idOrden;
    }
    
    //métodos
    public void agregarProducto(Producto p) {
                                    
        if(Orden.contadorProductosAgregados < Orden.MAX_PRODUCTOS) {
            productos[Orden.contadorProductosAgregados] = p;
            ++Orden.contadorProductosAgregados;
        }
        else {
            System.out.println("No se pueden agregar más productos");
        }
    }
    
    public float calcularOrden() {
        float acumulador = 0;
        
        for(int i = 0; i < Orden.contadorProductosAgregados; i++) {
            acumulador = acumulador + productos[i].getPrecio();
        }
        return acumulador;
    }
    
    @Override
    public String toString() {
        
        String prod = "";
        
        for(int i = 0; i < Orden.contadorProductosAgregados; i++) {
            prod = prod + productos[i] + "\n";
        }
        return "Orden nº=" + this.getIdOrden() + ", Total orden: $" + this.calcularOrden() + "\n" + prod;
    }
}
