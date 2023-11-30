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
    
<<<<<<< HEAD
    data.forEach( ({text, selected}, index) => {
        const divItem = document.createElement("div");
        if (divItem != null) {
            // divItem.dataset.id = index;
            divItem.textContent = text;
            divItem.classList.add("item");
            divItem.addEventListener("click", handlerColorClick);
            divItem.onmousedown = () => false;
=======
    data.forEach( ({text, selected}) => {
        const divItem = document.createElement("div");
        if (divItem != null) {
            
            divItem.textContent = text;
            divItem.classList.add("item");
            divItem.addEventListener("click", handlerColorClick);
>>>>>>> 877f9eb44ab9e9ad0dd394a2e4f12ed3b109db3f
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
<<<<<<< HEAD
    eSelected.selected = !eSelected.selected;

    // let itemId = e.target.dataset.id;
    // if (data[itemId].selected) {
    //     data[itemId].selected = false;
    // } else {
    //     data.forEach( (item) => item.selected = false);
    //     // data.map( (text) => {
    //     //     return {
    //     //         text,
    //     //         selected: false;
    //     //     }
    //     // });
    //     data[itemId].selected = true;
    // }
=======
     eSelected.selected = !eSelected.selected;

>>>>>>> 877f9eb44ab9e9ad0dd394a2e4f12ed3b109db3f
    renderList();
}
