/*
Diseñar un algoritmo que calcule los 5 primeros números impares que
preceden a un numero N
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número N: ', (nInput) => {

    let N = parseInt(nInput);
    let contador = 0;
    let numero = N - 1;

    console.log(`Los 5 números impares que preceden a ${N} son:`);

    while (contador < 5) {
        if (numero % 2 !== 0) {
            console.log(numero);
            contador++;
        }
        numero--;
    }

    rl.close();
});
