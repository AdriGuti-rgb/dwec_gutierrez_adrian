let divBoard = document.getElementById("board");
let puntuation = document.getElementById("puntuation")
let info = document.getElementById("info");
let divMoving = document.createElement("div");
let counter = 1;

divBoard.append(divMoving);

divMoving.addEventListener("click", handleResizeClick);
divMoving.style.width = `100px`;
divMoving.style.height = `100px`;
divMoving.style.backgroundColor = "#5DC1B9";
divMoving.style.borderRadius = "15px";
divMoving.style.position = "absolute";
divMoving.style.top = "42%";
divMoving.style.left = "44%";



function handleResizeClick (e) {

    if (info != null) {
        info.remove();
    }

    let widthPx = Math.random() * 500;
    let heightPx = Math.random() * 500;
    let topPx = (Math.random() * 500) - 45;
    let leftPx = (Math.random() * 500) - 30;

    if (widthPx < 15) {
        widthPx = 16;
    }

    if (heightPx < 15) {
        heightPx = 16;
    }
    puntuation.textContent = `Puntuación: ${counter++}`;
    e.target.style.width = `${widthPx}px`;
    e.target.style.height = `${heightPx}px`;
    e.target.style.top = `${topPx}px`;
    e.target.style.left = `${leftPx}px`;
}