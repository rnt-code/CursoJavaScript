package mundopc;

public class Raton extends DispositivoEntrada {
    
    //atributos de clase
    static private int contadorRatones;
    
    //atributos de instancia
    private int idRaton;

    //constructor
    public Raton(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }
    
    //getter & setters
    public int getIdRaton() {
        return this.idRaton;
    }
    
    //métodos
    @Override
    public String toString() {
        return "IdRat=" + this.getIdRaton() + " " + super.toString();
    } 
}
