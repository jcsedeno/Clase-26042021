'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/




let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;


num1 = Number(prompt("Introduce un número"));
num2 = Number(prompt("Introduce el segundo número"));

for(let i = 0; i < num2; i++) {
    num4 = num1+i;
    num3 = num4 % 2

    if (num3 !== 0) {
         document.getElementById("lista").append(`${num4} es un numero impar, `) ;
        // document.write(num3);
        
    }
}
