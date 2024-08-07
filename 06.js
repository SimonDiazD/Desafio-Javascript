/*Decodificador de mensajes secretos
Tienes una cadena de texto que contiene un mensaje codificado. Cada palabra específica en la
cadena se reemplaza por una palabra codificada. Tu trabajo es escribir un programa que recupere el
mensaje original.
Por ejemplo, considera la cadena "El gato rojo tiene hambre". Cada palabra codificada tiene su
equivalente en una palabra descodificada de la siguiente manera: "gato" debe ser reemplazado por
"agente", "rojo" por "secreto", y "hambre" por "misión".
Debes crear una variable para el mensaje codificado y luego cambiar las palabras codificadas por sus
correspondientes palabras descodificadas para revelar el mensaje original.*/

const { type } = require("os");

let mensajeCodificado = "El gato rojo tiene hambre";
let gato= "agente";
let rojo = "secreto";
let hambre = "misión";

let arrMensaje = mensajeCod.split(" ");
arrMensaje.forEach((el, index) => {
    switch(el){
        case "gato":
        arrMensaje[index] = gato;
        break;

        case "rojo":
        arrMensaje[index] = rojo;
        break;

        case "hambre":
        arrMensaje[index] = hambre;
        break;
    }
});

console.log("Mensaje entrante: " + mensajeCod + "\n" + "Mensaje descodificado: " + arrMensaje);