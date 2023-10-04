let n = prompt("Introduce una capacidad");
let from = prompt("Introduce una unidad");
let to = prompt("Introduce una unidad");

function convertToBytes (capacity, from) {
    let total;

    from == "B" || from == "Byte" ? total = capacity * 1
        : from == "KB" || from == "Kilobyte" ? total = capacity * 1000
        : from == "MB" || from == "Megabyte" ? total = capacity * 1000000
        : from == "GB" || from == "Gigabyte" ? total = capacity * 1000000000
        : from == "TB" || from == "Terabyte" ? total = capacity * 1000000000000
        : from == "PB" || from == "Petabyte" ? total = capacity * 1000000000000000
        : from == "EB" || from == "Exobyte" ? total = capacity * 1000000000000000000
        : total = "No se reconoce esa unidad";

    return total;
}

function convertCapacity (n, from, to) {
    let inicial = convertToBytes(n, from);

    let total;

    to == "B" || to == "Byte" ? total = inicial * 1
    : to == "KB" || to == "Kilobyte" ? total = inicial / 1000
    : to == "MB" || to == "Megabyte" ? total = inicial / 1000000
    : to == "GB" || to == "Gigabyte" ? total = inicial / 1000000000
    : to == "TB" || to == "Terabyte" ? total = inicial / 1000000000000
    : to == "PB" || to == "Petabyte" ? total = inicial / 1000000000000000
    : to == "EB" || to == "Exobyte" ? total = inicial / 1000000000000000000
    : total = "No se reconoce esa unidad";

    return total;

}

confirm(convertCapacity(n, from, to));