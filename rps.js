function getComputerChoice() {   
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock'))
        return "You win! " + playerSelection + " beats " + computerSelection;
    
    else if (playerSelection == computerSelection) {
        return "It's a tie.";
    }

    else
        return "You lose! " + computerSelection + " beats " + playerSelection;
}

const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));