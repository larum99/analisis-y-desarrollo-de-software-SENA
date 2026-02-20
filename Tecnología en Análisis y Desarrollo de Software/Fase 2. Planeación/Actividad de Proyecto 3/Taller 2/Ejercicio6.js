/*
Hacer un algoritmo que permita pasa de kilogramos a gramos y toneladas.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad en kilogramos: ", (kg) => {
    kg = parseFloat(kg);

    if (isNaN(kg) || kg < 0) {
        console.log("Por favor ingrese un valor numérico válido.");
        rl.close();
        return;
    }

    const gramos = kg * 1000;
    const toneladas = kg / 1000;

    console.log("\n--- Conversiones ---");
    console.log(`Kilogramos: ${kg} kg`);
    console.log(`Gramos: ${gramos} g`);
    console.log(`Toneladas: ${toneladas} t`);

    rl.close();
});
