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
        return idPersona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }
    
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getEdad() {
        return edad;
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
