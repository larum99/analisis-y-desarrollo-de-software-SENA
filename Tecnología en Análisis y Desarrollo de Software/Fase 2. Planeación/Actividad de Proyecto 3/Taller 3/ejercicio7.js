/*
7. Crear una matriz para las tablas de multiplicar
*/

// Definimos tamaños
const filas = 10;   // Tablas del 1 al 10
const columnas = 10; // Multiplicamos del 1 al 10

// Creamos la matriz vacía
const matriz = [];

// Llenamos la matriz
for (let i = 1; i <= filas; i++) {
    const fila = [];
    for (let j = 1; j <= columnas; j++) {
        fila.push(i * j);
    }
    matriz.push(fila);
}

// Mostramos la matriz
console.table(matriz);
