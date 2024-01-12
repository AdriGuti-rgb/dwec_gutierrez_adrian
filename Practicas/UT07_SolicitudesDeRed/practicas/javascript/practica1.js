async function getData() {
    let tabla = document.getElementById("tabla");

    fetch("https://swapi.dev/api/planets")
        .then( response => response.json())
        .then( data => data.results.forEach(element => {
            tabla.innerHTML += `<tr>
                <td>${element.name}</td>
                <td>${element.diameter}</td>
                <td>${element.climate}</td>
                <td>${element.population}</td>
            </tr>`;
    }));
}

getData();