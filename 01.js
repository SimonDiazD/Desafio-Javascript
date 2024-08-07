/*Para este desafío, vas a crear un programa que simula el lanzamiento de un par de dados. Aquí están
los requerimientos:
Crear una variable para cada dado. Cada dado puede tener un valor entre 1 y 6, que puedes
generar utilizando una función para obtener números aleatorios.
Lanzar los dados. Para simular el lanzamiento de los dados, asigna a cada variable un
número aleatorio entre 1 y 6.
Calcula la suma de los valores de los dados.
Imprime los valores de los dados y su suma. Tu programa debería imprimir un mensaje que
muestre los valores de cada dado y la suma de ambos.*/

class dados{
    dado1 = 0
    dado2 = 0
    
    
    constructor(){
        this.dado1 = Math.floor(Math.random() * (6-1+1)+1);
        this.dado2 = Math.floor(Math.random() * (6-1+1)+1);
    }
    
    
    lanzamiento(){
        console.log("Lanzando");
        console.log(this.dado1, "+", this.dado2, "=", (this.dado1+this.dado2));
    }
}

const dados = new dados();
dados.lanzamiento();