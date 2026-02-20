/*
Diseñar un algoritmo que me permita ingresar un valor inicial y luego un
valor final, para luego calcular el valor central de los números.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el valor inicial: ', (inicioInput) => {
    rl.question('Ingrese el valor final: ', (finInput) => {

        let inicio = parseFloat(inicioInput);
        let fin = parseFloat(finInput);

        let central = (inicio + fin) / 2;

        console.log(`El valor central entre ${inicio} y ${fin} es: ${central}`);

        rl.close();
    });
});
