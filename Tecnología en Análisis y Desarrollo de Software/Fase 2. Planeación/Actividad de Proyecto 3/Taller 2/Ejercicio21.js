/*
Determinar el promedio de una lista 20 de números positivos.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;
let contador = 0;

function pedirNumero() {
    if (contador < 20) {
        rl.question(`Ingrese el número ${contador + 1}: `, (input) => {
            let numero = parseFloat(input);

            if (numero <= 0 || isNaN(numero)) {
                console.log("Debe ingresar un número POSITIVO.");
                pedirNumero();
            } else {
                suma += numero;
                contador++;
                pedirNumero();
            }
        });
    } else {
        let promedio = suma / 20;
        console.log(`\nLa suma total es: ${suma}`);
        console.log(`El promedio es: ${promedio}`);
        rl.close();
    }
}

pedirNumero();
