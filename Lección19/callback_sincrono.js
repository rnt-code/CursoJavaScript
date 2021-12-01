// https://www.youtube.com/watch?v=oVeqw1bLOZE

//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos

  //cd = callback

const getUser = (id, cb) => {

    const user = 
    {
        name: 'Dorian',
        id:id
    }
  
    cb(null,user);    
}

getUser(1, (err, user) => {
    
    if(err) return console.log(err)
    console.log(`User name is ${user.name}`)
});



//https://www.youtube.com/watch?v=gMqF-D3kuLE