/*
Si 15 cuadernos cuestan $75000, cuánto cuestan X cantidad de
cuadernos?. Elabore un algoritmo para hallar la respuesta correcta.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precioTotal = 75000;
const cantidadBase = 15;

rl.question("¿Cuántos cuadernos deseas comprar?: ", (cantidad) => {
    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Por favor ingresa una cantidad válida.");
        rl.close();
        return;
    }

    const precioPorCuaderno = precioTotal / cantidadBase;
    const total = precioPorCuaderno * cantidad;

    console.log("\n--- Cálculo de Compra ---");
    console.log(`Cantidad de cuadernos: ${cantidad}`);
    console.log(`Precio por cuaderno: $${precioPorCuaderno.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toLocaleString('es-CO')}`);

    rl.close();
});
