export default function isPrime(numero) {    
    let contador = 0;
    for (let i = numero - 1; i > 0; i--) {
        if (numero % i == 0) {
            contador++;
        }
    }

    return contador == 1 ? true : false;

}