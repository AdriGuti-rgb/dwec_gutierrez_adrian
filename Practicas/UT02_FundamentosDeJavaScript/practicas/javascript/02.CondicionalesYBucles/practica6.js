let n = Number(prompt("Introduce un numero para multiplicar"));
let k = Number(prompt("Introduce cuantas veces lo quieres multiplicar"));

for (let c = 0; c <= k; c++) {
    console.log(`${n} \* ${c} = ${n * c}`);
}
