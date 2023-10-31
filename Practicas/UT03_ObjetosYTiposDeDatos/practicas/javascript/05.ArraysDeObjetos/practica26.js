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
console.log(getLongitudes("P@ssw0rd"));
console.log(getLongitudes("1234ABC"));
console.log(getLongitudes(""));

function getUnsecurePass(){



    arr.forEach ( (item) => {
        if (getLongitudes(item.pass)) {
            
        }
    });

}

function getLongitudes (pass) {
    return pass.trim().length >= 1 && pass.trim().length <= 8;
}