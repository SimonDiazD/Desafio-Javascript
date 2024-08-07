/*La idea detrás de este reto es encontrar todas las secuencias en una lista de números que sumen un
valor objetivo. Una secuencia es una serie de números consecutivos en la lista.
Ejemplo:
Dada la lista [1, 2, 3, 4, 5] y un valor objetivo de 9, las secuencias posibles son [2, 3, 4] y [4, 5].
Requisitos:
La función debe llamarse buscarSecuencias y tomar una lista de números y un valor objetivo como
argumentos.
La función debe devolver una lista de todas las secuencias posibles que sumen el valor objetivo.
Cada secuencia en la lista resultante debe ser una lista de números.
Si no hay secuencias posibles, devuelve una lista vacía.*/

function buscarSecuencias(lista, objetivo) {
    const secuencias = [];
    const n = lista.length;

    for (let i = 0; i < n; i++) {
        let sumaActual = 0;
        const secuenciaActual = [];

        for (let j = i; j < n; j++) {
            sumaActual += lista[j];
            secuenciaActual.push(lista[j]);

            if (sumaActual === objetivo) {
                secuencias.push([...secuenciaActual]);
            } else if (sumaActual > objetivo) {
                break;
            }
        }
    }

    return secuencias;
}


const lista = [1, 2, 3, 4, 5];
const objetivo = 7;
console.log(buscarSecuencias(lista, objetivo)); 
