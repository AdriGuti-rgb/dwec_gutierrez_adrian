const inputs = document.getElementsByTagName("input");

const functions = {
    "fecha": testDate,
    "numTelefono": testNumber,
    "correo": testMail,
    "hexadecimal": testHex,
    "direccionIP": testIP,
    "url": testUrl,
    "contraseña": testPass,
    "nif": testNif,
    "matricula": testMatricula
}

Array.from(inputs).forEach( input => input.addEventListener("blur" ,functions[input.id]));

function testDate (e) {
    console.log(e);
}

function testNumber (e) {
    console.log(e);
}
function testMail (e) {
    console.log(e);
}
function testHex (e) {
    console.log(e);
}
function testIP (e) {
    console.log(e);
}
function testUrl (e) {
    console.log(e);
}
function testPass (e) {
    console.log(e);
}
function testNif (e) {
    console.log(e);
}
function testMatricula (e) {
    console.log(e);
}