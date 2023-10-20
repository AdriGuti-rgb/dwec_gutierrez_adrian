let str = Number(prompt("Dime un numero"));
let baseFrom = Number(prompt("Dime la base en la que esta"));
let baseTo = Number(prompt("Dime la base en el que lo quieres"));


console.log(convertBase(str, baseFrom, baseTo));

function convertBase (str, baseFrom, baseTo) {
    console.log(str);
    console.log(baseFrom);
    console.log(baseTo);
    let number = parseInt(str, baseFrom);

    return number.toString(baseTo);

    // return parseInt(str, baseFrom).toString(baseTo);

    // let convertBase = (str, baseFrom, baseTo) => parseInt(str, baseFrom).toString(baseTo);
}