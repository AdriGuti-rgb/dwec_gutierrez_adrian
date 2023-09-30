let number = prompt("Introduce un numero");

let highest = 0;
let lower = 0;

for (let k = 0; k < 4; k++) {
    number = prompt("Introduce un numero");

    if (number > highest) {
        highest = number;
    }

    if (number < highest) {
        lower = number;
    }

}


confirm(`El mayor número es ${highest} y el menor es ${lower}`);