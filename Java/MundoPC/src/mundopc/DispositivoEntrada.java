package mundopc;

public abstract class DispositivoEntrada {
    
    //atributos de instancia
    String tipoEntrada;
    String marca;

    //constructor
    public DispositivoEntrada(String tipoEntrada, String marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    //abstract getters & setters
    public abstract String getTipoEntrada();
 
    public abstract void setTipoEntrada(String tipoEntrada);

    public abstract String getMarca();

    public abstract void setMarca(String marca);
}
