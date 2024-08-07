/*En este desafío, crearás un programa que calcula el Índice de Masa Corporal (BMI, por sus siglas en
inglés) a partir del peso y la altura de una persona. Aquí están los requerimientos:
Crear dos variables para almacenar el peso (en kilogramos) y la altura (en metros). Estos
serán los datos de entrada para tu programa.
Calcula el BMI. El BMI se calcula con la fórmula peso / altura^2.
Imprime el BMI. Finalmente, imprime el BMI calculado.
Interpreta el BMI. Según los estándares de la Organización Mundial de la Salud, un BMI
menor a 18.5 se considera bajo peso, entre 18.5 y 24.9 se considera normal, entre 25 y 29.9
se considera sobrepeso, y 30 o más se considera obesidad. Imprime un mensaje
correspondiente al rango en el que se encuentra el BMI calculado.*/



const readline = require('readline');
let interfazCaptura = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

interfazCaptura.question("¿Cuál es su peso actual (en kilogramos)?: ", function(peso){
    interfazCaptura.question("¿Cuál es su altura (en metros)?: ", function(altura){
    let imc = Math.round(peso / Math.pow(altura, 2));
    console.log("Su peso es: " + peso + " kg y su altura es: " + altura + " m");
    console.log("Su IMC es de: " + imc);
    if (imc < 18.5) {
        console.log("Su IMC se considera bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Su IMC se considera normal");
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Su IMC se considera con sobrepeso");
    } else if (imc >= 30) {
        console.log("Su IMC se considera con obesidad");
    }

    interfazCaptura.close();

   });
});