package mundopc;

public class MundoPC {

    public static void main(String[] args) {
        
        Monitor m1, m2;
        Teclado t1, t2;
        Raton r1, r2;
        
        m1 = new Monitor("Samsung", "21 pulg");
        m2 = new Monitor("AOC", "21 pulg");
        
        t1 = new Teclado("teclado", "Logitech");
        t2 = new Teclado("teclado", "Microsoft");
        
        r1 = new Raton("ratón", "HP");
        r2 = new Raton("ratón", "DP");
        
        Computadora c1, c2;
        c1 = new Computadora("PC mac", m2, t1, r2);
        c2 = new Computadora("PC clon", m1, t2, r1);
        
        /*
        System.out.println(c1.toString()+ "\n");
        System.out.println(c2.toString());
        System.out.println(r1.toString());
        System.out.println(r2.toString());
        */
        
        Orden o1, o2;
        o1 = new Orden();
        o2 = new Orden();

        o1.agregarComputadora(c1);
        o1.agregarComputadora(c2);
        
        o2.agregarComputadora(c2);
        o2.agregarComputadora(c2);
        
        System.out.println(o1.mostrarOrden()+ "\n");
        System.out.println(o2.mostrarOrden());
    }
}