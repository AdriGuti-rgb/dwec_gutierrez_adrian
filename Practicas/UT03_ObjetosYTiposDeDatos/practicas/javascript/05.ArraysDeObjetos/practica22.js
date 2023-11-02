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

console.log(getAlumnosByCiclo("DAW"));

function getAlumnosByCiclo(str) {
    
    let alumnos = [];

    arr.forEach ( a => {
        if (str === a.ciclo) {
            alumnos.push(`${a.nombre} ${a.ape1} ${a.ape2}`);
        }
    });

    // return arr.filter( ({ciclo}) => ciclo == str)
    //     .map ( ({nombre, ape1, ape2}) => `${nombre} ${ape1} ${ape2}` );

    return alumnos;
}