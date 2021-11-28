package ejercicioherencia;
import java.time.LocalDate;

public class Cliente extends Persona {
    
    //atributos de clase
    static private int contadorClientes;
    
    //atributos de instancia
    private int idCliente;
    private LocalDate fechaRegistro;
    

    public Cliente(String nombre, String apellido, int edad, LocalDate fechaRegistro) {
        super(nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = ++Cliente.contadorClientes;
    }
    
    //setters & getters
    public int getIdCliente() {
        return this.idCliente;
    }

    public LocalDate getFechaRegistro() {
        return this.fechaRegistro;
    }

    public void setFechaRegistro(LocalDate fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }
    
    //métodos
    @Override
    public String toString() {
        return super.toString() + " " 
              + this.getIdCliente() + " " 
              + this.getFechaRegistro();
    }
}
