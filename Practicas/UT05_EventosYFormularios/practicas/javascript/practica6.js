let random = Math.floor(Math.random() * words.length);
let word = words[random];
let spaces = document.getElementById("spaces");
let level = 1;
let acertadas = 0;
let posibleLevels = "012345689";
let img = document.createElement("img");
let hanged = document.getElementById("hanged");
let abecedario = "abcdefghijklmnñopqrstuvwxyz";
let keyboard = document.getElementById("keyboard");

img.src =`../../img/hangman_0${level}.png`;
hanged.append(img);

word.split("")
    .forEach( item => {
        let spanWord = document.createElement("span");
        spanWord.classList.add("space");
        spanWord.dataset.id = item;
        spaces.append(spanWord);
        spanWord = document.createElement("span");
    });

abecedario.split("")
    .forEach( item => {
        let spanAbc = document.createElement("span");
        spanAbc.addEventListener("click", handleLetterHang);
        window.addEventListener("keydown", handleLetterHang);
        spanAbc.textContent = `${item}`
        spanAbc.classList.add("key");
        spanAbc.dataset.id = item;
        keyboard.append(spanAbc);
        spanAbc = document.createElement("span")
    });

function handleLetterHang (e) {
    if (e.target == document.body) {
        let letrasKeyBoard = document.getElementsByClassName("key");
        let aCambiarKeyBoard = Array.from(letrasKeyBoard)
                            .find( (item) => {
                        return e.key == item.textContent;
                    });

        if (word.includes(e.key)) {
            aCambiarKeyBoard.classList.add("succeed");
            let letrasAcertadas = document.querySelectorAll(".space")
            // word.split("")
            //     .forEach( itemWord => {
            //         Array.from(letrasAcertadas).forEach( itemSpace => {
            //             if (itemWord == itemSpace.dataset.id) {
            //                 itemSpace.textContent = itemSpace.dataset.id;
            //             }
            //         });
            //     });

            Array.from(letrasAcertadas).forEach( itemSpace => {
                if (word.includes(itemSpace.dataset.id)) {
                    itemSpace.textContent = itemSpace.dataset.id;
                    // itemSpace.textContent = e.key;
                    console.log(`Coinciden la ${itemSpace.dataset.id}`);
                    acertadas++;
                }
            });

            
            if (acertadas == word.length) {
                removeEventListener("click", handleLetterHang);
                removeEventListener("keydown", handleLetterHang)
                let msg = document.getElementById("msg")
                msg.textContent = "Has ganado";
                msg.classList.add("succeed");
            }
            
        } else {
            aCambiarKeyBoard.classList.add("fail");
            renderLevels(++level)
        }
    } else {
        let letrasMouse = document.getElementsByClassName("key");
        let id = e.explicitOriginalTarget.dataset.id;
        let aCambiarMouseKeyBoard = Array.from(letrasMouse)
                            .find( (item) => {
                        return id == item.textContent;
                    });

        if (word.includes(id)) {
            aCambiarMouseKeyBoard.classList.add("succeed");

        } else {
            aCambiarMouseKeyBoard.classList.add("fail");
            renderLevels(++level)
        }
    }
}

function renderLevels (level) {
    if (level < 10) {
        img.src =`../../img/hangman_0${level}.png`;
    } else {
        removeEventListener("click", handleLetterHang);
        removeEventListener("keydown", handleLetterHang)
        let msg = document.getElementById("msg")
        msg.textContent = "Has perdido";
        msg.classList.add("fail");
    }

    // if (posibleLevels.includes(level)) {
    //     img.src =`../../img/hangman_0${level}.png`;
    // } else {
    //     alert("No es valido el nivel");
    // }
}
