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

    @Override
    public String getTipoEntrada() {
        return this.tipoEntrada;
    }

    @Override
    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    @Override
    public String getMarca() {
        return this.marca;
    }

    @Override
    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    //métodos
    @Override
    public String toString() {
        return "IdRat=" + this.getIdRaton() + " " + this.getTipoEntrada() + " " + this.getMarca();
    } 
}
