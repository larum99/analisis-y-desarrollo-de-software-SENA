/*
Un programa que, capture el salario de un empleado, y lo divida por 30
meses del mes, también debe capturar los días trabajados y me debe
mostrar el total ganado.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el salario mensual del empleado: ", (salario) => {
    salario = parseFloat(salario);

    if (isNaN(salario) || salario <= 0) {
        console.log("Salario inválido.");
        rl.close();
        return;
    }

    rl.question("Ingrese los días trabajados: ", (dias) => {
        dias = parseInt(dias);

        if (isNaN(dias) || dias < 0 || dias > 30) {
            console.log("Días inválidos (debe ser entre 0 y 30).");
            rl.close();
            return;
        }

        const valorDia = salario / 30;
        const totalGanado = valorDia * dias;

        console.log("\n--- RESULTADOS ---");
        console.log(`Salario mensual: $${salario}`);
        console.log(`Valor por día: $${valorDia.toFixed(2)}`);
        console.log(`Días trabajados: ${dias}`);
        console.log(`Total ganado: $${totalGanado.toFixed(2)}`);

        rl.close();
    });
});
