//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

//typeof no dice solo que es un objeto
console.log(typeof autos);

//Array.isArray() no dice si es o no un arreglo
console.log( Array.isArray(autos) );

//isntanceof también nos sirve para saber si un objeto es un arreglo
console.log( autos instanceof Array);