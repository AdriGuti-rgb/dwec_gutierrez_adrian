let number = prompt("Introduce un numero");

while (+number != 0 || isNaN(number) || number == null || number.trim() == "") {
    if (!isNaN(number)) {
        console.log(isPrime(number));
    }
    number = prompt("Introduce un numero");
}

function isPrime(numero) {    
    contador = 0;
    for (let i = numero - 1; i > 0; i--) {
        if (numero % i == 0) {
            contador++;
        }
    }

    return contador == 1 ? true : false;

}