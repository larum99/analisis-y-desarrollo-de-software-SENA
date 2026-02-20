/* Dadas las notas parciales de 3 estudiantes, calcule la nota definitiva de
cada uno de ellos y determine que estudiante obtuvo mejor rendimiento
académico y cual obtuvo el mas bajo rendimiento académico.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise(resolve => rl.question(texto, resolve));
}

async function main() {
    console.log("\n--- Estudiante 1 ---");
    let e1_n1 = parseFloat(await preguntar("Nota 1: "));
    let e1_n2 = parseFloat(await preguntar("Nota 2: "));
    let e1_n3 = parseFloat(await preguntar("Nota 3: "));
    let def1 = (e1_n1 + e1_n2 + e1_n3) / 3;

    console.log("\n--- Estudiante 2 ---");
    let e2_n1 = parseFloat(await preguntar("Nota 1: "));
    let e2_n2 = parseFloat(await preguntar("Nota 2: "));
    let e2_n3 = parseFloat(await preguntar("Nota 3: "));
    let def2 = (e2_n1 + e2_n2 + e2_n3) / 3;

    console.log("\n--- Estudiante 3 ---");
    let e3_n1 = parseFloat(await preguntar("Nota 1: "));
    let e3_n2 = parseFloat(await preguntar("Nota 2: "));
    let e3_n3 = parseFloat(await preguntar("Nota 3: "));
    let def3 = (e3_n1 + e3_n2 + e3_n3) / 3;

    console.log("\n===Resultados===")
    console.log(`Estudiante 1. Nota definitiva ${def1}`);
    console.log(`Estudiante 2. Nota definitiva ${def2}`);
    console.log(`Estudiante 3. Nota definitiva ${def3}`);

    let estudiantes = [
        { nombre: "Estudiante 1", nota: def1 },
        { nombre: "Estudiante 2", nota: def2 },
        { nombre: "Estudiante 1", nota: def3 }
    ];

    let mejor =  estudiantes.reduce((a, b) => a.nota > b.nota ? a : b);
    let peor = estudiantes.reduce((a, b) => a.nota < b.nota ? a : b);

    console.log("\n=== Rendimiento ===");
    console.log(`➡ Mejor rendimiento: ${mejor.nombre} con ${mejor.nota}`);
    console.log(`➡ Peor rendimiento: ${peor.nombre} con ${peor.nota}`);

    rl.close();
}

main();