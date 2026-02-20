/*
Diseñar un algoritmo, con el dividendo y el divisor y que luego me calcule el
residuo y el cociente de dicha división.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el dividendo: ', (dividendoInput) => {
    rl.question('Ingrese el divisor: ', (divisorInput) => {

        let dividendo = parseInt(dividendoInput);
        let divisor = parseInt(divisorInput);

        if (divisor === 0) {
            console.log("Error: no se puede dividir por cero.");
        } else {
            let cociente = Math.floor(dividendo / divisor);
            let residuo = dividendo % divisor;

            console.log(`Cociente: ${cociente}`);
            console.log(`Residuo: ${residuo}`);
        }

        rl.close();
    });
});
