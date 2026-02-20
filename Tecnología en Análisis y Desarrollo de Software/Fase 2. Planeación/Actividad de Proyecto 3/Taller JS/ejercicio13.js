/*
Para lograr ser monitor de la Universidad en las salas de sistemas, los
estudiantes deben obtener un promedio integral superior a 4.0 y no tener
antecedentes disciplinarios. Ayúdele a un estudiante a saber si puede optar
por ser monitor de la institución.
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
    const nombre = await preguntar("Ingrese su nombre: ");
    const promedioInput = await preguntar("Ingrese su promedio integral: ");
    const antecedentesInput = await preguntar("¿Tiene antecedentes disciplinarios? (si/no): ");

    const promedio = parseFloat(promedioInput);
    const tieneAntecedentes = antecedentesInput.toLowerCase() === "si";

    let mensaje = `Estudiante: ${nombre}\nPromedio: ${promedio}\nAntecedentes: ${tieneAntecedentes ? "Sí" : "No"}\n`;

    if (promedio > 4.0 && !tieneAntecedentes) {
        mensaje += "Puede optar por ser monitor de la Universidad.";
    } else {
        mensaje += "No puede optar por ser monitor de la Universidad.";
    }

    console.log(mensaje);
    rl.close();
}

main();