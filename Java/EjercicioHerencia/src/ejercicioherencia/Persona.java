package ejercicioherencia;

class Persona {
    
    //atributos de clase
    static private int contadorPersonas;
    
    //atributos de instancia
    private int idPersona;
    private String nombre;
    private String apellido;
    private int edad;
    
    //constructor

    public Persona(String nombre, String apellido, int edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
    }
    
    //getters and setters
    public int getIdPersona() {
        return this.idPersona;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }
    
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    //métodos
    @Override
    public String toString(){
        return this.getIdPersona() + " "
             + this.getNombre() + " "
             + this.getApellido() + " " 
             + this.getEdad();
    }
}
