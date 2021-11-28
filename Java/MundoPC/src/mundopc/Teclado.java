package mundopc;

public class Teclado extends DispositivoEntrada {
    
    //atributos de clase
    static private int contadorTeclados;
    
    //atributos de instancia
    private int idTeclado;

    //constructor
    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    //getter & setters
    public int getIdTeclado() {
        return this.idTeclado;
    }
   
    //métodos
    @Override
    public String toString() {
        return "idTec=" + this.getIdTeclado() + " " + super.toString();
    }
}
