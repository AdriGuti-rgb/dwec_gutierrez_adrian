let arr = ["Victor Gonzalez Rodriguez", "Pepe Perez Fernandez"]

console.log(getNames(arr));

function getNames(arr) {
    let resultado = [];

    arr.forEach(item => {
        let nombres = item.split(" ");

        resultado.push({
            nombre : nombres[0],
            apellidos : nombres.slice(1).join(" ")
        })
    });

    return resultado;
}