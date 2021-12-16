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

//Agrega un nuevo elemento en la posición de último valor del índice
console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

//Agrega 'Porsche' en la posición 7
autos[6] = 'Porshe';
console.log(autos);