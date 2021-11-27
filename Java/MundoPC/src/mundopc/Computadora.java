package mundopc;

public class Computadora {
    
    //atributos de clase
    static private int contadorComputadoras;
    
    //atributos de instancia
    private int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;

    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton) {
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.idComputadora = ++Computadora.contadorComputadoras;
    }
    
    //getter & setters
    public int getIdComputadora() {
        return idComputadora;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Raton getRaton() {
        return raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }
    
    @Override
    public String toString() {
        return "idComp=" + this.getIdComputadora() + " " 
                         + this.getNombre() + ":\n " 
                         + this.getMonitor() + ",\n "
                         + this.getRaton() + ",\n "
                         + this.getTeclado() + ".\n";
    }  
}
