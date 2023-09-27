let applePrice = prompt("¿A cuanto estaba la manzana?");
let appleKg = prompt("¿Cuantas has cogido?");
let orangePrice = prompt("¿A cuanto estaba la naranja?");
let orangeKg = prompt("¿Cuantas has cogido?");
let bananaPrice = prompt("¿A cuanto estaba el platano?");
let bananaKg = prompt("¿Cuantos has cogido?");

let totalKg = Number(appleKg) + Number(orangeKg) + Number(bananaKg);
let totalApple = appleKg * applePrice;
let totalOrange = orangeKg * orangePrice;
let totalBanana = bananaKg * bananaPrice;

confirm(`Has comprado un total de ${totalKg} kilos de fruta y te ha costado ${totalApple + totalBanana + totalOrange} euros`)