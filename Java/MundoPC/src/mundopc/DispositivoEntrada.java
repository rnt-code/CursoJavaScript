package mundopc;

public class DispositivoEntrada {
    
    //atributos de instancia
    String tipoEntrada;
    String marca;

    //constructor
    public DispositivoEntrada(String tipoEntrada, String marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    //abstract getters & setters
    public String getTipoEntrada() {
        return this.tipoEntrada;
    }

    public void setTipoEntrada(String tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    @Override
    public String toString() {
        return this.getTipoEntrada() + " " + this.getMarca();
    }
}
