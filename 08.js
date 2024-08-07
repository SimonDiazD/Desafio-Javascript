/*PRIMO, FIBONACCI Y PAR
Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
Ejemplos:
- Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
- Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"*/

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


function esFibonacci(num) {
    if (num < 0) return false;

    function esCuadradoPerfecto(x) {
        let s = Math.sqrt(x);
        return s === Math.floor(s);
    }
    return esCuadradoPerfecto(5 * num * num + 4) || esCuadradoPerfecto(5 * num * num - 4);
}


function comprobarNumero(num) {
    let resultado = `${num} es `;

    if (esPrimo(num)) {
        resultado += 'primo, ';
    } else {
        resultado += 'no es primo, ';
    }

    if (esFibonacci(num)) {
        resultado += 'fibonacci y ';
    } else {
        resultado += 'no es fibonacci y ';
    }


    if (num % 2 === 0) {
        resultado += 'es par';
    } else {
        resultado += 'es impar';
    }

    console.log(resultado)}