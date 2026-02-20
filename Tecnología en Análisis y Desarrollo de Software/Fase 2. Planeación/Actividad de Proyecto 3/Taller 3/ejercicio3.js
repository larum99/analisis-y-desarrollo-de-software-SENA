/*
Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear una
función que rellene el array o arreglo con los múltiplos de un numero pedido por teclado. Por
ejemplo, si defino un array de tamaño 5 y eligo un 3 en la función, el array contendrá 3, 6, 9,
12, 15. Muestralos por pantalla usando otra función distinta.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para pedir datos por teclado
function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

// Función que genera el arreglo con múltiplos
function generarMultiplos(tamano, numero) {
    const arreglo = [];
    for (let i = 1; i <= tamano; i++) {
        arreglo.push(numero * i);
    }
    return arreglo;
}

// Función que muestra el arreglo
function mostrarArreglo(arreglo) {
    console.log("El arreglo con múltiplos es:");
    arreglo.forEach((valor, index) => {
        console.log(`Posición ${index}: ${valor}`);
    });
}

async function main() {
    const tamano = parseInt(await preguntar("Ingrese el tamaño del arreglo: "));
    const numero = parseInt(await preguntar("Ingrese el número para generar múltiplos: "));

    const arreglo = generarMultiplos(tamano, numero);

    mostrarArreglo(arreglo);

    rl.close();
}

main();
