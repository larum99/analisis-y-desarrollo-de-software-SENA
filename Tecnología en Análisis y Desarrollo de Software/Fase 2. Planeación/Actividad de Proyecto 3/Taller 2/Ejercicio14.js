/*
Elaborar un algoritmo, que tenga 10 números enteros. El programa de
sumar todos los números que sean múltiplos de 3.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let contador = 0;
let suma = 0;

function pedirNumero() {
    if (contador < 10) {
        rl.question(`Ingrese el número ${contador + 1}: `, (num) => {
            num = parseInt(num);

            if (isNaN(num)) {
                console.log("Debe ingresar un número entero.");
                pedirNumero();
            } else {
                numeros.push(num);

                if (num % 3 === 0) {
                    suma += num;
                }

                contador++;
                pedirNumero();
            }
        });
    } else {
        console.log("\n--- RESULTADOS ---");
        console.log("Números ingresados:", numeros);
        console.log("Suma de múltiplos de 3:", suma);
        rl.close();
    }
}

pedirNumero();
