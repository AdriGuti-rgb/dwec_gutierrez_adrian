console.log(isPangrama("abcdefghijklmnñopqrsstuvwxyz"));
console.log(isPangrama("az"));

function isPangrama(str) {

    let abecedario = "abcdefghijklmnñopqrstuvwxyz";
    let object = {};

    for (let char of str) {
        if (char == " ") {
            continue;
        }
        /*if (!object[char]) {
            object[char] = 1;
        } else {

            object[char] = object[char] + 1;
        }*/

        object[char] = !char in object ? 1 : object[char] + 1;
    }

    if (Object.keys(object).length == abecedario.length) {
        return true;
    }

    return false; 

}