let score = 0
let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {   
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let valid = false;
    while (valid == false){
        playerSelection = prompt("Rock, paper or scissors?");
        if (playerSelection == null) {
            continue;
        }
        playerSelection = playerSelection.toLowerCase();
        if (choices.includes(playerSelection)) {
            valid = true;
            return playerSelection;
        }
    }
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        score++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    
    else if (playerSelection == computerSelection) {
        return "It's a tie.";
    }

    else {
        score--;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Game over");
    if (score > 0) {
        return "Winner is the player!";
    }
    else if (score < 0) {
        return "Winner is the computer";
    }
    else
        return "There is no winner somehow...";
}
game();