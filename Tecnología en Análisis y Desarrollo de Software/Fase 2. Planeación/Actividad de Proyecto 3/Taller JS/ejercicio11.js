/*
Escribir un algoritmo que determine el equipo en el que será asignado un
jugador. Se tiene como datos: nombre, cédula y edad. Y se clasifica en cada
equipo así: Profesionales para jugadores entre 25 y 40 años, aficionados
entre 18 y 24 años, Novatos entre 12 y 17 años. Otras edades no pueden
ser asignados a ningún equipo.
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
    const cedula = await preguntar("Ingrese cédula: ");
    const edad = parseInt(await preguntar("Ingrese edad: "));

    function asignarEquipo(nombre, cedula, edad) {
        let equipo;

        switch (true) {
            case (edad >= 25 && edad <= 40):
                equipo = 'Profesionales';
                break;
            case (edad >= 18 && edad <= 24):
                equipo = 'Aficionados';
                break;
            case (edad >= 12 && edad <= 17):
                equipo = 'Novatos';
                break;
            default:
                equipo = 'No puede ser asignado a ningún equipo';
        }

        return `Jugador: ${nombre} | Cédula: ${cedula} | Equipo: ${equipo}`;
    }

    console.log(asignarEquipo(nombre, cedula, edad));

    rl.close();
}

main();