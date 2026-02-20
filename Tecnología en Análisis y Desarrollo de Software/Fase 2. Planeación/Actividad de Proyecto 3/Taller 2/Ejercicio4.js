/*
Calcular el número de pulsaciones que debe tener una persona por cada 10
segundos de ejercicio aeróbico; la fórmula que se aplica cuando el sexo es
femenino es:
num. pulsaciones ← (220 - edad)/10
y si el sexo es masculino:
num. pulsaciones ← (210 - edad)/10
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la edad: ", (edad) => {
    edad = parseInt(edad);

    if (isNaN(edad) || edad <= 0) {
        console.log("Edad inválida.");
        rl.close();
        return;
    }

    rl.question("Ingrese el sexo (M para masculino, F para femenino): ", (sexo) => {
        sexo = sexo.toUpperCase();
        let pulsaciones = 0;

        if (sexo === "F") {
            pulsaciones = (220 - edad) / 10;
        } else if (sexo === "M") {
            pulsaciones = (210 - edad) / 10;
        } else {
            console.log("Sexo inválido, use M o F.");
            rl.close();
            return;
        }

        console.log(`\nNúmero de pulsaciones cada 10 segundos: ${pulsaciones}`);

        rl.close();
    });
});
