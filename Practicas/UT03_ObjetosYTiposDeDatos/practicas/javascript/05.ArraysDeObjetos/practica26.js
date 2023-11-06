let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4,
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4,
        }
    }
]

console.log(getUnsecurePass());
console.log(isUnsecurePass("P@ssw0rd"));
console.log(isUnsecurePass("1234ABC"));
console.log(isUnsecurePass(""));

function getUnsecurePass(){

    return arr.filter ( ({pass}) => isUnsecurePass(pass));

    // arr.forEach ( (item) => {
    //     if (getLongitudes(item.pass)) {
            
    //     }
    // });

}

function isUnsecurePass (pass) {
    let a = pass.split(''); // Descompongo la cadena en un array
    let mayus = false;
    let minus = false;
    let num = false;
    let long = a.length >= 8;

    a.forEach( char => {
        minus ||= "abcdefghijklmnñopqrstuvwxyz".includes(char);
        mayus ||= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".includes(char);
        num ||= "0123456789".includes(char);
    });
    
    return (long && mayus && minus && num)
}