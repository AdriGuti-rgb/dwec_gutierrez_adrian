let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let r = (Math.random()*255).toFixed(0)
    let g = (Math.random()*255).toFixed(0)
    let b = (Math.random()*255).toFixed(0)
    
    document.body.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b}); `)
});