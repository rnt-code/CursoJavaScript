function miFuncion(fn) {
    fn();
}

//funcion nombrada
saludar2 = function() {
    console.log("Hola Mundo2");
}

miFuncion(saludar2);

//Funciones anónimas:
//-------------------
//Usando solo function(), anónima
miFuncion(function() {console.log("Hola mundo con función anónima")});
//Usando función flecha anónima
miFuncion(() => console.log("Hola mundo con función flecha"));


