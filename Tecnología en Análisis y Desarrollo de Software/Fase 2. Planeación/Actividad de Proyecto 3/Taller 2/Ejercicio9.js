/*
Realizar un programa que cuente de 1 a 200 e imprima en pantalla los
números divisibles por 6, y cuando llegue a 200 cuente de forma regresiva
hasta 20 e imprima los divisibles por 8.
*/

console.log("Divisibles por 6 (1 → 200):");
for (let i = 1; i <= 200; i++) {
    if (i % 6 === 0) {
        console.log(i);
    }
}

console.log("\nDivisibles por 8 (200 → 20):");
for (let j = 200; j >= 20; j--) {
    if (j % 8 === 0) {
        console.log(j);
    }
}

