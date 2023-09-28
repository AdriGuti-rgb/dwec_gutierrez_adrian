let radius = Number(prompt("¿Que medida tiene el radio?"));
let unidades = Number(prompt("¿Que unidades son?"));

confirm(`El perimetro del circulo de radio ${radius} es ${radius * 2 * Math.PI}${unidades}, y su área es ${Math.pow(radius, 2) * Math.PI}${unidades}^2`);