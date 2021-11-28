'use strict'
try{
    let x = 10;
    //miFuncion();
}
catch(error){
    console.log(error);
    console.log("Se produjo un error");
}
finally{
    console.log('Bloque finally: fin revisión de errores');
}

console.log('continuamos...');