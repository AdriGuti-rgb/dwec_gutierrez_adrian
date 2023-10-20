console.log(countLetters("DAW DWEC"));
console.log(countLetters("Hola mundo"));

function countLetters (str) {

    let object = {};

    for (let char of str) {
        if (char == " ") {
            continue;
        }
        /*
        if (!object[char]) {
            object[char] = 1;
        } else {
            object[char] = object[char] + 1;
        }*/

        object[char] = !char in object ? object[char] + 1 : 1;
    }

    return object; 

}