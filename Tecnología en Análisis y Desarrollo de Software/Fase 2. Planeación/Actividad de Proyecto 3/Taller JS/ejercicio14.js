/*
Determinar el nivel de un empleado según las siguientes condiciones:
a. Nivel 1 si el sueldo es menor a 500 y lleva menos de 4 años en la
empresa
b. Nivel 2 si el sueldo esta entre 501 y 1000 lleva menos de 4 años en la
empresa
c. Nivel 3 no importa el sueldo, solo que lleve mas de 10 años en la
empresa
d. Nivel 4 para los que lleven entre 5 y 9 años en la empresa y ganen
menos de 2000.
e. Los demás están en el nivel 0.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntar(texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}

async function main() {
    const nombre = await preguntar("Ingrese nombre: ");
    const sueldo = await preguntar("Ingrese suelde: ");
    const años = parseInt(await preguntar("Ingrese años de antigüedad: "));

    function asignarNivel(nombre, sueldo, años) {
        let nivel;

        switch (true) {
            case (sueldo < 500 && años < 4):
                nivel = 'Nivel 1';
                break;
            case (sueldo >= 501 && años < 4):
                nivel = 'Nivel 2';
                break;
            case (años > 10):
                nivel = 'Nivel 3';
                break;
            case (sueldo < 2000 && años >=5 && años <= 9):
                nivel = 'Nivel 4';
                break;
            default:
                nivel = 'Nivel 0';
        }

        return `Empleado: ${nombre} | Sueldo: ${sueldo} | Años antigüedad: ${años} | Nivel: ${nivel}`;
    }

    console.log(asignarNivel(nombre, sueldo, años));

    rl.close();
}

main();