'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/


let num1 = 0;
let num2 = 0;
let num3 = 0;

num1 = Number(prompt("Introduce un número"));

for (let i = 1; i <= num1; i++){
    num3 = num1 % i;
    if( num3 == 0){
        document.getElementById("lista").append(`${i} es un numero divisor de ${num1}`) ;
    } 
};