
let number = Number(prompt("Introduce un numero"));

while (number != 0 || !isNaN(number) || number == null) {
    if (!isNaN(number)) {

    }
    number = Number(prompt("Introduce un numero"));
}

function isPrime(numero) {    
    numero % 2 == 0 ? console.log(true) : console.log(false);

    /*if (numero % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);;
    }*/
}