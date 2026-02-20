/*
Calcule e imprima el pago mensual para un vendedor de autos, basándose
en lo siguiente:
a. El pago base es de $350, más una comisión de $15 por cada auto
vendido y un bono de 40$ si vendió mas de 15 autos.
b. El impuesto a pagar es el 25% del pago total
c. Los datos de entrada son el nombre del vendedor y el número de
autos vendidos en el mes
d. Se desea imprimir el nombre del vendedor, el sueldo bruto, el
impuesto y el sueldo neto
 */

const readline = require('readline');

const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

async function main() {
    const nombre = await preguntar("Ingrese el nombre del vendedor: ");
    const autosVendidos = parseInt(await preguntar("Ingrese el número de autos vendidos este mes: "));

    const PAGO_BASE = 350;
    const COMISION = 15;
    const BONO = 40;

    let sueldoBruto = PAGO_BASE + (COMISION * autosVendidos);

    if (autosVendidos > 15) {
        sueldoBruto += BONO;
    }

    const impuesto = sueldoBruto * 0.25;

    const sueldoNeto = sueldoBruto - impuesto;

    console.log("\n Resultado");
    console.log(`Vendedor: ${nombre}`);
    console.log(`Sueldo bruto: $${sueldoBruto}`);
    console.log(`Impuesto 25%: $${impuesto}`);
    console.log(`Sueldo neto: $${sueldoNeto}`);

    rl.close();
}

main();