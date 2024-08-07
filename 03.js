/*Validador de Dirección de Correo Electrónico
En este desafío, crearás un programa que valide una dirección de correo electrónico. Aquí están los
requerimientos:
Crear una variable para almacenar la dirección de correo electrónico. Esta será la dirección
de correo electrónico que tu programa comprobará.
Comprobar si la dirección de correo electrónico es válida. Para ser válida, una dirección de
correo electrónico debe tener exactamente un símbolo de arroba (@), al menos un punto
después del símbolo de arroba, y al menos un carácter antes del símbolo de arroba y
después del punto. Este es un chequeo básico y no cubre todas las posibilidades de formatos
de correo electrónico válidos, pero servirá para este desafío.
Imprime un mensaje indicando si la dirección de correo electrónico es válida o no.*/

let correo = "juan@";
let contadorArroba = 0;
let contadorPunto = 0;
let caracteresAntesArroba = 0;
let caracteresDespuesPunto = 0;
let arrayCorreo = correo.split("");
let indiceArroba = 0;
let indicePunto = 0;

arrayCorreo.forEach((caracter, indice) => {
    if (caracter == "@") {
        indiceArroba = indice;
    }
    if (caracter == ".") {
        indicePunto = indice;
    }
});

arrayCorreo.forEach((caracter, indice) => {
    if (caracter == "@") {
        indiceArroba = indice;
        contadorArroba += 1;
    }
    if ((typeof(caracter) == "string" || typeof(caracter) == "number") && indice < indiceArroba) {
        caracteresAntesArroba += 1;
    }
    if (typeof(caracter) == "string" && indice > indicePunto) {
        caracteresDespuesPunto += 1;
    }
    if (caracter == "." && indice > indiceArroba) {
        indicePunto = indice;
        contadorPunto += 1;
    }
});

if (contadorArroba != 0 && caracteresAntesArroba != 0 && caracteresDespuesPunto != 0 && contadorPunto != 0) {
    console.log("El correo cumple con las condiciones");
} else {
    console.log("El correo no cumple con las condiciones");
}