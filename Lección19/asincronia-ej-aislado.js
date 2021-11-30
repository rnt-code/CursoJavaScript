const doTask = (iterations, callback) => {
    
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
        
        const number = 1 + Math.floor(Math.random() * 6); //se genera el número
        numbers.push(number); //y se lo introduce en el array
        
        /* Error, se ha sacado un 6 */
        if (number === 6) {callback({error: true, message: "error"}); return;}
    }
    /* Si llegamos acá es porque terminó bucle y no ha salido 6 */
    return callback(null, {error: false, value: numbers});
}


doTask(10, function(err, result) {
    if (err) {
        console.error("Ha salido un 6,", err.message);
        return;
    }
    console.log("Tiradas correctas: ", result.value);
});
  