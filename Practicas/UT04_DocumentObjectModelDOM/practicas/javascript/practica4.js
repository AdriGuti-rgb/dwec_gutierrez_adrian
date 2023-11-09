let ps = document.getElementsByTagName('p');
let as = document.querySelectorAll("a[href='https://www.google.es']");

let aSecond = document.querySelector("p:nth-of-type(3)>a");
let wordsP = document.querySelector("p:nth-of-type(2)");

let span1 = document.getElementById("parrafos"); 
let span2 = document.getElementById("segundo-enlace");
let span3 = document.getElementById("links-google-es");
let span4 = document.getElementById("palabras-segundo-parrafo");

let count = wordsP.textContent.split(" ").length;
// let contador = 1;

// for(let char of count) {
//     if (char === " ") {
//         contador++;
//     }
// }

span1.textContent = ps.length;
span2.textContent = aSecond.getAttribute("href");
span3.textContent = as.length;
span4.textContent = count;


// let links = document.getElementsByTagName("a");

// num_google = Array.from(links)
//     .map(item => item.href)
//     .reduce( (acum, enlace) => {
//         return enlace = "https://www.google.es" ? acum + 1 : acum;
//     } , 0);