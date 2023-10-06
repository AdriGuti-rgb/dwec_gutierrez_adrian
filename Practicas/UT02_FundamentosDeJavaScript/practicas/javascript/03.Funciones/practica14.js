let factorial = prompt("De que numero quieres el factorial");
let total = fact(factorial);

confirm(`El factorial es ${total}`)


function fact (total) {
    let cantidad = 1;

    for (let k = total; k > 0; k--) {
        cantidad = cantidad * k;
    }
    
    return cantidad;
}

function factVictor (num) {
    return (num == 1) ? 1 : num * factVictor(num - 1);
}