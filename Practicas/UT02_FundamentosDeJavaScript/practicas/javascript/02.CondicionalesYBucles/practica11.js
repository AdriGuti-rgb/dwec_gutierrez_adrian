let number = Number(prompt("Introduce un número:"))
let isPar;

while (number <= 0 || isNaN(number) || number == null) {
    number = Number(prompt("El numero introduce no es correcto, introducelo de nuevo"));
}

number % 2 == 0 ? isPar = true : isPar = false;

isPar ? confirm("El numero introducido es par") : confirm("El numero introducido es impar");

/*
if (number % 2 == 0) {
    isPar = true;
} else {
    isPar = false;
}

if (isPar) {
    confirm("El numero introducido es par");
} else {
    confirm("El numero introducido es impar");
}
*/
