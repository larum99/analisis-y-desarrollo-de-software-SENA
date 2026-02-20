/*
Un programa con 5 alumnos cada uno con 5 notas, calcular el promedio de
sus notas por alumnos y solo muestra los que ganaron.
*/

const alumnos = [
    [3.5, 4.0, 2.8, 3.9, 4.1],
    [2.5, 2.0, 3.0, 2.8, 2.9],
    [4.5, 4.0, 4.8, 4.2, 4.7],
    [3.0, 3.2, 3.1, 3.4, 3.0],
    [1.5, 2.0, 1.8, 2.2, 1.9]
];

const gananDesde = 3.0;

console.log("Alumnos que ganaron:");
alumnos.forEach((notas, index) => {
    const promedio = notas.reduce((a, b) => a + b) / notas.length;
    if (promedio >= gananDesde) {
        console.log(`Alumno ${index + 1} ganó con promedio ${promedio.toFixed(2)}`);
    }
});
