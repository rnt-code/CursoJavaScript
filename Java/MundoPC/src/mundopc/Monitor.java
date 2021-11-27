package mundopc;

public class Monitor {
    
    //atributos de clase
    static private int contadorMonitores;
    
    //atributos de clase
    private int idMonitor;
    private String marca;
    private String tamanio;
    
    //constructor
    public Monitor(String marca, String tamanio) {
        this.marca = marca;
        this.tamanio = tamanio;
        this.idMonitor = ++Monitor.contadorMonitores;
    }
    
    //getter & setters
    public int getIdMonitor() {
        return idMonitor;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getTamanio() {
        return tamanio;
    }

    public void setTamanio(String tamanio) {
        this.tamanio = tamanio;
    }
    
    //métodos
    @Override
    public String toString() {
        return "IdMon=" + this.getIdMonitor() + " " + this.getMarca() + " " + this.getTamanio();
    }
}
