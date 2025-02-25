let users = ["Juan Pérez", "Lucía Gómez", "Carlos López", "Elí Castillo"];

const getUser = (position, seconds) => {
    return new Promise((resolve, reject) => {
        if(position < 0 || position >= users.length) {
            reject({mensaje: "Posición no valida"})
        }
        setTimeout(() => {
           resolve({user: users[position]}) 
        }, seconds * 1000);
    })
}

getUser(2, 3)
    .then(data => {
        console.log(data);
        return data.user;
    })
    .then(data => {
        console.log("Hola " + data);
    })
    .catch(error => console.error(error));