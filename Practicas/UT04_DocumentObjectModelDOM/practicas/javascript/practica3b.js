let months = "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre";
let originalDiv = document.getElementById("months");
let div = document.createElement("div");
let divNumber = document.createElement("div");
let divName = document.createElement("div");

let a = months.split(" ")
              .forEach( (item, index) => {
                div.classList.add("month");
                divNumber.classList.add("month-number");
                divName.classList.add("month-name");
                
                divNumber.textContent = index + 1;
                divName.textContent = item;
            
                originalDiv.append(div);
                div.append(divNumber);
                div.append(divName);
                // div.append(divNumber, divName);
            
                div = document.createElement("div");
                divNumber = document.createElement("div");
                divName = document.createElement("div");                
              });
