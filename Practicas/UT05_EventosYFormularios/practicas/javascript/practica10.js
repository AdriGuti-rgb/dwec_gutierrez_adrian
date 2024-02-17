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

document.forms.form.elements.send.addEventListener("click", e => e.preventDefault())

Array.from(inputs).forEach( input => input.addEventListener("blur" ,functions[input.id]));

function testDate (e) {
    let date = e.target.value
    let regExp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/

    if (date.match(regExp)) e.target.style.backgroundColor = "green"
        else e.target.style.backgroundColor = "red"
}

function testNumber (e) {
    let tel = e.target.value
    let regExp = /^\d{9}$/
                 
    if (tel.match(regExp)) e.target.style.backgroundColor = "green"
    else e.target.style.backgroundColor = "red"
}

function testMail (e) {
    let mail = e.target.value
    let regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (mail.match(regExp)) e.target.style.backgroundColor = "green"
    else e.target.style.backgroundColor = "red"

}
function testHex (e) {
    let hex = e.target.value
    let regExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

    if (hex.match(regExp)) e.target.style.backgroundColor = "green"
    else e.target.style.backgroundColor = "red"

}
function testIP (e) {
    let ip = e.target.value
    let regExp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

    if (ip.match(regExp)) e.target.style.backgroundColor = "green"
    else e.target.style.backgroundColor = "red"
}

function testUrl (e) {
    let url = e.target.value
    let regExp = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}(\/\S*)?$/
    
    if (url.match(regExp)) e.target.style.backgroundColor = "green"
        else e.target.style.backgroundColor = "red"
}

function testPass (e) {
    let pass = e.target.value
    let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (pass.match(regExp)) e.target.style.backgroundColor = "green"
    else e.target.style.backgroundColor = "red"
}

function testNif (e) {
    let nif = e.target.value
    let regExp = /^\d{8}[a-zA-Z]$/
    
    if (nif.match(regExp)) e.target.style.backgroundColor = "green"
        else e.target.style.backgroundColor = "red"
}
function testMatricula (e) {
    let matricula = e.target.value
    let regExp = /^[0-9]{4}[a-zA-Z]{3}$/

    if (matricula.match(regExp)) e.target.style.backgroundColor = "green"
    else e.target.style.backgroundColor = "red"
}