console.log(replaceWithPosition("hola"));

function replaceWithPosition(str) {

    let resultado = ""; 
    let abecedario = " abcdefghijklmnopqrstuvwxyz"

    for (let char of str) {
        for (let k = 0; k < abecedario.length; k++) {
            if (char == abecedario[k]) {
                resultado = resultado + " " + k;
            }
        }
    }

    return resultado;

}