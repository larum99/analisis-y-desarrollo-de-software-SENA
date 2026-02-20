/*
teclado, imprima por pantalla si el número es o no mayor que 0 (cero), y si
el número es par o impar.
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
    if (NUMERO > 0 && NUMERO % 2 === 0) {
        mensaje = "Número mayor a 0 y es par";
    } else if (NUMERO > 0 && NUMERO % 2 !== 0) {
        mensaje = "Número mayor a 0 y es impar";
    } else if (NUMERO < 0 && NUMERO % 2 === 0) {
        mensaje = "Número menor a 0 y es par";
    } else {
        mensaje = "Número menor a 0 y es impar";
    }
    console.log(mensaje);
    rl.close();
});