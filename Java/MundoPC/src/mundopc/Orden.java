package mundopc;

public class Orden {
    
    //atributos de clase
    static private int contadorOrdenes = 0;
    
    //atributos de instancia
    private int idOrden;
    private int contadorProductos;
    Computadora[] computadoras;
    
    //constructor
    public Orden() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.contadorProductos = 0;
        computadoras = new Computadora[15];
    }
    
    //getters
    public int getIdOrden() {
        return idOrden;
    }
    
    //métodos
    public void agregarComputadora(Computadora c) {
        
        computadoras[this.contadorProductos] = c;
        this.contadorProductos++;
    }
    
    public String mostrarOrden() {
        
        String productos = "";
        for(int i = 0; i < this.contadorProductos; i++) {
            productos = productos + this.computadoras[i];
        } 
        return "IdOrden=" + this.getIdOrden() + "\n" + productos;
    }
}
