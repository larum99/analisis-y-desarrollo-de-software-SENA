/*
Diseñar un algoritmo que intercambie los valores de dos variables
numéricas.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el valor de A: ', (aInput) => {
    rl.question('Ingrese el valor de B: ', (bInput) => {

        let A = parseFloat(aInput);
        let B = parseFloat(bInput);

        console.log(`Antes del intercambio: A = ${A}, B = ${B}`);

        // Intercambio usando variable temporal
        let Temp = A;
        A = B;
        B = Temp;

        // Si variable temporal
        //[A, B] = [B, A];

        console.log(`Después del intercambio: A = ${A}, B = ${B}`);

        rl.close();
    });
});
