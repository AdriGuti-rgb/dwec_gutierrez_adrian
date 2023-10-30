let arr = [
    {   name: 'Adrian',
        surname: 'Gutierrez',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }];

console.log(generateUsername(arr));

function generateUsername(arr) {

    arr.forEach(a => {
        let nuevoNick = a.name.charAt(0).toLowerCase() + 
            a.surname.toLowerCase() + 
            Math.round(Math.random() * 10).toString() +
            Math.round(Math.random() * 10).toString();
        a.nickName = nuevoNick;
    });
    
    return arr;
}

