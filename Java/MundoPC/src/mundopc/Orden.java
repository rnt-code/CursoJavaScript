package mundopc;

public class Orden {
    
    //atributos de clase
    static private int contadorOrdenes;
    static private int contadorProductos;
    
    //atributos de instancia
    private int idOrden;
    Computadora[] computadoras;
    
    //constructor
    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        computadoras = new Computadora[15];
        Orden.contadorProductos = 0;
    }
    
    //getters
    public int getIdOrden() {
        return idOrden;
    }
    
    //métodos
    public void agregarComputadora(Computadora c) {
        
        computadoras[Orden.contadorProductos] = c;
        ++Orden.contadorProductos;
    }
    
    public String mostrarOrden() {
        
        String productos = "";
        
        for(int i = 0; i < Orden.contadorProductos; i++) {
            productos = productos + this.computadoras[i];
        } 
        return "IdOrden=" + this.getIdOrden() + "\n" + productos;
    }
}
