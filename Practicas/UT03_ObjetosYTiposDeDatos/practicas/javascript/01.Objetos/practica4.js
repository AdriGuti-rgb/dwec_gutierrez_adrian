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
    "DAW": "Aida"
}

let profesores2 = {
    "DWEC": "Victor",
    "DWES": "Daniel",
    "DIW": "Carmen",
    "DAW": "Aida"
}

console.log(containsObject(asignaturas, profesores));
console.log(containsObject(profesores, profesores2));
console.log(containsObject(asignaturas, profesores2));

function containsObject (object1, object2) {

    let isTrue;

    for (let keyOb1 in object1) {
        if (keyOb1 in object2) {
            isTrue = true;
        } else {
            isTrue = false;
        }
        if (!isTrue) {
            return isTrue;
        }
    }

    return isTrue;

}