let arr = [];
let button = document.getElementById("add-button");


button.addEventListener("click", () => {
    let input = document.getElementById("input-text");
    if (input.value.trim() != "") {
        arr.push(input.value);
        input.value = "".trim();
    }
    
    renderList();

});

setInterval( () => {
    if (document.querySelectorAll("span") != null) {
        let deleter = document.querySelectorAll("span");
        
        for (let spanDelete of deleter) {
            spanDelete.addEventListener ("click", handleClick);
        }

    }
}, 1000);


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
    spans = document.querySelectorAll("span");

    for (let span of spans) {
        if (span.dataset.id == e.target.dataset.id) {
            span.parentNode.remove();
        }
    }

}