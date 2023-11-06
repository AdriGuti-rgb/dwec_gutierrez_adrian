let arr = ["hola", "adrian", "villabalter", "IES"];

console.log(maxString(arr));

function maxString(arr) {

    let resultado = "";
    let leng = arr[0].length;
    arr.forEach(item => {
        if (item.length > leng) {
            leng = item.length;
            resultado = item;
        }
    });

    return resultado;
}