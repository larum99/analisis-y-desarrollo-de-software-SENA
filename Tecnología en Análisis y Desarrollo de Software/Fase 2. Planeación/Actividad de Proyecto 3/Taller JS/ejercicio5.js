/*
Escriba un algoritmo que intercambie el valor de dos variables numéricas
sólo si el valor de la primera es mayor que el de la segunda.
 */

let NUMERO_A = 5;
let NUMERO_B = 3;
let mensaje = `Valor inicial de A: ${NUMERO_A}, valor inicial de B: ${NUMERO_B}`;
if (NUMERO_A > NUMERO_B) {
    // let A_temporal = NUMERO_A
    // NUMERO_A = NUMERO_B;
    // NUMERO_B = A_temporal;
    [NUMERO_A, NUMERO_B] = [NUMERO_B, NUMERO_A]; // destructuring: El lado derecho crea un array temporal
    mensaje += `\nValor final de A: ${NUMERO_A}, valor final de B: ${NUMERO_B}`;
    console.log(mensaje);
}