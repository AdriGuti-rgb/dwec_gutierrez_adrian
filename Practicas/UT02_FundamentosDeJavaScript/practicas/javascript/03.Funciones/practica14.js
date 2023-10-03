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