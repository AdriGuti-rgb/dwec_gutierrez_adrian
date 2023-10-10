let year = Number(prompt("Introduce tu año de nacimiento"));

let msg = year > 2010 ? "Fecha no valida" 
    : year > 1994 ? "Generacion Z" 
    : year > 1981 ? "Generacion Millenial"
    : year > 1969 ? "Generacion X"
    : year > 1949 ? "Baby Boomer" 
    : "Fecha no valida";