//Incremento: ++
//Decremento: --
let a = 3;
let b = 2;
let z;
console.log(z);

//Incremento
//Pre-incremento (el operador ++ por delante de la variable)
console.log(a);
z = ++a; 
//primero se incrementa 'a' (pasa de 'a' a 'a+1'), y luego se asigna a 'z' el valor incrementado de 'a'.
console.log(z,a);

//Post-incremento (el operador ++ después de la variable)
console.log(b);
z = b++; 
//primero se asigna a 'z' el valor actual de 'b', y luego se incrementa 'b' (pasa de 'b' a 'b+1').
console.log(z,b);

//Decremento
//Pre-decremento (el operador -- por delante de la variable)
console.log(a);
z = --a; 
//primero se decrementa 'a' (pasa de 'a' a 'a-1'), y luego se asigna a 'z' el valor decrementado de 'a'.
console.log(z,a);

//Post-decremento (el operador -- después de la variable)
console.log(b);
z = b--; 
//primero se asigna a 'z' el valor actual de 'b', y luego se decrementa 'b' (pasa de 'b' a 'b-1').
console.log(z,b);