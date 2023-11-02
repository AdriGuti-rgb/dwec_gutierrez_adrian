let arr1 = [1, 2, 3, 4, 5]; 
let arr2 = [1, 2, 3, 4, 5];

console.log(isEqualArr(arr1, arr2));

let isEqualArrr=(arr1,arr2) => (arr1.length !== arr2.length) ? false : arr1.every( (item, index) => item === arr2[index] );
console.log(isEqualArrr(arr1, arr2));

function isEqualArr(arr1, arr2) {

    if (arr1.length != arr2.length) {
        return false;
    }

    return arr1.every( (item, index) => item === arr2[index]);

}