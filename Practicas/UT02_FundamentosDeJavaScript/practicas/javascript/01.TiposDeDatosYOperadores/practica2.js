let userName = prompt("Dime tu nombre: ");
let firstMark = prompt("Nota del primer examen?");
let secondMark = prompt("Nota del segundo examen?");

confirm(`Hola ${userName}, la nota media de tus examen es ${(Number(firstMark) + Number(secondMark)) / 2}`);