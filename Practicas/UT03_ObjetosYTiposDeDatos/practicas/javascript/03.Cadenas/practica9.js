console.log(removeVowels("Hola mundo"));
console.log(removeVowels("IES San Andres"));


function removeVowels (str) {

    let final = "";

    for (let k of str) {
        if ("aeiouAEIOU".includes(k)) {
            continue;
        }
            final = final + k;
    }

    return final;
}