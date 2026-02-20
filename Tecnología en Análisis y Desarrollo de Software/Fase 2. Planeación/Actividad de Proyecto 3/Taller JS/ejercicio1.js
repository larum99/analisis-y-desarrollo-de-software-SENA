/*
A través de un algoritmo ayude a un usuario de Megabus a saber cuántos
pasajes tiene según el cupo de su tarjeta. Cada pasaje cuesta $1.700 pesos.
Además es importante alertar al usuario cuando su cupo se encuentre con
menos de 2 pasajes, se le informa que debe recargar su tarjeta.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PRECIO_PASAJE = 1700;

rl.question('Por favor ingrese el cupo de su tarjeta en pesos: ', (input) => {
    let CUPO_TARJETA = parseFloat(input);

    if (isNaN(CUPO_TARJETA)) {
        console.log('Debe ingresar un valor númerico.')
    } else {
        let cantidad_pasajes = Math.floor(CUPO_TARJETA / PRECIO_PASAJE);
        let mensaje = `Con su cupo de ${CUPO_TARJETA} pesos usted tiene ${cantidad_pasajes} pasajes.`;

        if (cantidad_pasajes < 2) {
            mensaje += "\n¡Atención! Debe recargar su tarjeta.";
        }
        console.log(mensaje);
    }
    rl.close();
});