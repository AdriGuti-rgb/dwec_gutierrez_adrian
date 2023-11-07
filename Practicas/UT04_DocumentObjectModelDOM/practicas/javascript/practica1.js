let divNumbers;

for (let k = 1; k < 31; k++) {
    divNumbers = document.getElementById("numbers");
    divNumbers.innerHTML = divNumbers.outerHTML +  `<div class='number'>${k}</div>`;
    console.log(divNumbers);
}