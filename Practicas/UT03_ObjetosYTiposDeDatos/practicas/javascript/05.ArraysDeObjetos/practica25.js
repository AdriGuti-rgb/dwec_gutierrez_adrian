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

console.log(getAverages());

function getAverages() {

    let media = 0;
    let nuevoArr = [];
    let contador = 0;

    arr.forEach( (item) => {
        for (let nota in item.notas) {
            media = media + item.notas[nota];
            contador++;
        }
        
        nuevoArr.push({
            nombre : item.nombre + ' ' + item.ape1,
            expediente : item.expediente,
            nota_media : media / contador
        });  
        media = 0;
        contador = 0;
    });

    // return arr.map( ({nombre, ape1, ape2, expediente, notas}) =>
    //     let nota = 0;
    //     let cont = 0;

    //     for (let asignaturas in notas)

    //     return {
    //         alumno: ``,
    //         expediente,
    //         nota: nota/cont;
    //     }
    // );

    return nuevoArr;
}