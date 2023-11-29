let data = [
    {
        text: "Primero",
        selected: false
    },
    {
        text: "Segundo",
        selected: false
    },
    {
        text: "Tercero",
        selected: false
    },
    {
        text: "Cuarto",
        selected: false
    },
    {
        text: "Quinto",
        selected: false
    },
    {
        text: "Sexto",
        selected: false
    },
    {
        text: "Septimo",
        selected: false
    },
    {
        text: "Octavo",
        selected: false
    },
    {
        text: "Noveno",
        selected: false
    }
]

function renderList() {
    
    const divList = document.createElement("div");
    divList.id = "list";
    
    data.forEach( ({text, selected}) => {
        const divItem = document.createElement("div");
        if (divItem != null) {
            
            divItem.textContent = text;
            divItem.classList.add("item");
            divItem.addEventListener("click", handlerColorClick);
            if (selected) {
                divItem.classList.add("selected"); 
            } else {
                divItem.classList.remove("selected");
            }
            divList.append(divItem);
    
        }
    });

    document.body.append(divList)
}

renderList();

function handlerColorClick (e) {
    if (!e.ctrlKey) {
        data.forEach( (item) => item.selected = false);
    }
    let eSelected = data.find(({text}) => text == e.target.textContent);
     eSelected.selected = !eSelected.selected;

    renderList();
}
