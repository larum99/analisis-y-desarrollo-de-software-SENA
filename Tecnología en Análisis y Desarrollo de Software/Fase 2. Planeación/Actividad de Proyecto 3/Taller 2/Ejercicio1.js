/*Hacer un algoritmo que imprima el nombre de un producto, clave, precio
original y su total con descuento. El descuento lo hace en base a la clave,
Si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento
en del 20% (sólo existen dos claves). */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el nombre del producto: ', (nombre) => {
    rl.question('Ingresa la clave (01 o 02): ', (clave) => {
        rl.question('Ingresa el precio original: ', (precio) => {
            precio = parseFloat(precio);
            let descuento = 0;

            if (clave === '01') {
                descuento = precio * 0.10;
            } else if (clave === "02") {
                descuento = precio * 0.20;
            } else {
                console.log('Clave inválida.');
                rl.close();
                return;
            }

            let total =  precio - descuento;

            console.log('\n--- Resultados ---');
            console.log('Producto: ', nombre);
            console.log('Clave: ', clave);
            console.log('Precio Original: ', precio);
            console.log('Descuento: ', descuento);
            console.log('Total: ', total);

            rl.close();
        });
    });
});