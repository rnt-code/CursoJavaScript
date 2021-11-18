let miNumero = "18";
 //console.log(typeof miNumero);
 
 let edad = Number(miNumero); //conviertiendo miNumero a número con la función Number()
 //console.log(typeof edad);
 if(edad >= 18){
	 console.log("Puede votar");
 }
 else{
	 console.log("Muy joven para votar");
 }
 

 //operador ternario
 let resultado = (edad >= 18)? "Puede votar" : "Muy joven para votar";
 console.log( resultado );
 
 