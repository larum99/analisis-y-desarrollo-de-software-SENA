/*
Se desea calcular independientemente la suma de los números pares e
impares comprendidos entre 1 y 50.
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
