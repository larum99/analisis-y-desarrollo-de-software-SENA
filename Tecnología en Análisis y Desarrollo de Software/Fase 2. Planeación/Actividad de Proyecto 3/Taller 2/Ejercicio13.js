/*
Mientras a<=1500; contar hasta 1500 e imprimir los números divisibles por
4 y 5 y decir si son pares o impares.
*/


let a = 1;

while (a <= 1500) {

    if (a % 4 === 0 && a % 5 === 0) {
        let tipo = (a % 2 === 0) ? "par" : "impar";
        console.log(`${a} es divisible por 4 y 5 y es ${tipo}`);
    }
    a++;
}
