console.log(removeVowels("Hola mundo"));
console.log(removeVowels("IES San Andres"));


function removeVowels (str) {

    let final = "";

    for (let char of str) {
        console.log(char);
        if (char == "a" || char == "e"
                || char == "i" || char == "o"
                || char == "u" || char == "A"
                || char == "E" || char == "I"
                || char == "O" || char == "U") {
            continue;
        }
        final = final + char;
    }

    return final;
}