package sistemaventas;

public class Producto {
    
    //atributos de clase
    static private int contadorProductos;
    
    //atributos de instancia
    private int idProducto;
    private String nombre;
    private float precio;
    
    //constructores
    public Producto() {
    }
 
    public Producto(String nombre, float precio) {
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
    }
    
    //setters & getters
    public int getIdProducto() {
        return idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }
    
    //métodos
    @Override
    public String toString() {
        return this.getIdProducto() + " "
             + this.getNombre() + " "
             + this.getPrecio() + ", ";
    }
}
