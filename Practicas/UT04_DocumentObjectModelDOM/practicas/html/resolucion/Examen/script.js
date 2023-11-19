let text = "";
let currentPage = 0;
let itemsPerPage = 5;
let totalPages = Math.ceil((data.length / itemsPerPage) - 1);

renderCharacters();

function renderCharacters() {
    let list = document.getElementById('people-list-characters');
    list.innerHTML = "";
    data.filter( ({name}) => name.toLowerCase().includes(text.toLowerCase()))
        .filter( (item, index) => Math.trunc(index / itemsPerPage) == currentPage )
        // 0 -> 0 1 2 3 4 % 5 = 0 0.2 0.4 0.6 0.8
        // 1 -> 5 6 7 8 9 % 5 = 1 1.2 1.4 1.6 1.8
        .forEach( ({name:charName, birth_year, homeworld}) => { // data es el array de data.js, que al estar los dos se comparten las cositas
        list.innerHTML += `
        <div class="character">
            <div class="character-name">${charName}</div>
            <div class="character-birth-year">${birth_year ? birth_year : "-"}</div> 
            <div class="homeworld">${homeworld.name ? homeworld.name : "-"}</div> 
            <div class="btn btn-char">Detalle</div> 
        </div>
        `
        // Si es null o undefined el casting a if lo hace a false
    });
    cargarBotones();
    pages();
}

function cargarBotones(){
    let details = document.querySelectorAll(".btn-char");
    details.forEach ( item => {
        item.addEventListener("click", handleDetailClick)
    });
}

function handleFilterClick (e) {
    text = document.getElementById("filter-text").value.trim();
    renderCharacters();
}

function handleDetailClick (e) {
    let nameNew = e.target.parentNode.children[0].textContent;
    // let total = data.find( ({name}) => {
    //     return nameNew == name;
    // });

    let total = data.find( ({name}) => nameNew == name );

    document.getElementById("detail-name").textContent = total.name;
    document.getElementById("height").textContent = total.height;
    document.getElementById("mass").textContent = total.mass;
    document.getElementById("eye-color").textContent = total.eye_color ? total.eye_color : "-";
    document.getElementById("hair-color").textContent = total.hair_color ? total.hair_color : "-";
    document.getElementById("birth-year").textContent = total.birth_year ? total.birth_year : "-";
    document.getElementById("homeworld").textContent = total.homeworld.name ? total.homeworld.name : "-";
    document.getElementById("population").textContent = total.homeworld.population ? total.homeworld.population : "-";;

    renderCharacters();
}

function handleFistClick (e) {
    currentPage = 0;
    renderCharacters();
}

function handleLastClick (e) {
    currentPage = totalPages;
    renderCharacters();
}

function handlePrevClick (e) {
    if (currentPage > 0) {
        currentPage--;
    }
    renderCharacters();
}

function handleNextClick (e) {
    if (currentPage < totalPages) {
        currentPage++;
    }
    renderCharacters();
}

function pages () {
    let div = document.getElementById("pages");

    if (!document.querySelector(".first")) {
        let spanFirst = document.createElement("span");
        let spanPrev = document.createElement("span");
        let spanPages = document.createElement("span");
        let spanNext = document.createElement("span");
        let spanLast = document.createElement("span");
    
        spanFirst.classList.add("first");
        spanPrev.classList.add("prev");
        spanPages.classList.add("none");
        spanNext.classList.add("next");
        spanLast.classList.add("last");
    
        spanFirst.textContent = "Primera";
        spanPrev.textContent = "Anterior";
        spanPages.textContent = `Página ${currentPage + 1} de ${totalPages + 1}`;
        spanNext.textContent = "Siguiente";
        spanLast.textContent = "Última";
    
        div.append(spanFirst);
        div.append(spanPrev);
        div.append(spanPages);
        div.append(spanNext);
        div.append(spanLast);
    } else {
        document.querySelector(".none").textContent = `Página ${currentPage + 1} de ${totalPages + 1}`;
    }
}

document
    .querySelector(".btn-filter")
    .addEventListener("click", handleFilterClick);

document
    .querySelector(".first")
    .addEventListener("click", handleFistClick);

document
    .querySelector(".prev")
    .addEventListener("click", handlePrevClick);

document
    .querySelector(".next")
    .addEventListener("click", handleNextClick);


document
    .querySelector(".last")
    .addEventListener("click", handleLastClick);


    // function cargarBotones() {
    //     let detalleBoton = document.querySelectorAll(".character div:last-child");
    //     detalleBoton.forEach(detalle =>{
    //         detalle.addEventListener('click', boton=>{
    //             let nombreCaracter = boton.currentTarget.getAttribute("data-nombrecaracter");
    //             aniadirPropiedades(nombreCaracter);
    //         });
    //     });
    // }
    
    // function aniadirPropiedades(nombreCaracter) {
    //     document.getElementById("detail-name").textContent = nombreCaracter;
    
    //     let personaje = data.find(({name}) => name == nombreCaracter);
        
    //     document.getElementById("height").textContent = `${personaje.height} cm.`;
    //     document.getElementById("mass").textContent = `${personaje.mass} kg.`;
    //     let colorPelo = personaje.hair_color ? personaje.hair_color : '-';
        
    //     document.getElementById("hair-color").textContent = (colorPelo !== '-') ? translate_colors[colorPelo].name : colorPelo;                                                   
    //                                                         // (colorPelo == "blond") ? 
    //                                                         // "Rubio" : (colorPelo == "black") ?
    //                                                         // "Moreno" : (colorPelo == "brown") ?
    //                                                         // "Castaño" : (colorPelo == null || colorPelo== undefined) ?
    //                                                         // "-" : "Ninguno";
    
    //     document.getElementById("hair-color-filled").style.backgroundColor = (colorPelo !== '-') ? translate_colors[colorPelo].code : 'black';
    // // (textoPelo == "Rubio") ?
    // // "yellow" : (textoPelo == "Moreno") ?
    // // "black" : (textoPelo == "Castaño") ?
    // // "#5c330a" : "grey";
    //     let colorOjos = personaje.eye_color ? personaje.eye_color : '-';
    //     document.getElementById("eye-color").textContent = (colorOjos !== '-') ? translate_colors[colorOjos].name : colorOjos;
    //     document.getElementById("eye-color-filled").style.backgroundColor = (colorOjos !== '-') ? translate_colors[colorOjos].code : "grey";
    //     document.getElementById("birth-year").textContent = personaje.birth_year ? personaje.birth_year : "-";
    //     document.getElementById("homeworld").textContent = personaje.homeworld.name ? personaje.homeworld.name : '-';
    //     document.getElementById("population").textContent = personaje.homeworld.population ? personaje.homeworld.population : '-';
    // }

