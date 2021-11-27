package ejercicioherencia;
import java.time.LocalDate;

public class EjercicioHerencia {

    public static void main(String[] args) {
        
        Persona p1, p2;
        p1 = new Persona("Ramon", "Taboada", 53);
        p2 = new Persona("Juan", "Perez", 45);
        System.out.println(p1.toString());
        System.out.println(p2.toString());
        
        Empleado e1,e2;
        Cliente c1, c2;
        e1 = new Empleado("Jose", "Toloza", 45, 125000);
        e2 = new Empleado("Jonathan", "Culum", 26, 120000);
        c1 = new Cliente("Maria", "Suárez", 56, LocalDate.of(2018,04,12));
        c2 = new Cliente("Mario", "Sandez", 56, LocalDate.of(2016,03,06));
        System.out.println(e1.toString());
        System.out.println(e2.toString());
        System.out.println(c1.toString());
        System.out.println(c2.toString()); 
    }
}
