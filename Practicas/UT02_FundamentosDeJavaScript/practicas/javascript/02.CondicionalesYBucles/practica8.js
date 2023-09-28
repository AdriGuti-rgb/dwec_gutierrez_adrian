let year = Number(prompt("Introduce tu año de nacimiento"));


while (year < 1949 || year > 2010) {
    year = prompt("Has introducido una fecha incorrecta");
}

if (year >= 1949 && year <=1968) {
    confirm("Perteneces a la generacion: Baby Boomer");
} else if (year >= 1969 && year <= 1980) {
    confirm("Perteneces a la generacion: Generacion X");
} else if (year >= 1981 && year <= 1993) {
    confirm("Perteneces a la generacion: Generacion Millenial");
} else if (year >= 1994 && year <= 2010) {
    confirm("Perteneces a la generacion: Generacion Z")
} 