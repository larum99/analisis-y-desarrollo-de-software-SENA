/*
Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N
debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

async function main() {
    let N = parseInt(await preguntar("Ingrese un número impar para el tamaño del arreglo: "));

    // Validar que N sea impar
    if (N % 2 === 0) {
        console.log("¡Error! El número debe ser impar.");
        rl.close();
        return;
    }

    // Generar arreglo con números aleatorios entre 1 y 100
    const arreglo = [];
    for (let i = 0; i < N; i++) {
        arreglo.push(Math.floor(Math.random() * 100) + 1);
    }

    console.log("Arreglo generado:");
    console.log(arreglo);

    // Calcular el índice central
    const centro = Math.floor(N / 2);
    console.log(`El valor que ocupa el centro es: ${arreglo[centro]}`);

    rl.close();
}

main();
