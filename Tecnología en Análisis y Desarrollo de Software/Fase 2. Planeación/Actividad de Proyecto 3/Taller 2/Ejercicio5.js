/*
Elabore un algoritmo que lea un número negativo e imprima el número y el
positivo del mismo.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número negativo: ", (num) => {
    num = parseFloat(num);

    if (isNaN(num)) {
        console.log("Eso no es un número.");
    } else if (num >= 0) {
        console.log("Debe ingresar un número NEGATIVO.");
    } else {
        console.log("Número ingresado:", num);
        console.log("Número positivo:", Math.abs(num));
    }

    rl.close();
});
