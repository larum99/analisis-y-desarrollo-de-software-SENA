/*
Haga el algoritmo que, dada una variable cuyo valor es leído desde el
teclado, imprima por pantalla si el número es o no mayor que 0 (cero).
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor ingrese el número: ', (input) => {
    let NUMERO = parseFloat(input);

    if (isNaN(NUMERO)) {
        console.log("Debe ingresar un número válido.");
        rl.close();
        return;
    }

    let mensaje = "";
    if (NUMERO > 0) {
        mensaje = "Número mayor a 0";
    } else {
        mensaje = "Número menor a 0";
    }
    console.log(mensaje);
    rl.close();
});