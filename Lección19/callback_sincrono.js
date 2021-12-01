// https://www.youtube.com/watch?v=oVeqw1bLOZE

//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos

//cb = callback

const getUser = (id, cb) => {

    const user = 
    {
        name: 'Dorian',
        id: id   //esto se puede dejar como id solamente (sin los :id)
    }
    
    //la función callback se ejecutará acá:
    //con cb(null, user), asumimos que no hay error (null)
    //con cb('El usuario no existe'), entraría en el error
    //cb('User does not exist');
    cb(null, user);    
}

/* 
esta función (err, user) => {} (que es el callback) se ejecutará dentro de la función de arriba,
y tiene dos argumentos: el error y el objeto user, que tiene dos propiedades: name e id.

(err, user) => {
    
    if(err) return console.log(err)
    console.log(`User name is: ${user.name}`)
}

*/

//la función: '(err, user) => {}' es el callback

getUser(1, (err, user) => {
    
    if(err) return console.log(err)
    console.log(`User name is: ${user.name}`)
});



//https://www.youtube.com/watch?v=gMqF-D3kuLE