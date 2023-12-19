const data = [
    {
        comunidad: "Castilla y Leon",
        provincias: [
            {
                nombre: "Leon",
                localidades: [
                    "Leon",
                    "San Andres",
                    "Fojedo",
                    "Algadefe",
                    "Carrizo"
                ]
            },
            {
                nombre: "Zamora",
                localidades: [
                    "Zamora",
                    "Coreses",
                    "Benavente",
                    "Muelas del Pan",
                    "Peque"
                ]
            },
            {
                nombre: "Burgos",
                localidades: [
                    "Atapuerca",
                    "Arcos",
                    "Carrias",
                    "Villamayor de Treviño",
                    "Zael",
                    "Santo Domingo de Silos"
                ]
            },
            {
                nombre: "Palencia",
                localidades: [
                    "Legidos",
                    "Perales",
                    "Osornoillo",
                    "Pozo de Urama",
                    "Villovieco",
                    "Villalaco",
                    "Villarrabé"
                ]
            }
        ] 
    },
    {
        comunidad: "Pais Vasco",
        provincias: [
            {
                nombre: "Navarra",
                localidades: [
                    "Kripan",
                    "Okondo",
                    "Zuia",
                    "Samaniego"
                ]
            },
            {
                nombre: "Vizcaya",
                localidades: [
                    "Alonsotegi",
                    "Atxondo",
                    "Bilbao"
                ]
            },
            {
                nombre: "Guipuzkoa",
                localidades: [
                    "San Sebastian",
                    "Andoain",
                    "Pasaia",
                    "Lezo",
                    "Orio",
                    "Astigarraga"
                ]
            }
        ] 
    },
    {
        comunidad: "Madrid",
        provincias: [
            {
                nombre: "Madrid",
                localidades: [
                    "Vallecas",
                    "Pinto",
                    "Madrid"
                ]
            },
            {
                nombre: "Astro",
                localidades: [
                    "Madrid",
                    "Pinto",
                    "Vallecas"
                ]
            }
        ] 
    }
]

let selectComunidad = document.getElementById("comunidad");
let selectProvincia = document.getElementById("provincia");
let selectLocalidad = document.getElementById("localidad");
let primerOpt = document.getElementById("primerOpt");
let segundoOpt = document.getElementById("segundoOpt");
let tercerOpt = document.getElementById("tercerOpt");

data.forEach( ({comunidad}, index) => {
    let selected = false;
    if (index == 0) {
        selected = true;
    }
    let option = new Option(comunidad, comunidad, false, selected);
    selectComunidad.append(option)
});

function checkComunidad (e) {
    
    if (document.querySelectorAll(".optProvincia") != null) document.querySelectorAll(".optProvincia").forEach( item => item.remove());

    let com = data.find( ({comunidad}) => comunidad == e.target.value);
    let provincias = com.provincias.map( ({nombre}) => nombre);
    primerOpt.disabled = true;
    provincias.forEach( (item, index) => {
        let selected = false;
        if (index == 0) selected = true;
        let option = new Option(item, item, false, selected);
        option.classList.add("optProvincia");
        selectProvincia.append(option)
    });
}


function checkProvincia (e) {
    
    let provincia = "";
    if (document.querySelectorAll(".optLocalidad") != null) document.querySelectorAll(".optLocalidad").forEach( item => item.remove());

    data.forEach( ({provincias}) => provincia = provincias.find( item => item.nombre == e.target.value));
    provincia["localidades"].map( item => item)
            .forEach( (item, index) => {
                let selected = false;
                if (index == 0) selected = true;
                let option = new Option(item, item, false, selected);
                option.classList.add("optLocalidad");
                selectLocalidad.append(option)
            });
    segundoOpt.disabled = true;
    tercerOpt.disabled = true;

}


selectComunidad.addEventListener("change", checkComunidad);
selectProvincia.addEventListener("change", checkProvincia);
// const data2 = {
//     "Castilla y Leon": {
//         "Leon": ["Leon", "Fojedo", "La Bañeza"],
//         "Zamora": ["Zamoa", "Coreses"]
//     },
//     "Asturias": {
//         "Asturias": ["Oviedo", "Gijon", "Avilés"]
//     }
// }

// for (let prop in data2["Castilla y Leon"]) {
//     console.log(prop);
// }