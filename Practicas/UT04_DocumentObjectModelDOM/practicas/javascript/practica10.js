let milisec = 0;
let segs = 0;
let min = 0;
let hora = 0;
let div = document.createElement("div");
div.classList.add("medio")
let start = document.getElementById("start");
let stops = document.getElementById("stop");
let reset = document.getElementById("reset");
let id;

let crono = () => {
    id = setInterval( () => {

    if (segs == 59) {
        min++;
        segs = 1;
    }

    if (milisec == 10) {
        segs++;
        milisec = 0;
    }

    if (min == 59) {
        hora++;
        min = 1;
    }

    div.textContent = `${hora}:${min}:${segs}:${(milisec++).toFixed()}`;
    document.body.append(div)
    }, 100
)}


start.addEventListener("click", () => {
    crono();
})

stops.addEventListener("click", () => {
    clearInterval(id)
}) 

reset.addEventListener("click", () => {
    milisec = 0;
    segs = 0;
    min = 0;
    hora = 0;
    
})