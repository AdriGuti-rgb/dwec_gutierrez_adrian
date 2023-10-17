let str = "Hola me llamo paco";

console.log(countVowels(str));

function countVowels(str) {
    let conjunto = str.toLowerCase();
    let contador = 0;
    console.log(str);
    for (let k = 0; k < str.length; k++) {
        if (conjunto.charAt(k) == 'a'
            || conjunto.charAt(k) == 'e'
            || conjunto.charAt(k) == 'i'
            || conjunto.charAt(k) == 'o'
            || conjunto.charAt(k) == 'u') {
            contador++;
        }
    }

    return contador;
}