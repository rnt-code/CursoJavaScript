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
        return "idTec=" + this.getIdTeclado() + " " + this.getTipoEntrada() + " " + this.getMarca();
    }
}
