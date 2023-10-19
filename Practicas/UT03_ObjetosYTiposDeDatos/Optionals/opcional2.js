console.log(isIsogram("Hola hola"));

function isIsogram (str) {

    let object = {};
    str = str.toLowerCase();

    for (let char of str) {
        if (char == " ") {
            continue;
        }
        if (!object[char]) {
            object[char] = 1;
        } else {

            object[char] = object[char] + 1;
        }

    }

    let numero = object[str[0]];
    let isTrue = false;

    for (let cantidad in object) {
        if (object[cantidad] != numero) {
            return false;
        }
    }

    return true; 



}