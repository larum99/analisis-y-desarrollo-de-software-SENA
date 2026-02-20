/*
2. Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que
desees de la manera que quieras y muestra por pantalla la media de valores del array
 */


/*
const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

let media = suma / numeros.length;

console.log("Los valores del arreglo son:", numeros);
console.log("La media es:", media);
*/

const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const media = numeros.reduce((acc, valor) => acc + valor, 0) / numeros.length;

console.log("Los valores del arreglo son:", numeros);
console.log("La media es:", media);

