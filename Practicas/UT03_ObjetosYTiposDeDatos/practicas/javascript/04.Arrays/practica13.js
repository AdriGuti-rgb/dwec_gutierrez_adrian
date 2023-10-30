let a = [1, 2, 3];
let b = ["a", "b", "c"];

console.log(combineArr2(a, b));
console.log(combineArr3(a, b));

let combineArr1 = (arr1, arr2) => arr1.concat(arr2);
console.log(combineArr1(a, b));

function combineArr2(arr1, arr2)  {
    let resultado = [];
    let contador = 0;

    for (let a of arr1) {
        resultado[contador] = a;
        contador++;
    }

    for (let b of arr2) {
        resultado[contador] = b;
        contador++;
    }

    return resultado;
}

function combineArr3 (arr1, arr2) {
    let resultado = [];
    return resultado = [...arr1, ...arr2];
}