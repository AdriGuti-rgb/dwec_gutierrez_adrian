let number1 = Number(prompt("Introduce un numero"));
let operador = prompt("Introduce un operador");
let number2 = Number(prompt("Introduce otro numero"));

console.log((calc(operador, number1, number2)));

function calc(operador, operando1, operando2) {

    let resultado;

    operador == "+" ? resultado = operando1 + operando2 
        : operador == "-" ? resultado = operando1 - operando2
        : operador == "*" ? resultado = operando1 * operando2
        : operador == "/" ? resultado = operando1 / operando2
        : operador == "%" ? resultado = operando1 % operando2
        : resultado = "No se reconoce ese operador";

    return resultado;

}