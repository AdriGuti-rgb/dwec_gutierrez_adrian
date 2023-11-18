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
    let ul = document.querySelector("ul");

    arr.forEach( item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    });
}