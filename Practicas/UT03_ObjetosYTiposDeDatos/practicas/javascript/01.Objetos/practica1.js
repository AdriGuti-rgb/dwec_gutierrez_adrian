let asignaturas = {
    "DWEC": "Desarrollo Web en Entorno Cliente",
    "DWES": "Desarrollo Web en Entorno Servidor",
    "DIW": "Diseño de Interfaces Web",
    "DAW": "Despliegue de Aplicaciones Web"
}

console.log(cloneObject(asignaturas));


function cloneObject (asignaturas) {

    let newObject = {};

    for (let key in asignaturas) {
        newObject[key] = asignaturas[key];
    }

    return newObject;
}