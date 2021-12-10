//Base de datos:
//array de users
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

//En caso que encuentra el id llama a cb (call) hacia atrás (back), con los parámetros null y el user encontrado. Y ese caso la función hace un console.log(user).
//En caso que no encuentra el id llama a cb (call) hacia atrás (back) con el parámetro err=`Not exist user whit id=${id}`. Y en se caso la función devuelve (return) un console.log(err).

const getUser = (id,cb) => {

    const user = users.find(user => user.id == id); 
    //esto busca con el parámetro id proporcionado
    if(user==undefined) {
        /*!user = true es lo mismo que undefined*/
        //en ese caso le paso un texto a la función callback
        cb(`User whit id=${id} not exist`);
    }
    else {
        cb(null, user);
    }
    
}


const getEmail = (id,cb) => {
    
    const email = emails.find(email => email.id == user.id);
    if(!email) cb(`${users.name} has not an email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email    
    })
}



//La función callback es: 
const cb = (err,user) => {
    if(err) {
        console.error(err);
    }
    else {
        console.log(user);
    }
}

//consulta a la base de datos por id y la función cb (callback)
getUser(1,cb);
getUser(2,cb);
getUser(3,cb);
getUser(4,cb);
