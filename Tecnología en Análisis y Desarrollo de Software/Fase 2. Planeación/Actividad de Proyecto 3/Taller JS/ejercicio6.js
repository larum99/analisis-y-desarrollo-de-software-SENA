/*
Diseñe un algoritmo que calcule la nota final de un estudiante con los
siguientes porcentajes: primer parcial 30%, segundo parcial 30% y examen
final 40%. Al final determine si pudo aprobar o no la asignatura. La nota
mínima aprobatoria es 3.2 (Tres punto Dos).
 */

const PARCIAL_1 = 5;
const PARCIAL_2 = 2;
const EXAMEN_FINAL = 1;

const PROMEDIO = PARCIAL_1 * 0.3 + PARCIAL_2 * 0.3 + EXAMEN_FINAL * 0.4;

let mensaje = "";

if (PROMEDIO >= 3.2) {
    mensaje = "Pasó el curso."
} else {
    mensaje = "Reprobó el curso."
}

console.log(mensaje);