/*En este desafío, crearás un programa que pueda convertir grados Celsius a Fahrenheit y viceversa.
Aquí están los requerimientos:
- Crea dos variables para almacenar la temperatura en grados Celsius y Fahrenheit:
- Una variable (por ejemplo, temperaturaCelsius) representará la temperatura en grados
Celsius.
- Otra variable (por ejemplo, temperaturaFahrenheit) representará la temperatura en
grados Fahrenheit.
- Calcula y almacena la conversión de la temperatura:
- Para convertir de Celsius a Fahrenheit, usa la fórmula F = C * 9/5 + 32 y almacena el
resultado en temperaturaFahrenheit.
- Para convertir de Fahrenheit a Celsius, usa la fórmula C = (F - 32) * 5/9 y almacena el
resultado en temperaturaCelsius.
- Imprime las temperaturas convertidas:
- Imprime la temperatura en grados Fahrenheit.
- Imprime la temperatura en grados Celsius.*/

const readline = require('readline');
let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question("Ingrese la temperatura en grados Celsius: ", function(temperaturaCelsius){
    let temperaturaFahrenheit = temperaturaCelsius * 9/5 + 32;
    console.log(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit}°F`);

    interfazCaptura.question("Ingrese la temperatura en grados Fahrenheit: ", function(temperaturaFahrenheit){
        let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
        console.log(`La temperatura en Celsius es: ${temperaturaCelsius}°C`);

        interfazCaptura.close();
    });
});