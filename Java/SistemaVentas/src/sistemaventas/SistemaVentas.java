package sistemaventas;

public class SistemaVentas {

    public static void main(String[] args) {
        
        Producto p1, p2, p3, p4, p5, p6;
        p1 = new Producto("Silla", 1500);
        p2 = new Producto("Mesa", 3400);
        p3 = new Producto("Ropero", 2800);
        p4 = new Producto("Canasto", 4400);
        p5 = new Producto("Sillón", 6100);
        p6 = new Producto("Ratonera", 3100);
         
        Orden o1;
        o1 = new Orden();
        
        o1.agregarProducto(p1);
        o1.agregarProducto(p2);
        o1.agregarProducto(p3);
        o1.agregarProducto(p4);
        o1.agregarProducto(p5);
        
        System.out.println(o1);
        
        o1.agregarProducto(p6);
    }
}
