import isPrime from "./funcionIsPrime.js";

let number = (prompt("Introduce cuantos numeros primos quieres ver"));
let contador = 0;

for (let k = 0; contador < number; k++) {

    if (isPrime(k)) {
        console.log(k);
        contador++;
    }

}

