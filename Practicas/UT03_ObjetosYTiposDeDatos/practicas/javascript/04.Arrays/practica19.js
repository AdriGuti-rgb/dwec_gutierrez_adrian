let arr = ["24-05-2020", "02-12-2018", "14-02-2020"];

console.log(sortDates(arr));

function sortDates (arr) {

    return arr.sort( (a, b) => {
        return a.split("-").reverse().join("") > b.split("-").reverse().join("") ? 1 : -1; 
        // La funcion sort devuelve 1 o -1
    });
}