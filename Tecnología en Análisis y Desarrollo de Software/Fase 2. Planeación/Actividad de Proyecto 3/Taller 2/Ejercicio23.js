/*
Hacer un programa que muestre si los cincos primeros numeros impares
son múltiples de tres arrancando de 10 */

let inicio = 10;
let contador = 0;
let numero = inicio;

console.log("Analizando los primeros 5 números impares desde 10:\n");

while (contador < 5) {
    if (numero % 2 !== 0) {
        let esMultiple = (numero % 3 === 0);
        console.log(`${numero} -> ${esMultiple ? "Es múltiplo de 3" : "No es múltiplo de 3"}`);
        contador++;
    }
    numero++;
}
