let number = prompt("Introduce un número");

confirm(isNumber(number));

function isNumber (number) {
    if (isNaN(number) || +number == null || number.trim() == "") {
        return false;
    } else {
        return true;
    }
}