let tabla = document.getElementById("tabla");
let paginaActual = 1;
let totalPaginas;

function getData() {
    if (paginaActual == 1) {
        tabla.innerHTML = `
                    <tr>
                        <th>Nombre</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Population</th>
                    </tr>`;
    }

    if (paginaActual < 7) {
        fetch(`https://swapi.dev/api/planets?page=${paginaActual}`)
        .then( response => response.json())
        .then( data => { 
            console.log(tabla);

            data.results.forEach(element => {
                tabla.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.diameter}</td>
                    <td>${element.climate}</td>
                    <td>${element.population}</td>
                </tr>`;
            })
        });
        paginaActual++
        getData()   
    }
}

getData();