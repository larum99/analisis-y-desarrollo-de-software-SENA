/*

Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las
posición donde se encuentra. Si hay más de uno, indicar igualmente la posición.

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

// Función que busca las posiciones de un elemento dentro del arreglo
function buscarElemento(arreglo, elemento) {
    const posiciones = [];

    arreglo.forEach((valor, index) => {
        if (valor === elemento) {
            posiciones.push(index);
        }
    });

    return posiciones;
}

async function main() {
    const tamano = parseInt(await preguntar("Ingrese el tamaño del arreglo: "));
    const arreglo = [];

    for (let i = 0; i < tamano; i++) {
        const valor = parseInt(await preguntar(`Ingrese el valor para la posición ${i}: `));
        arreglo.push(valor);
    }

    const elementoBuscado = parseInt(await preguntar("Ingrese el elemento que desea buscar: "));

    const posiciones = buscarElemento(arreglo, elementoBuscado);

    if (posiciones.length > 0) {
        console.log(`El elemento ${elementoBuscado} se encontró en las posiciones: ${posiciones.join(", ")}`);
    } else {
        console.log(`El elemento ${elementoBuscado} NO se encuentra en el arreglo.`);
    }

    rl.close();
}

main();
