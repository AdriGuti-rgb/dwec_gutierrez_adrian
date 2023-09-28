let userUbication = prompt("Introduce el nombre de tu calle (Los Claveles, El Rosal, Las Hortensias, Las Margaritas, Teleno, Catoute, Peña Ubiña, Vizcodillo, Astorga, La Bañeza, Benavente)");
let line;

if (userUbication == "Los Claveles"
    || userUbication == "El Rosal" 
    || userUbication == "Las Hortensias"
    || userUbication == "Las Margaritas") {
        line = 1;
        confirm(`Tienes que tomar la Linea ${line} para ir desde la Calle ${userUbication} hasta el trabajo`);
    } else if (userUbication == "Teleno"
                || userUbication == "Catoute" 
                || userUbication == "Peña Ubiña"
                || userUbication == "Vizcodillo") {
                    line = 2;
                    confirm(`Tienes que tomar la Linea ${line} para ir desde la Calle ${userUbication} hasta el trabajo`);
                } else if (userUbication == "Astorga"
                            || userUbication == "La Bañeza" 
                            || userUbication == "Benavente") {
                                line = 3;
                                confirm(`Tienes que tomar la Linea ${line} para ir desde la Calle ${userUbication} hasta el trabajo`);
                } else {
                    alert("No existe esa calle.")                    
                }

