let button = document.querySelector("button");

button.addEventListener("click", () => {
    let imgs = document.querySelectorAll("[class='img']");

    let img = document.querySelector('.images');
    let imagenes = img.querySelectorAll('img');
    img.prepend(imagenes[4]);
    
});
