let a = [1, 4, 5, 34, 75, 2];

console.log(getOdd(a));

function getOdd(arr) {

    let arr2 = [];

    arr.forEach ( item => { 
            if (item % 2 != 0) {
                arr2.push(item);
            }
        }
    );

    return arr2;
    
}


let b = a.filter( item => item % 2 != 0);
console.log(b);