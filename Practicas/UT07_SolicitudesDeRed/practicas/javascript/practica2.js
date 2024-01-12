let tabla = document.getElementById("tabla");
let paginaActual = 1;
let totalPaginas;
let contenedor = document.getElementById("contenedor");
let oculto = document.getElementById("oculto");

function getData() {

    oculto.classList.add("hidden");
    contenedor.classList.remove("hidden");

    fetch(`https://swapi.dev/api/planets?page=${paginaActual}`)
        .then( response => response.json())
        .then( data => { 
            
            totalPaginas = data.count / data.results.length;
            tabla.innerHTML = `
                <tr>
                    <th>Nombre</th>
                    <th>Diameter</th>
                    <th>Climate</th>
                    <th>Population</th>
                </tr>`;

            document.getElementById("numeroPaginas").textContent = `Página ${paginaActual} de ${totalPaginas++}`;

            data.results.forEach(element => {
                tabla.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.diameter}</td>
                    <td>${element.climate}</td>
                    <td>${element.population}</td>
                </tr>`;
            })

            oculto.classList.remove("hidden");
            contenedor.classList.add("hidden");
        });
}

getData();

document.getElementById("siguiente").addEventListener( "click", () => {
    if (paginaActual < 6) paginaActual++;
    getData();
})

document.getElementById("anterior").addEventListener( "click", () => {
    if (paginaActual > 1) paginaActual--;
    getData();
})

