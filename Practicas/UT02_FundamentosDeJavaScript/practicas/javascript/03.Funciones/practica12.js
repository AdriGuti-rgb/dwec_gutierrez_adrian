import isPrime from "./funcionIsPrime.js";

let number = prompt("Introduce un numero");

while (+number != 0 || isNaN(number) || number == null || number.trim() == "") {
    if (!isNaN(number)) {
        console.log(isPrime(number));
    }
    number = prompt("Introduce un numero, si quiere terminar introduzca 0");
}

