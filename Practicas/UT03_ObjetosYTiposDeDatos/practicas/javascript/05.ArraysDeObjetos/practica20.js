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
            DWEC: 9.4
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
            DWES: 4
        }
    }
]

console.log(addNif(arr));

function addNif(arr) {
    

    arr.forEach(a => {
        let dni = a.dni % 23;

        let nuevoNif = dni == 0 ? a.dni + "T"
                    : dni == 1 ? a.dni + "R"
                    : dni == 2 ? a.dni + "W"
                    : dni == 3 ? a.dni + "A"
                    : dni == 4 ? a.dni + "G"
                    : dni == 5 ? a.dni + "M"
                    : dni == 6 ? a.dni + "Y"
                    : dni == 7 ? a.dni + "F"
                    : dni == 8 ? a.dni + "P"
                    : dni == 9 ? a.dni + "D"
                    : dni == 10 ? a.dni + "X"
                    : dni == 11 ? a.dni + "B"
                    : dni == 12 ? a.dni + "N"
                    : dni == 13 ? a.dni + "J"
                    : dni == 14 ? a.dni + "Z"
                    : dni == 15 ? a.dni + "S"
                    : dni == 16 ? a.dni + "Q"
                    : dni == 17 ? a.dni + "V"
                    : dni == 18 ? a.dni + "H"
                    : dni == 19 ? a.dni + "L"
                    : dni == 20 ? a.dni + "C"
                    : dni == 21 ? a.dni + "K"
                    : a.dni + "E";

        a.nif = nuevoNif;
        delete a.dni;
    });

    return arr;
}