let text = "";
let details = document.getElementById("movie-detail");

function renderFilms() {
    let list = document.getElementById('movies-list');
    details.innerHTML = "";
    list.innerHTML = "";
    
    data.filter( ({title}) => title.toLowerCase().includes(text.toLowerCase()))
        .forEach( ({title, popularity, vote_average, overview, backdrop_path, genre_ids}) => { 
            let icons = "";
            genre_ids.forEach ( item => {
                icons += `<img src="../icons/${genres[item]}.png" alt="${genres[item]}" >`;
            })
            list.innerHTML += `
            <div class="movie">
                <div class="title">${title}</div>
                <div class="popularity">${popularity}</div>
                <div class="vote_average">${vote_average.toFixed(3)}</div>
                <div class="icons"> 
                    ${icons}
                </div>
            </div>
            `;    
        
        // details.innerHTML += `<img src="../images/backdrops/${backdrop_path}" alt="${title}">
        //         <div class="title">${title}</div>
        //         <div class="overview">
        //             <p>
        //                 ${overview}
        //             </p>
        //         </div> `;
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
    // let text = e.target.textContent;
    // let total = data.find( ({title, popularity, vote_average}) => text == title || text == popularity || text == vote_average );
    // let aCambiar = document.querySelectorAll("#movie-detail div.title");
    // aCambiar.forEach( (item) => {
    //     if (item.textContent == total.title) {
    //         console.log(item)
    //         let hidden = item.parentNode.parentNode.parentNode;
    //         hidden.classList.remove("hidden")
    //     }
    // });
}

function handleFilterClick(e) {
    text = document.getElementById("filter").value.trim();
    renderFilms();
}

function handleSorTitletClick (e) {
    data.sort( (a, b) => {
        return a.title < b.title ? -1 : 1;
    })
    renderFilms();
}

function handleSorPopClick (e) {
    data.sort( (a, b) => {
        return a.title < b.title ? -1 : 1;
    })
    renderFilms();
}

function handleSortVoteClick (e) {
    data.sort( (a, b) => {
        return a.title < b.title ? -1 : 1;
    })
    renderFilms();
}

document.getElementById("apply").addEventListener("click", handleFilterClick)

document.getElementById("sort_title").addEventListener("click", handleSorTitletClick)

document.getElementById("sort_pop").addEventListener("click", handleSorPopClick)

document.getElementById("sort_vote").addEventListener("click", handleSortVoteClick)

document
    .getElementById("close-modal")
    .addEventListener("click", () => {
        document.querySelector("body > div").classList.add("hidden")
    });

    renderFilms();