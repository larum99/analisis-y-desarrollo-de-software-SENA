/*
Realizar un programa que capture el nombre de dos personas y las fechas
de nacimiento con cada campo por separado día, mes y año y calcule la
edad de dos personas diferentes y diga cuál de ellos es mayor.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularEdad(dia, mes, año) {
    const hoy = new Date();
    const nacimiento = new Date(año, mes - 1, dia);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();

    if (mesActual < (mes - 1) || (mesActual === (mes - 1) && diaActual < dia)) {
        edad--;
    }
    return edad;
}

function pedirDatosPersona(num, callback) {
    let persona = {};

    rl.question(`Nombre de la persona ${num}: `, (nombre) => {
        persona.nombre = nombre;

        rl.question(`Día de nacimiento de ${nombre}: `, (dia) => {
            rl.question(`Mes de nacimiento (1-12) de ${nombre}: `, (mes) => {
                rl.question(`Año de nacimiento de ${nombre}: `, (año) => {
                    persona.dia = parseInt(dia);
                    persona.mes = parseInt(mes);
                    persona.año = parseInt(año);
                    callback(persona);
                });
            });
        });
    });
}

pedirDatosPersona(1, (persona1) => {
    pedirDatosPersona(2, (persona2) => {

        persona1.edad = calcularEdad(persona1.dia, persona1.mes, persona1.año);
        persona2.edad = calcularEdad(persona2.dia, persona2.mes, persona2.año);

        console.log("\n--- RESULTADOS ---");
        console.log(`${persona1.nombre} tiene ${persona1.edad} años.`);
        console.log(`${persona2.nombre} tiene ${persona2.edad} años.`);

        if (persona1.edad > persona2.edad) {
            console.log(`\n${persona1.nombre} es mayor que ${persona2.nombre}.`);
        } else if (persona2.edad > persona1.edad) {
            console.log(`\n${persona2.nombre} es mayor que ${persona1.nombre}.`);
        } else {
            console.log(`\n${persona1.nombre} y ${persona2.nombre} tienen la misma edad.`);
        }

        rl.close();
    });
});
