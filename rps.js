let computerScore = 0; //Sets player score
let playerScore = 0; //Sets computer score

function computerPlay() {
    let answer = Math.floor((Math.random() * 3) + 1) // picks a random number from 1 to 3

    if (answer == 1) {
        return 'rock';
    }
    else if (answer == 2) {
        return 'paper';
    }

    else {
        return 'scissors';
    } //if statement to assign one of the numbers from Math.random to a string
}

function playerHand(playerChoice) { //takes player choice and makes it all lower case
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
        return playerChoice;
    } else {
            console.log('Error detected! Did you chose Rock, paper or scissors?');
    }
}

function playRound(computerSelection, playerSelection) { //compares player selection and computer selection and picks a winner
    playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return 'The Game is a draw! Try again!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return 'Rock beats scissors! You won! +1 point';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return 'Scissors beats paper! You won! +1 point';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return 'Paper beats rock! You won! +1 point';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++;
        return 'Too bad! Rock beats scissors! You lost! +1 point to the CPU!';
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        computerScore++;
        return 'Too bad! Scissors beats paper! You lost! +1 point to the CPU!';
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock'){
        computerScore++;
        return 'Too bad! Paper beats rock! You lost! +1 point to the CPU!';
    }
    else {
        return 'Oops, looks like something went wrong!';
    }

}

function game(){ //Plays a game of 5 rounds, adding to the round counter up to 5 before ending the game
    for (let roundNum = 1; roundNum<6; roundNum++);
    console.log('Round number ' + roundNum + ' ... 3. 2. 1. Throw!');

    let playerSelection = playerHand(prompt('Rock, paper or scissors?', ''));
    let computerSelection = computerPlay;
    console.log('You threw a ' + playerSelection + ', the CPU threw a ' + computerSelection);

    let round = playRound(computerSelection, playerSelection);
    console.log(round)

    let score = 'Player Score: ' + playerScore + ', CPU Score: ' + computerScore + '.';
    console.log(score)    


    console.log('Final scores are... You scored ' + playerScore + ' and the CPU scored ' + computerScore)
    if (playerScore === computerScore) {
        console.log('It was a tie!');
    }
    else if (playerScore > computerScore){
        console.log('Wow, you won! Congratulations!');
    }
    else {
        console.log('Too bad! The CPU clinched the victory. Try again next time');
    }
}

game();


