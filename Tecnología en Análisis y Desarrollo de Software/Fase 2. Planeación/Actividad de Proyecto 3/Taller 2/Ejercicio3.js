/*
En un supermercado se hace una promoción, mediante la cual el cliente
obtiene un descuento dependiendo de un número que se escoge al azar los
numeros deben de estar entre 1 y 10. Si el número escogido es menor que
10 el descuento es del 15% sobre el total de la compra, si es menor o igual
a 5 el descuento es del 20%. Obtener cuánto dinero se le descuenta.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el total de la compra: ", (total) => {
    total = parseFloat(total);

    if (isNaN(total) || total <= 0) {
        console.log("Monto inválido.");
        rl.close();
        return;
    }

    const numero = Math.floor(Math.random() * 10) + 1;

    let descuento = 0;

    if (numero <= 5) {
        descuento = total * 0.20;
    } else if (numero < 10) {
        descuento = total * 0.15;
    }

    console.log("\n--- Promoción Supermercado ---");
    console.log("Total compra: $" + total);
    console.log("Número obtenido:", numero);
    console.log("Descuento aplicado: $" + descuento);
    console.log("Total a pagar: $" + (total - descuento));

    rl.close();
});
