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
            DWES: 4,
        }
    }
]

console.log(getAverageGrade("DIW"));

function getAverageGrade(str) {

    let media = 0;
    let suma = 0;
    let contador = 0;

    // arr.forEach ( a => {

    //     if (a.notas[str]) {
    //         suma += a.notas[str];
    //         contador++;
    //     }
        
    //     media = suma / contador;

    // });

    // media = arr.reduce(function(suma, usuario) {
    //     if (usuario.notas[str]) {
    //         suma += usuario.notas[str];
    //         contador++;
    //     }
    //     return suma;
    // }, 0) /contador;

    media = arr.reduce(function(objeto, usuario) {
        if (usuario.notas[str]) {
            objeto.suma += usuario.notas[str];
            objeto.contador++;
        }

        return objeto;

    }, {suma: 0, contador: 0} );

    // return `La media en ${str} es: ${media.toFixed(2)}`;
    return `La media en ${str} es: ${(media.suma / media.contador).toFixed(2)}`;
}