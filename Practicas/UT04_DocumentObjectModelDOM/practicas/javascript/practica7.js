// let button = document.querySelector("button");

// button.addEventListener("click", () => {
//     let imgs = document.querySelectorAll("[class='img']");
//     let len = imgs.length;
//     console.log(len);
//     foto5 = imgs[4]; 
//     imgs.forEach( (item, index) => {
//         console.log(len-index);
//         if (index == 0) {
//             item.setAttribute("src", `${foto5.getAttribute("src")}`);    
//         } else {
//             // console.log(len-index);
//             item.setAttribute("src", `${imgs[len - index].getAttribute("src")}`);
//         }
//         // console.log(item.getAttribute("src"));
//     });

//     // imgs[4].setAttribute("src", `${imgs[3].getAttribute("src")}`);
//     // imgs[3].setAttribute("src", `${imgs[2].getAttribute("src")}`);
//     // imgs[2].setAttribute("src", `${imgs[1].getAttribute("src")}`);
//     // imgs[1].setAttribute("src", `${imgs[0].getAttribute("src")}`);
//     // imgs[0].setAttribute("src", `${foto5.getAttribute("src")}`)
    
// });

let button = document.querySelector("button");

button.addEventListener("click", () => {
    let imgs = document.querySelectorAll(".img");
    let len = imgs.length;


    let foto5 = imgs[4].getAttribute("src");

    imgs.forEach((item, index) => {
        if (index === 0) {
            item.setAttribute("src", foto5);
        } else {
            console.log(index);
            console.log(len - 1);

            item.setAttribute("src", imgs[index - 1].getAttribute("src"));
        }
    });
});
