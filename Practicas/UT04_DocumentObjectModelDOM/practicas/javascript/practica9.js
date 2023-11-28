const board = document.getElementById("board");

board.addEventListener("click", e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    console.log(e.target.closest(".cell")); // Selectores padres mas cercanos
    console.log(e.target.closest("span"));
    console.log(e.target.closest(".row"));
    console.log(`Has pulsado la casilla ${e.target.id}`);
})

board.addEventListener("mouseenter", e => {
    console.log(`Entras en ${e.currentTarget}`);
})

board.addEventListener("mouseleave", e => {
    console.log(`Sales en ${e.currentTarget}`);
})

board.onmousedown = () => false;

board.oncopy = () => alert("No se puede copiar");

"76543210".split("").forEach( (row, iRow) => {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    "ABCDEFGH".split("").forEach( (column, iColumn) => {
        const spanColumn = document.createElement("span");
        spanColumn.classList.add("cell");
        spanColumn.classList.add( (iRow + iColumn) % 2 == 0 ? "white" : "black")
        spanColumn.id = column + row;
        divRow.append(spanColumn);
        spanColumn.textContent = column + row;
    });
    board.append(divRow);
})