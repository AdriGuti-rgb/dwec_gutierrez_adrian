let total = prompt("Dime el numero de Fibonacci que quieres");

confirm(getFibonacciAt(total));

function getFibonacciAt(n) {
    let x2 = 0;
    let x1 = 1;
    let x = x1 + x2;
    
    for (let c = 0; c < n; c++) {
        x2 = x1;
        x1 = x;
        x = x1 + x2;
    }

    return x2;
}