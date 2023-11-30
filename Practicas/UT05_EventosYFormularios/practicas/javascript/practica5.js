let interval = setInterval(updateTime, 45);
let running = true;
function updateTime () {
    totalMils += 45;
    let milis = (totalMils % 1000).toFixed(0).padStart(2, "0");
    let secs = ((totalMils/1000) % 60).toFixed(0).padStart(2, "0");

    document.getElementById("time").textContent = `${secs}.${milis}`;

}

start.addEventListener("click", () => {
 if (!running) {
    interval = setInterval(updateTime, 45);
    running = true;
   }

})

stops.addEventListener("click", () => {
    clearInterval(interval)
       running = false;
}) 

reset.addEventListener("click", () => {
    totalMils = 0;
})

let div = document.getElementById("time");
