let number1 = prompt("Introduce un numero");
let number2 = prompt("Introduce un numero");
let number3 = prompt("Introduce un numero");
let number4 = prompt("Introduce un numero");
let number5 = prompt("Introduce un numero");
let highest;
let lower;

if (number1 > number2 
    && number1 > number3 
    && number1 > number4 
    && number1 > number5) {
        highest = number1;
} else if (number2 > number1 
    && number2 > number3
    && number2 > number4 
    && number2 > number5) {
        highest = number2;
}  else if (number3 > number1 
    && number3 > number2
    && number3 > number4 
    && number3 > number5) {
        highest = number3;
}  else if (number4 > number1 
    && number4 > number2
    && number4 > number3 
    && number4 > number5) {
        highest = number4;
} else {
    highest = number5;
}

if (number1 < number2 
    && number1 < number3 
    && number1 < number4 
    && number1 < number5) {
        lower = number1;
} else if (number2 < number1 
    && number2 < number3
    && number2 < number4 
    && number2 < number5) {
        lower = number2;
}  else if (number3 < number1 
    && number3 < number2
    && number3 < number4 
    && number3 < number5) {
        lower = number3;
}  else if (number4 < number1 
    && number4 < number2
    && number4 < number3 
    && number4 < number5) {
        lower = number4;
} else {
    lower = number5;
}



confirm(`El mayor número es ${highest} y el menor es ${lower}`);