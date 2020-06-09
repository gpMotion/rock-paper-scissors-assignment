function computerPlay() {
    let answer = Math.floor((Math.random() * 3) + 1)

    if (answer == 1) {
        return 'rock';
    }
    else if (answer == 2) {
        return 'paper';
    }

    else {
        return 'scissors';
    }
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection)
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playerSelection, computerSelection)