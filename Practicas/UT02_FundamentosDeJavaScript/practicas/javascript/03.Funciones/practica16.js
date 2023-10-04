let capacity = prompt("Introduce una capacidad");
let unit = prompt("Introduce una unidad");

confirm(convertToBytes(capacity, unit));

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