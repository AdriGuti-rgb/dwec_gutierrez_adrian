import isPrime from practica12.js;

let number = Number(prompt("Introduce un numero"));

while (number != 0) {
    isPrime(number);
    number = Number(prompt("Introduce un numero"));
}

