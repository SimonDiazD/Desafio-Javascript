/*Análisis de mensajes de texto
Tu tarea es escribir un programa que solicite al usuario introducir un mensaje de texto y, a
continuación, genere un análisis de dicho mensaje. El análisis debe incluir:
- La cantidad de caracteres en el mensaje, incluyendo espacios y signos de puntuación.
- La cantidad de palabras en el mensaje. Puedes asumir que las palabras están separadas por
espacios.
- La cantidad de oraciones en el mensaje. Puedes asumir que las oraciones terminan con un
punto, un signo de interrogación o un signo de exclamación.
Por ejemplo, si el usuario introduce "¡Hola, mundo! ¿Cómo estás?", el programa debería informar
que el mensaje tiene 29 caracteres, 5 palabras y 2 oraciones.*/

const readline = require('readline');
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question("Ingrese un mensaje de texto: ", function(mensaje) {

    let cantidadCaracteres = mensaje.length;
    
    
    let cantidadPalabras = mensaje.trim().split(/\s+/).length;
    
    
    let cantidadOraciones = (mensaje.match(/[.!?]/g) || []).length;
    
   
    console.log(`Cantidad de caracteres: ${cantidadCaracteres}`);
    console.log(`Cantidad de palabras: ${cantidadPalabras}`);
    console.log(`Cantidad de oraciones: ${cantidadOraciones}`);
    
    
    interfazCaptura.close();
});