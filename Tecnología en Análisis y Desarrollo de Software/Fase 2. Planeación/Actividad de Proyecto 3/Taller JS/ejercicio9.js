/*
Diseñe un algoritmo que dada una nota (numérica) determine el estado de
un estudiante según la siguiente tabla: EXCELENTE: 5.0, BUENO: entre 4.0 y
4.9, REGULAR: entre 3.0 y 3.9 y DEFICIENTE: entre 0 y 2.9.
 */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su nota: ', (input) => {
    let nota = parseFloat(input);

    switch (true) {
        case (nota === 5):
            console.log('Excelente');
            break;
        case (nota >= 4 && nota < 5):
            console.log('Bueno');
            break;
        case (nota >= 3 && nota < 4):
            console.log('Regular');
            break;
        case (nota >= 0 && nota < 3):
            console.log('Deficiente');
            break;
    }
    rl.close();
})