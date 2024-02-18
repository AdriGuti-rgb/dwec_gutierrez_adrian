document.forms.form.elements.send.addEventListener("click", changeDates)

function changeDates (e) {
    e.preventDefault()
    let data = document.getElementById("test").value

    let regex = /(\d{2})\/(\d{2})\/(\d{4})/g
    
    let change = (match, dia, mes, anio) => {
        let  fecha = new Date(`${anio}-${mes}-${dia}`)
        if (isNaN(fecha.getTime())) return match

        let fechaFormateada = `${dia} del ${mes} de ${anio}`
        return fechaFormateada;
    };
    
    let textoModificado = data.replace(regex, change)
    document.getElementById("auxiliar").textContent = textoModificado
    document.getElementById("auxiliar").style.backgroundColor = "lightblue"
}