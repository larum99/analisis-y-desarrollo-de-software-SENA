/*
Un paquete de galletas cuesta $3.500 y contiene 15 galletas, cuánto
cuestan X cantidad de galletas de ellas? Elabore un algoritmo para obtener
la respuesta.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precioPaquete = 3500;
const galletasPorPaquete = 15;

rl.question("¿Cuántas galletas desea comprar?: ", (cantidad) => {
    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Ingrese una cantidad válida.");
        rl.close();
        return;
    }

    const precioPorGalleta = precioPaquete / galletasPorPaquete;

    const total = precioPorGalleta * cantidad;

    console.log(`\n--- Cálculo de Compra ---`);
    console.log(`Cantidad de galletas: ${cantidad}`);
    console.log(`Precio por galleta: $${precioPorGalleta.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    rl.close();
});
