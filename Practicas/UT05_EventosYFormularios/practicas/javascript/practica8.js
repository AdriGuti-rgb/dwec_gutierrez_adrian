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
    data.forEach( ({provincias}) => { 
            let exists = provincias.find( ({nombre})=> nombre == e.target.value);
            if (exists) provincia = exists;
        });
    provincia["localidades"].forEach( (item, index) => {
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


// Victor
// const data = {
//     'Castilla y León': {
//         'León': [ 'León', 'San Andrés', 'La Bañeza', 'Ponferrada', 'Astorga' ],
//         'Zamora': [ 'Zamora', 'Benavente' ],
//         'Palencia': ['Palencia', 'Cervera de Pisuerga']
//     },
//     'Asturias': {
//         'Asturias': [ 'Oviedo', 'Gijón', 'Avilés' ]
//     },
//     'Galicia': {
//         'La Coruña': ['La Coruña', 'Sada'],
//         'Lugo': ['Lugo']
//     }
// }

// // Referenciamos los elementos del DOM
// const selectCom = document.getElementById('com');
// const selectProv = document.getElementById('prov');
// const selectLoc = document.getElementById('loc');

// // Cargamos el select de las comunidades
// selectCom.append(new Option(''));
// for( const com in data ) {
//     selectCom.append(new Option(com));
// }

// // Preparamos los listener
// selectCom.addEventListener( 'change', e => {
//     if ( e.target.value ) {
//         selectProv.removeAttribute('disabled');
//     } else {
//         selectProv.disabled='disabled';
//         selectProv.value='';
//     }
//     selectProv.innerHTML='';
//     selectLoc.innerHTML='';
//     selectProv.append(new Option(''));
//     for (const prov in data[e.target.value]) {
//         selectProv.append(new Option(prov));
//     }
// })

// selectProv.addEventListener( 'change', e => {
//     if ( e.target.value ) {
//         selectLoc.removeAttribute('disabled');
//     } else {
//         selectLoc.value='';
//         selectLoc.disabled='disabled';
//     }
//     selectLoc.innerHTML='';
//     selectLoc.append( new Option('') );

//     data[selectCom.value][selectProv.value].forEach( loc => {
//         selectLoc.append( new Option(loc) );
//     })
// })


