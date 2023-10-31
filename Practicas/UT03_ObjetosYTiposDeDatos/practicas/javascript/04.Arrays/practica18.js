let a = [1, 2, 3 ,5, 4, 6, 3];

let maximun = a.reduce(max, -Infinity);
console.log(maximun);

function max(acum, item) {
    if (acum > item) {
        return acum
    } else {
        return item;
    }
}