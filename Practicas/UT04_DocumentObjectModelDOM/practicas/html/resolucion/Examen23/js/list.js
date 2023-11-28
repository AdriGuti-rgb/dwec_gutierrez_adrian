const moviesList = data.map( (({title, id, genre_ids, popularity, vote_average, overview, backdrop_path}) => {
    return {title, id, genre_ids, popularity, vote_average, overview, backdrop_path};
}));

let filter = '';

const divMoviesList = document.getElementById('movies-list');

document
    .getElementById('apply')
    .addEventListener( 'click', e => {
        filter = document.getElementById('filter').value.trim();
        renderList();
    });

document
    .getElementById('sort_title')
    .addEventListener( 'click', e => {
        e.preventDefault();
        moviesList.sort( (a, b) => a.title>b.title ? 1 : -1 );
        renderList();
    });

document
    .getElementById('sort_pop')
    .addEventListener( 'click', e => {
        e.preventDefault();
        moviesList.sort( (a, b) => a.popularity>b.popularity ? -1 : +1 );
        renderList();
    });

document
    .getElementById('sort_vote')
    .addEventListener( 'click', e => {
        e.preventDefault();
        moviesList.sort( (a, b) => a.vote_average>b.vote_average ? -1 : +1 );
        renderList();
    });

document
    .getElementById('close-modal')
    .addEventListener( 'click', () => {
        document.querySelector('.modal').classList.add('hidden');
    })

function renderList() {
    divMoviesList.innerHTML = '';
    moviesList
        .filter( movie => movie.title.toLowerCase().includes(filter.toLowerCase()) )
        .forEach( movie => {
            let divMovie = document.createElement('div');
            divMovie.classList.add('movie');
            divMovie.dataset.id = movie.id;
            divMovie.addEventListener( 'click', e => showMovieDetails(e.currentTarget.dataset.id) );

            // Primero generamos los iconos
            let divIcons = '<div class="icons">';
            movie
                .genre_ids
                .forEach( genreId => {
                        divIcons += `<img src="../icons/${ genres[genreId] }.png" alt="${ genres[genreId] }">`
                })
            divIcons += '</div>'

            // Añadimos los datos de cada una de las películas
            divMovie.innerHTML = `
                <div class="title">${movie.title}</div>
                <div class="popularity">${movie.popularity}</div>
                <div class="vote_average">${ parseFloat(movie.vote_average).toFixed(3) }</div>
                ${ divIcons }
            `;
            divMoviesList.append(divMovie);
        })
}

function showMovieDetails( id ) {
    const movie = moviesList.find( ({id:movieId}) => movieId==id );
    document.getElementById('movie-detail').innerHTML = `
        <img src="../images/backdrops/${ movie.backdrop_path }" >
        <div class="title">${ movie.title }</div>
        <div class="overview"><p>${ movie.overview }</p></div>
    `;
    document.querySelector('.modal').classList.remove('hidden');
}

renderList();