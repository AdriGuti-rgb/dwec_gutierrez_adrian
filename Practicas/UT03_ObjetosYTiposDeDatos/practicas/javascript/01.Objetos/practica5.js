let profesores = {
    "DWEC": undefined,
    "DWES": "Daniel",
    "DIW": "Carmen",
    "DAW": "Aida"
}

console.log(removeUndefined(profesores));

function removeUndefined (object1) {

    let newObject = {};

    for (let key in object1) {
        if (object1[key] == undefined) {
            continue;
        } else {
            newObject[key] = object1[key];
        }
    }

    return newObject;

}