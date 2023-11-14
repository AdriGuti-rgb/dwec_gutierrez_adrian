let arr = [];
let button = document.getElementById("add-button");


button.addEventListener("click", () => {
    let input = document.getElementById("input-text");
    arr.push(input.value);
    input.value = "";

    renderList();

    arr = [];
});

if (arr.length > 0) {
    console.log("hola");
    let deleter = document.querySelector("span");
    deleter.addEventListener ("click", handleClick);
}

function renderList () {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let ul = document.querySelector("ul");

    for (let elemento of arr) {
        let id = (Math.random() * 10).toFixed(0);
        for (let k = 0; k < 3; k++) {
            id = id + (Math.random() * 10).toFixed(0);
        }

        li.textContent = elemento;
        li.classList.add("todo")
        li.id = id;
        span.classList.add("btn");
        span.textContent = "Borrar";
        span.dataset.id = id;
        
        ul.append(li);
        li.append(span)

        li = document.createElement("li");
        span = document.createElement("span");
    }
}

function handleClick (e) {
    console.log(e.currenTarget.dataset.id);
}