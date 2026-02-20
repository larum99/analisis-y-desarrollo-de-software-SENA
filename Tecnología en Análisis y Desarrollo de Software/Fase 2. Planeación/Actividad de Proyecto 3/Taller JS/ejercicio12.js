/*
Solicitar tres números al usuario e intercambiarlos entre si, solo si el
segundo es mayor que el primero y el tercero.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}

async function main() {
    let a = parseFloat(await preguntar("Ingrese número 1: "));
    let b = parseFloat(await preguntar("Ingrese número 2: "));
    let c = parseFloat(await preguntar("Ingrese número 3: "));

    console.log(`Valores originales: a=${a}, b=${b}, c=${c}`);

    if (b > a && b > c) {

        //destrcuturing
        [a, b, c] = [b, c, a]

        console.log("Se intercambiaron los valores porque b es mayor");
    } else {
        console.log("No se intercambia porque b no es mayor que a y c");
    }

    console.log(`Nuevos valores: a = ${a}, b = ${b}, c = ${c}`);

    rl.close();

}

main();