/*
Escribir algoritmos que calculen y saquen por pantalla:
a. El máximo de tres números introducidos por teclado;
b. El mínimo de tres números dados por el usuarios
c. El promedio de tres números dados por el usuario
Diseñe algoritmos
que permitan
d. Determinar si una letra pulsada por el usuario es mayúscula o
minúscula.
e. Indique si un carácter es un digito numérico.
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

    console.log("Máximo de 3 números");
    const n1 = parseFloat(await preguntar("Ingrese el primer número: "));
    const n2 = parseFloat(await preguntar("Ingrese el segundo número: "));
    const n3 = parseFloat(await preguntar("Ingrese el tercer número: "));

    const maximo = Math.max(n1, n2, n3);
    console.log(`El máximo es: ${maximo}`);

    console.log("Mínimo de 3 números");
    const minimo = Math.min(n1, n2, n3);
    console.log(`El mínimo es: ${minimo}`);

    console.log("Promedio d 3 números");
    const promedio = (n1 + n2 + n3) / 3;
    console.log(`El promedio de los 3 números es: ${promedio}`);

    console.log("Verificar si una letra es mayúscula o minúscula");
    const letra = await preguntar("Ingrese una letra: ");

    if (!letra || letra.length !== 1 || !isNaN(letra)) {
        console.log("Debe ingresar una sola letra")
    } else {
        if (letra === letra.toUpperCase()) {
            console.log("La letra es mayúscula");
        } else {
            console.log("La letra es minúscula")
        }
    }

    console.log("Verificar si un carácter es digito numerico");
    const caracter = await preguntar("Ingrese un carácter: ");

    if (caracter.length === 1 && !isNaN(caracter)) {
        console.log("Es dígito");
    } else {
        console.log("No es dígito")
    }

    rl.close();

}

main();