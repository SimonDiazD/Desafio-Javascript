/*CUENTA ATRÁS
Crea una función que reciba dos parámetros para crear una cuenta atrás.
- El primero, representa el número en el que comienza la cuenta.
- El segundo, los segundos que tienen que transcurrir entre cada cuenta.
- Sólo se aceptan números enteros positivos.
- El programa finaliza al llegar a cero.
- Debes imprimir cada número de la cuenta atrás.*/

function cuentaAtras(inicio, intervalo) {
    if (!Number.isInteger(inicio) || !Number.isInteger(intervalo) || inicio < 0 || intervalo <= 0) {
        console.log("Introduzca un número");
        return;
    }

    let contador = inicio;

    function imprimirCuenta() {
        if (contador >= 0) {
            console.log(contador);
            contador--;
            setTimeout(imprimirCuenta, intervalo * 1000);
        }
    }

    imprimirCuenta();
}

cuentaAtras(23, 1);
