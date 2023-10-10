let asignaturas = {
    "DWEC": "Desarrollo Web en Entorno Cliente",
    "DWES": "Desarrollo Web en Entorno Servidor",
    "DIW": "Diseño de Interfaces Web",
    "DAW": "Despliegue de Aplicaciones Web"
}

let profesores = {
    "DWECp": "Victor",
    "DWESp": "Daniel",
    "DIWp": "Carmen",
    "DAWp": "Aida"
}

console.log(mergeObjects(asignaturas, profesores));

function mergeObjects(object1, object2) {

    let newObject = {};

    for (let key in object1) {
        newObject[key] = object1[key];
        for (let keys in object2) {
            newObject[keys] = object2[keys];
        }
    }

    return newObject;

}