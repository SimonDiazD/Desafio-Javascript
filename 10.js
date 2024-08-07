/*CONVERTIDOR DE FECHAS ROMANAS
El calendario romano original era muy diferente al calendario gregoriano que usamos hoy en día. Sin
embargo, para este desafío, nos centraremos solo en representar fechas en formato romano, y no
en el funcionamiento real del calendario romano.
Tu tarea es escribir una función que convierta una fecha en formato "DD-MM-YYYY" a su
representación romana.
Ejemplo:
01-01-2021 se convertiría en I-I-MMXXI.
Requisitos:
La función debe llamarse fechaRomana y tomar una cadena (la fecha en formato "DD-MM-YYYY")
como argumento.
La función debe devolver la fecha en formato romano.
Debes usar los números romanos básicos (I, V, X, L, C, D, M) y considerar que el año nunca excederá
3999 (MMMCMXCIX en romano).
Asume que la entrada siempre es una fecha válida.
Ejemplo de uso:
fechaRomana("01-01-2021"); // devuelve "I-I-MMXXI"
fechaRomana("15-05-1998"); // devuelve "XV-V-MCMXCVIII"*/

function Romano(num) {
    const numerosRomanos = [
        { valor: 1000, simbolo: 'M' },
        { valor: 900, simbolo: 'CM' },
        { valor: 500, simbolo: 'D' },
        { valor: 400, simbolo: 'CD' },
        { valor: 100, simbolo: 'C' },
        { valor: 90, simbolo: 'XC' },
        { valor: 50, simbolo: 'L' },
        { valor: 40, simbolo: 'XL' },
        { valor: 10, simbolo: 'X' },
        { valor: 9, simbolo: 'IX' },
        { valor: 5, simbolo: 'V' },
        { valor: 4, simbolo: 'IV' },
        { valor: 1, simbolo: 'I' }
    ];

    let resultado = '';
    for (const { valor, simbolo } of numerosRomanos) {
        while (num >= valor) {
            resultado += simbolo;
            num -= valor;
        }
    }
    return resultado;
}

function fechaRomana(fecha) {
    const [dia, mes, anio] = fecha.split('-').map(Number);
    const diaRomano = Romano(dia);
    const mesRomano = Romano(mes);
    const anioRomano = Romano(anio);

    return `${diaRomano}-${mesRomano}-${anioRomano}`;
}


console.log(fechaRomana("29-06-2006")); 
console.log(fechaRomana("11-01-2007")); 
console.log(fechaRomana("30-01-2012")); 
console.log(fechaRomana("20-01-1987"));
console.log(fechaRomana("12-05-1970")); 
