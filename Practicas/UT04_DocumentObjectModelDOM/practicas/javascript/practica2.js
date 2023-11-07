let divMonths;
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let k = 1; k < 13; k++) {
    divMonths = document.getElementById("months");
    divMonths.innerHTML = divMonths.outerHTML +  `<div class="month">
                                                        <div class='month-number'>
                                                            ${k}
                                                        </div>
                                                        <div class='month-name'>
                                                            ${months[k - 1]}
                                                        </div>
                                                    </div>`;
}