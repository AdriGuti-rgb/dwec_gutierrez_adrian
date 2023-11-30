const board = document.getElementById("board");

"0123456789".split("").forEach( (row, iRow) => {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    board.onmousedown = () => false;
    "0123456789".split("").forEach( (column, iColumn) => {
        const spanColumn = document.createElement("span");
        spanColumn.classList.add("cell");
        spanColumn.addEventListener("click", handlerColorClick)
        spanColumn.id = column + row;
        divRow.append(spanColumn);
        spanColumn.textContent = column + row;
    });
    board.append(divRow);
})

function handlerColorClick (e) {
    if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
    } else {
        e.target.classList.add("selected");
    }
}