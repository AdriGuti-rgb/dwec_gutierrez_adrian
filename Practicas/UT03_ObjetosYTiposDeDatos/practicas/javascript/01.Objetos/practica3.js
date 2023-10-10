let asignaturas = {
    "DWEC": "Desarrollo Web en Entorno Cliente",
    "DWES": "Desarrollo Web en Entorno Servidor",
    "DIW": "Diseño de Interfaces Web",
    "DAW": "Despliegue de Aplicaciones Web"
}

let profesores = {
    "DWEC": "Victor",
    "DWESp": "Daniel",
    "DIWp": "Carmen",
    "DAWp": "Aida"
}

console.log(intersectObject(asignaturas, profesores));

function intersectObject(object1, object2) {

    let newObject = {};

    for (let key in object1) {
        for (let keys in object2) {
            if (key == keys) {
                newObject[keys] = object2[keys];
            }
        }
    }

    return newObject;

}
