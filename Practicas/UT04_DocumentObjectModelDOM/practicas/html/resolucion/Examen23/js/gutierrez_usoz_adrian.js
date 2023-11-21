let text = "";
let details = document.getElementById("movie-detail");

renderFilms();

function renderFilms() {
    let list = document.getElementById('movies-list');
    details.innerHTML = "";
    list.innerHTML = "";
    data.filter( ({title}) => title.toLowerCase().includes(text.toLowerCase()))
        .forEach( ({title, popularity, vote_average, overview, backdrop_path, genre_ids}) => { 
        list.innerHTML += `
            <div class="movie">
                <div class="title">${title}</div>
                <div class="popularity">${popularity}</div>
                <div class="vote_average">${vote_average.toFixed(3)}</div>
                <div class="icons">`;

            
        genre_ids.forEach ( item => {
            list.innerHTML += `<img src="../icons/${genres[item]}.png" alt="${genres[item]}" >`;
        })

        list.innerHTML += `</div>
                </div>
                `;    
        
        details.innerHTML += `<img src="../images/backdrops/${backdrop_path}" alt="${title}">
                <div class="title">${title}</div>
                <div class="overview">
                    <p>
                        ${overview}
                    </p>
                </div> `;
    });
    
    buttonsListener();
}



function buttonsListener(){
    let details = document.querySelectorAll(".movie");
    details.forEach ( item => {
        item.addEventListener("click", handleDetailClick)
    });
}

function handleDetailClick(e) {
    let text = e.target.textContent;
    let total = data.find( ({title, popularity, vote_average}) => text == title || text == popularity || text == vote_average );
    let aCambiar = document.querySelectorAll("#movie-detail div.title");
    aCambiar.forEach( (item) => {
        if (item.textContent == total.title) {
            console.log(item)
            let hidden = item.parentNode.parentNode.parentNode;
            hidden.classList.remove("hidden")
        }
    });
}

function handleFilterClick(e) {
    text = document.getElementById("filter").value.trim();

        renderFilms();
    
}

function handleSortClick (e) {
    let population = document.querySelectorAll(".movie .popularity")
    let arr = Array.from(population);
    if (e.target.id == "sort_title") {
        data.sort();
        renderFilms();
    }



}

document.getElementById("apply").addEventListener("click", handleFilterClick)

document.getElementById("sort_title").addEventListener("click", handleSortClick)

document.getElementById("sort_pop").addEventListener("click", handleSortClick)

document.getElementById("sort_vote").addEventListener("click", handleSortClick)

document
    .getElementById("close-modal")
    .addEventListener("click", () => {
        document.querySelector("body > div").classList.add("hidden")
    });