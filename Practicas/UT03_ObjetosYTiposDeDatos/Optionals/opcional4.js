let arr = ["aBc", "BE", "hfa", "AEO"];

console.log(getUpperCase(arr));

function getUpperCase(arr) {
    
    let resultado = [];

    arr.forEach( (item, index) => {
        console.log(item);
        console.log(index);
        if (arr.every ( (item2, index) => {
            "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(item2); 
            console.log(`Item 2 ${item2}`);
            console.log(`Index ${index}`);
        })) {
            resultado.push(item); 
        }
            
    });

    // if (arr.every (item => {
    //     for (let char of item) {
    //         if (vowels.includes(char)) {
    //             resultado.push(item)   
    //         }
    //     }
    // })) 

    return resultado;
}