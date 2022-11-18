const gestor = require("./gestor");

function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("Carla");

console.log(module); //info del objeto modulo en formato JSON

gestor.checkUser("Carla","1234");

//investigar:
//OS, FS, Path
//¿Qué hacen?
//¿Qué funciones tienen?
//Cuando tengamos una idea nos inventamos un pequeño ejemplo de utilizacion de cada uno

