//miFuncion() es una función de primera clase, con lo cual acepta como parámetro la referencia a otra función fn 
function miFuncion(fn) {
    
    //dentro del cuerpo de miFuncion(), hacemos el callback a fn()
    //invocamos fn, por eso está con los paréntesis
    fn();
}

//Esta es la función a la que se le hara el callback desde el cuerpo de miFuncion()
function saludar() {
    console.log("Hola Mundo");
}
//idem con otra función
function decirAdios() {
    console.log("Te digo adiós");
}

//A la función miFuncion() le paso como referencia el parámetro 'saludar', pero es eso una referencia
miFuncion(saludar);
//otro ejemplo
miFuncion(decirAdios);
