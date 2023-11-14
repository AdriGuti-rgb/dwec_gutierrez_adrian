let arr = [];
let button = document.getElementById("add-button");

button.addEventListener("click", () => {
    let input = document.getElementById("input-text");
    if (input.value.trim() != "") {
        arr.push(input.value);
        input.value = "";
    }
    
    renderList();

    arr = [];
});

function renderList () {
    for (let elemento of arr) {
        let li = document.createElement("li");
        li.textContent = elemento;
        let ul = document.querySelector("ul");
        ul.append(li);
    
        li = document.createElement("li");
    }
}