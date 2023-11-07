let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let originalDiv = document.getElementById("months");
let div = document.createElement("div");
let divNumber = document.createElement("div");
let divName = document.createElement("div");



for (let k = 0; k < months.length; k++) {

    div.setAttribute("class", "month");
    divNumber.setAttribute("class", "month-number");
    divName.setAttribute("class", "month-name");
    
    divNumber.textContent = k;
    divName.textContent = months[k];

    originalDiv.append(div);
    div.append(divNumber);
    div.append(divName);

    div = document.createElement("div");
    divNumber = document.createElement("div");
    divName = document.createElement("div");
}