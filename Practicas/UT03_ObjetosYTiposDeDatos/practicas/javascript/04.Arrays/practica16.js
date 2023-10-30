let a = [1, 3, 5];
let b = 4;

console.log(a);
console.log(createPow(a, b));

function createPow (arr, elevado) {

    let arr2 = [];

    arr.forEach(item => arr2.push(item**elevado));

    return arr2;

}