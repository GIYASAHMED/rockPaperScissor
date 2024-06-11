let playerEl = document.getElementById('player')
let computerEl = document.getElementById('computer')
let scoreEl = document.getElementById('score')
let rockEl = document.getElementById('rock')
let paperEl = document.getElementById('paper')
let scissorEl = document.getElementById('scissor')

let player = ""
let computer = ""
let result = ""


// Random number function

function randomNumber() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    
    switch (randomNum) {
        case 1: computer = "ROCK"
            break;
        case 2: computer = "PAPER"
            break;
        case 3: computer = "SCISSOR"
            break;
    }
    computerEl.innerText = computer
}

function results() {
    if (player === computer) {
        result = "MATCH DRAW"
    } else if (player === "ROCK" && computer === "PAPER") {
        result = "COMPUTER WIN"
    } else if (player === "PAPER" && computer === "ROCK") {
        result = "PLAYER WIN"
    } else if (player === "SCISSOR" && computer === "PAPER") {
        result = "PLAYER WIN"
    } else if (player === "PAPER" && computer === "SCISSOR") {
        result = "COMPUTER WIN"
    } else if (player === "ROCK" && computer === "SCISSOR") {
        result = "PLAYER WIN"
    } else if (player === "SCISSOR" && computer === "ROCK") {
        result = "COMPUTER WIN"
    }

    scoreEl.innerText = result
}



// button click event
rockEl.addEventListener('click', () => {
    player = "ROCK"
    playerEl.innerText = player;
    randomNumber()
    results()
})

paperEl.addEventListener('click', () => {
    player = "PAPER"
    playerEl.innerText = player;
    randomNumber()
    results()
})
scissorEl.addEventListener('click', () => {
    player = "SCISSOR"
    playerEl.innerText = player
    randomNumber()
    results()
})