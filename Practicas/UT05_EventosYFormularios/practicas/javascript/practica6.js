let random = Math.floor(Math.random() * words.length);
let word = words[random];
let spaces = document.getElementById("spaces");
let level = 0;
let acertadas = 0;
let posibleLevels = "0123456789";
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
        window.addEventListener("keyup", handleLetterHang);
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

            Array.from(letrasAcertadas).forEach( itemSpace => {
                if (word.includes(itemSpace.dataset.id) && itemSpace.dataset.id === e.key) {
                    itemSpace.textContent = itemSpace.dataset.id;
                    acertadas++;
                }
            });            
        } else {
            aCambiarKeyBoard.classList.add("fail");
            renderLevels(++level);
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
            let letrasAcertadas = document.querySelectorAll(".space")

            Array.from(letrasAcertadas).forEach( itemSpace => {
                if (word.includes(itemSpace.dataset.id) && itemSpace.dataset.id === id) {
                    itemSpace.textContent = itemSpace.dataset.id;
                    acertadas++;
                }
            });

        } else {
            aCambiarMouseKeyBoard.classList.add("fail");
            renderLevels(++level);
        }
    }
    if (acertadas == word.length) {
        endGame(true);
    }
}

function renderLevels (level) {
    if (posibleLevels.includes(level)) {
        img.src =`../../img/hangman_0${level}.png`;
    } else {
        endGame(false);
    }   
}

function endGame (end) {
    let spanDelete = document.querySelectorAll(".key");
    Array.from(spanDelete)
        .forEach( item => item.removeEventListener("click", handleLetterHang));
    window.removeEventListener("keyup", handleLetterHang);
    let msg = document.getElementById("msg");
    end ? msg.textContent = "Has ganado" : msg.textContent = "Has perdido";
    end ? msg.classList.add("succeed") : msg.classList.add("fail");
}