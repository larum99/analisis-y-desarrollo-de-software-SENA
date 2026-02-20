/*
Hacer un algoritmo que calcule el total a pagar por la compra de camisas,
precio de las camisas 25000. Si se compran tres camisas o más se aplica
un descuento del 20% sobre el total de la compra y si son menos de tres
camisas un descuento del 10%
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precioCamisa = 25000;

rl.question('¿Cuántas camisas desea comprar? ', (cantidad) => {
    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log('Cantidad inválida.');
        rl.close();
        return;
    }

    let totalSinDescuento =  cantidad * precioCamisa;
    let descuento = 0;

    if (cantidad >= 3) {
        descuento = totalSinDescuento * 0.20;
    } else {
        descuento = totalSinDescuento * 0.10
    }

    let totalConDescuento = totalSinDescuento - descuento;

    console.log("\n--- Factura ---");
    console.log("Cantidad de camisas:", cantidad);
    console.log("Precio por camisa: $" + precioCamisa);
    console.log("Total sin descuento: $" + totalSinDescuento);
    console.log("Descuento aplicado: $" + descuento);
    console.log("Total a pagar: $" + totalConDescuento);

    rl.close();
})
