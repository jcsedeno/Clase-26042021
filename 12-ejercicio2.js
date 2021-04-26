'use strict'

/*
El usuario va introduciendo números por pantalla hasta que introduzca un número negativo,
en ese caso se mostrará el resultado: Mostrar la media y la suma de los números positivos introducidos.
Utilizar un bucle.
*/


let num1 = 0;
let num2 = 0;
let num3 = 0;
let i = 1;

do {
    num2 = Number(prompt("Introduce un número"));
    num1 = num1 + num2;
    num3 = num1 / i;
    i++;
    } while ( num2 > 0);

alert(`la suma es igual a ${num1}  y la media es igual a  ${num3}`);