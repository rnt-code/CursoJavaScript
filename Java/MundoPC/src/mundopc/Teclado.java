package mundopc;

public class Teclado extends DispositivoEntrada {
    
    //atributos de clase
    static private int contadorTeclados;
    
    //atributos de instancia
    private int idTeclados;

    //constructor
    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idTeclados = ++Teclado.contadorTeclados;
    }

    //getter & setters
    public int getIdTeclados() {
        return idTeclados;
    }

    @Override
    public String getTipoEntrada() {
        return tipoEntrada;
    }

    @Override
    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    @Override
    public String getMarca() {
        return marca;
    }

    @Override
    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    //métodos
    @Override
    public String toString() {
        return "idTec=" + this.getIdTeclados() + " " + this.getTipoEntrada() + " " + this.getMarca();
    }
}
