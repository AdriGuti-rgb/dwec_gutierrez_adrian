console.log(isHeterograma("Hola"));

function isHeterograma (str) {

    let object = {};

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

    for (let cantidad in object) {
        if (object[cantidad] > 1) {
            return false;
        }
    }

    return true; 



}