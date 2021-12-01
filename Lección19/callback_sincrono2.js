//Base de datos:
//array de users:
const users = [
    {
        id: 1,
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }

]

//array de emails
const emails = [
    {
        id: 1,
        name: 'dorian@gmail.com'
    },
    {
        id: 2,
        name: 'laura@gamil.com'
    }
]

//función getUser(id,cb) de búsqueda en la base de datos.
//Tiene dos parámetros de búsqueda: el id de usuario y la función callback (cb) que viene desde la consulta.

//En caso que encuentra el id llama a cb (call) hacia atrás (back), con los parámetros null y el user encontrado. Y ese caso la función hace un console.log(user).
//En caso que no encuentra el id llama a cb (call) hacia atrás (back) con el parámetro err=`Not exist user whit id=${id}`. Y en se caso la función devuelve (return) un console.log(err).

const getUser = (id,cb) => {

    const user = users.find(user => user.id == id);
    if(!user) cb(`Not exist user whit id=${id}`)
    else cb(null, user);
}

const getEmail = (id,cb) => {
    
    const user = users.find(user => user.id == id);
    const email = emails.find(email => email.id == user.id);
    if(!email) cb(`${user.name} has not an email`)
    else cb(null, user {
        id: user.id,
        name: user.name,
        email: email.email    
    })
}


//consulta a la base de datos por id y la función cb (callback)
//La función callback es: 
/*
(err,user) => {
    if(err) return console.log(err)
    console.log(user);
}
*/
getUser(4, (err,user) => {
    if(err) return console.log(err)
    console.log(user);
});

