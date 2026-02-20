/*
Mostrar las 30 primeras potencias de 3 y la suma de ellos.
*/

let suma = 0;

console.log("Primeras 30 potencias de 3:\n");

for (let i = 1; i <= 30; i++) {
    let potencia = 3 ** i;
    console.log(`3^${i} = ${potencia}`);
    suma += potencia;
}

console.log("\nSuma total de las 30 primeras potencias de 3:");
console.log(suma);
