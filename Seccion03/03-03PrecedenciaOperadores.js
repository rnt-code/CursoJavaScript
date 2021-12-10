let a = 3, b = 2, c = 1, d = 4;

//Las expresiones en JS se evaluan de izq a der, el producto/cociente tiene mayor prioridad que la suma.
//La multiplización y el cociente tienen igual prioridad, se evalua primero la que está a la izquierda.

let z = a * b + c/d;
console.log(z);

z = a + b * c/d;
console.log(z);

//La priorida la tienen los paréntesis
z = (c + a) * b/c;
console.log(z);
