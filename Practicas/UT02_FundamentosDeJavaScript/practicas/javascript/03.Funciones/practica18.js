let a = prompt("Introduce un numero");
let b = prompt("Introduce un numero");
let c = prompt("Introduce un numero");

function isTriangle (a, b, c) {
    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isTriangle(a, b, c));

// let isTriangle = (a, b, c) => (a + b > c) && (a + c > b) && (b + c > a);