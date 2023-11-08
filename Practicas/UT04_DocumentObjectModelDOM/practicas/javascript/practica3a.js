let span = document.createElement("span");
let div = document.getElementById("numbers");




for (let k = 1; k < 31; k++) {
    // span.setAttribute("class", "number");
    // span.className = "number";
    span.classList.add("number");
    span.textContent = k;
    div.append(span);
    span = document.createElement("span");
}