/*
Crea un arreglo o array multidimensional que contenga 3 columnas y las filas que tu quieras, las dos primeras columnas tendrán números y en la 3 columna sera el resultado de sumar el número de la primera y segunda columna. Muestra el array o arreglo de la siguiente forma: ◦ 3 + 5 = 8 ◦ 4 + 4 = 7
*/

const matriz = [
    [3, 5],
    [4, 4],
    [7, 2]
];

// Agregamos la tercera columna con la suma
matriz.forEach(fila => {
    fila[2] = fila[0] + fila[1];
});

// Mostrar el resultado
matriz.forEach(fila => {
    console.log(`${fila[0]} + ${fila[1]} = ${fila[2]}`);
});
