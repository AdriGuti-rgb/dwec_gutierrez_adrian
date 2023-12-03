// Cronometro
let running = false;
let totalMils = 0;
let score = 0;
let interval = undefined;

// Cuadrado
let divMoving = document.createElement("div")
let divScore = document.getElementById("score");
let divTime = document.getElementById("time");
let divGameZone = document.getElementById("game-zone");

// Nombre
let playerName = document.getElementById("player-input");

// Dificultad
let divDiff = document.getElementById("diff");
let firstId = 1;
let firtsWidth = 600;
let firstHeight = 600;
let globalWidth = 600;
let globalHeiht = 600;
let dificultades = [
    {
        id: 1,
        width: 600,
        height: 600
    },
    {
        id: 2,
        width: 500,
        height: 500
    },
    {
        id: 3,
        width: 400,
        height: 400
    },
    {
        id: 4,
        width: 300,
        height: 300
    },
    {
        id: 5,
        width: 200,
        height: 200
    }
];

// Ranking
let players = [];

/*  Funciones  */

// Cronometro
function updateTime () {
    totalMils += 45;
    let milis = (totalMils % 1000).toFixed().padStart(3, "0");
    let secs = ((totalMils/1000) % 60).toFixed(0).padStart(2, "0");

    divTime.textContent = `${secs}.${milis}`;

    if (secs == 20) {
        clearInterval(interval);
        running = false;
        divTime.textContent = `20.000`;
        divScore.textContent = score;
        divMoving.remove();
        divMoving.style.backgroundColor = "#5DC1B9";
        divGameZone.style.backgroundColor = "white";
        players.push({
            nombre: playerName.value,
            playerScore: score
        })
        playerName.value = "";

        renderPlayers();
        
    }
    secs = 0;

}

function startTime () {

    if (playerName.value.trim() == "") {
        alert("¡Escribe un nombre antes de empezar la partida!");
    } else {
        if (!running) {
            interval = setInterval(updateTime, 45);
            running = true;
       }
       
       score = 0;
       divScore.textContent = score;
    
       divMoving.id = "moving";
       divMoving.style.width = `100px`;
       divMoving.style.height = `100px`;
       divMoving.style.backgroundColor = "#5DC1B9";
       divGameZone.style.backgroundColor = "white";
       divMoving.style.borderRadius = "15px";
       divMoving.style.position = "absolute";
       divMoving.style.top = "39%";
       divMoving.style.left = "45%";
       divGameZone.append(divMoving);  
       
    }    
}

function resetTime () {

    if (interval) {
        clearInterval(interval)    
    }
    score = 0;
    running = false;
    totalMils = 0;
    divTime.textContent = `0.0`;
    divMoving.style.backgroundColor = "#5DC1B9";
    divGameZone.style.backgroundColor = "white";
    divScore.textContent = score;
    if (document.getElementById("moving") != null) {
        document.getElementById("moving").remove();
        divMoving = document.createElement("div")
    }
}

// Cuadrado
function handleResizeClick (e) {

    let widthPx = Math.random() * globalWidth;
    let heightPx = Math.random() * globalHeiht;
    let leftPx = Math.random() * (window.innerWidth - widthPx - 25 - 342);
    let topPx = Math.random() * (window.innerHeight - heightPx);

    score++;
    e.target.style.width = `${widthPx}px`;
    e.target.style.height = `${heightPx}px`;
    e.target.style.top = `${topPx}px`;
    e.target.style.left = `${leftPx}px`;

    divMoving.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    divGameZone.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

// Dificultad
function handleDiffCLick (e) {

    let divSelected = document.querySelector(".selected"); 
    let diff = e.target;
    let level = e.target.textContent;
    let total = dificultades.find( item => item.id == level);

    globalHeiht = total.height;
    globalWidth = total.width;

    divSelected.classList.remove("selected");
    diff.classList.add("selected");

}

// Ranking
function renderPlayers () {
    let divRanking = document.getElementById("ranking");
    players.sort( (a, b) =>  (a.playerScore > b.playerScore)  ? -1 : 1);
    let orderPlayers = players.slice(0, 3);
    orderPlayers.forEach( (item, index) => {
            divRanking.children[index].children[0].textContent = item.nombre;
            divRanking.children[index].children[1].textContent = item.playerScore;
    });
}

/*  Listeners  */
document.getElementById("btn-start").addEventListener("click", startTime);
document.getElementById("btn-reset").addEventListener("click", resetTime); 
divMoving.addEventListener("click", handleResizeClick);
divDiff.addEventListener("click", handleDiffCLick);