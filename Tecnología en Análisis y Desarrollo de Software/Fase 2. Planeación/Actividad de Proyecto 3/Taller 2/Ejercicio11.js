/*
Un programa que me capture el salario de un empleado y me realice el
descuento de pensión y salud, pero si el salario es superior a 1200000 no le
debe descontar.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el salario del empleado: ", (salario) => {
    salario = parseFloat(salario);

    if (isNaN(salario) || salario <= 0) {
        console.log("Ingrese un salario válido.");
        rl.close();
        return;
    }

    let descuentoPension = 0;
    let descuentoSalud = 0;
    let salarioFinal = salario;

    if (salario <= 1200000) {
        descuentoPension = salario * 0.04;
        descuentoSalud = salario * 0.04;
        salarioFinal = salario - (descuentoPension + descuentoSalud);
    }

    console.log("\n--- RESULTADOS ---");
    console.log(`Salario bruto: $${salario}`);

    if (salario > 1200000) {
        console.log("No se aplican descuentos (salario mayor a 1'200.000).");
    } else {
        console.log(`Descuento pensión (4%): $${descuentoPension}`);
        console.log(`Descuento salud (4%): $${descuentoSalud}`);
    }

    console.log(`Salario neto: $${salarioFinal}`);

    rl.close();
});
