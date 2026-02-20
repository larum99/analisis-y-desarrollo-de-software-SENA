/* Determine si un viajero de una Aerolínea puede tomar un tiquete
determinado en clase: Ejecutiva, Normal o Económica. Dependiendo de los
puntos que tenga puede tener acceso a cada clase. Más de 2000 puntos
puede estar en Ejecutiva, entre 1000 y 1999 puede estar en Normal y
menos de 1000 puede estar en Económica.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor ingrese su cantidad de puntos: ', (input) => {
    let PUNTOS = parseFloat(input);

    if (isNaN(PUNTOS)) {
        console.log("Debe ingresar un valor númerico");
        rl.close();
        return;
    }

    let mensaje = "";
    if (PUNTOS > 2000) {
        mensaje = 'Pertenece a clase Ejecutiva.'
    } else if (PUNTOS >= 1000 && PUNTOS < 2000) {
        mensaje = "Pertenece a clase Normal."
    } else {
        mensaje = "Pertence a clase Económica."
    }

    console.log(mensaje);
    rl.close();
});