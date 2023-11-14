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

div.textContent = `${String(hora).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(segs).padStart(2, "0")}.${(milisec++).toFixed()}`;
document.body.append(div)

let crono = () => {
    id = setInterval( () => {

    if (segs == 60) {
        min++;
        segs = 0;
    }

    if (milisec == 9) {
        segs++;
        milisec = 0;
    }

    if (min == 60) {
        hora++;
        min = 0;
    }

    div.textContent = `${String(hora).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(segs).padStart(2, "0")}.${(milisec++).toFixed()}`;
    
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
    
    div.textContent = `${String(hora).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(segs).padStart(2, "0")}.${(milisec++).toFixed()}`;
})


// let interval = setInterval(updateTime, 45);
// let running = true;
// function updateTime () {
//     totalMils += 45;
//     let milis = (totalMils % 1000).toFixed(0).padStart(2, "0");
//     let secs = ((totalMils/1000) % 60).toFixed(0).padStart(2, "0");
//     let mins = ((totalMils/1000) / 60).toFixed(0).padStart(2, "0");

//     document.getElementById("mins").textContent = mins;
//     document.getElementById("secs").textContent = secs;
//     document.getElementById("mils").textContent = milis;

// }

// start.addEventListener("click", () => {
//  if (!running) {
//     interval = setInterval(updateTime, 45);
//     running = true;
 //   }

// })

// stops.addEventListener("click", () => {
//     clearInterval(interval)
//        running = false;
// }) 

// reset.addEventListener("click", () => {
//     totalMils = 0;
// })
