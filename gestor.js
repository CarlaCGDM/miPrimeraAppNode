const USER = "Carla";
const PASS = "1234";

//imaginamos que estos datos vienen de la BBDD

function checkUser(user,pass) {
    if (user === USER && pass === PASS) {
        console.log("¡Acceso permitido :D!");
    } else {
        console.log("Acceso denegado... :(");
    }
    console.log(this.USER);
}

module.exports.checkUser = checkUser;
module.exports.USER = USER;
module.exports.PASS = PASS;

console.log(module); //nos muestra lo que ahora mismo estamos exportando etc. en formato JSON

checkUser("A","B");