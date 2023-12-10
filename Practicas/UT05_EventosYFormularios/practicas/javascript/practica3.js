const board = document.getElementById("board");

"0123456789".split("").forEach( (row, iRow) => {
    const divRow = document.createElement("div");
    divRow.classList.add("row");
    board.onmousedown = () => false;
    "0123456789".split("").forEach( (column, iColumn) => {
        const spanColumn = document.createElement("span");
        spanColumn.classList.add("cell");
        spanColumn.addEventListener("click", handlerColorClick)
        spanColumn.addEventListener("auxclick", handlerBannedClick)
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
    renderItem(e.target.id);
}

function handlerBannedClick (e) {
    e.target.classList.add("banned");
    renderItem(e.target.id);
}

function renderItem (idItem) {
    
    let div = document.getElementById("container");
    if (div != null) {
        div.remove();
    }

    let divItem = document.createElement("div");

    divItem.textContent = "";
    // divItem.id = "container";
    divItem.textContent = `Has pulsado en la casilla número: ${idItem}`;
    document.body.append(divItem);

}