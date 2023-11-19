let arr = [];
let button = document.getElementById("add-button");


button.addEventListener("click", () => {
    let input = document.getElementById("input-text");
    if (input.value.trim() != "") {
        arr.push(input.value);
        input.value = "".trim();
    }
    
    renderList();

    arr = [];

});

// setInterval( () => {
//     if (document.querySelectorAll("span") != null) {
//         let deleter = document.querySelectorAll("span");
        
//         for (let spanDelete of deleter) {
//             spanDelete.addEventListener ("click", handleClick);
//         }

//     }
// }, 1000);


function renderList () {
    
    let ul = document.querySelector("ul");

    arr.forEach( item => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let id = Math.trunc(Math.random() * 36**4).toString(36).padStart(4, "0");
        
        li.textContent = item;
        li.classList.add("todo");
        li.id = id;
        span.classList.add("btn");
        span.textContent = "Borrar";
        span.dataset.id = id;
        span.addEventListener ("click", handleClick);
        
        ul.append(li);
        li.append(span);
    });
}

function handleClick (e) {
    spans = document.querySelectorAll("span");

    spans.forEach( span => {
        if (span.dataset.id == e.target.dataset.id) {
            span.parentNode.remove();
        }
    });
}