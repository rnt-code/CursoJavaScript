package ejercicioherencia;

class Empleado extends Persona {
    
    //atributo de clase
    static private int contadorEmpleados;
    
    //atributo de instancia
    private int idEmpleado;
    private float sueldo;
    
    //constructor
    public Empleado(String nombre, String apellido, int edad, float sueldo) {
        super(nombre, apellido, edad);
        this.idEmpleado = ++Empleado.contadorEmpleados;
        this.sueldo = sueldo;
    }
    
    //getters & setters
    public int getIdEmpleado() {
        return this.idEmpleado;
    }

    public float getSueldo() {
        return this.sueldo;
    }

    public void setSueldo(float sueldo) {
        this.sueldo = sueldo;
    }
    
    //métodos
    @Override
    public String toString() {  
        return super.toString() + " " 
              + this.getIdEmpleado() + " " 
              + this.getSueldo();
    }
}
