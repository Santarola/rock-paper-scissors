function getComputerChoice() {
    const VARIANTS = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * VARIANTS.length);
    const choice = VARIANTS[randomIndex];

    return choice;
}

function game (playerSelection, computerSelection) {
    
        function playRound() {

        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        
        if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You won! Rock beats Scissors";
        }

        else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "You won! Scissors beats Paper";
        }

        else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You won! Paper beats Rock";
        }

        else if (playerSelection === computerSelection) {
            return "It's a draw!"
        }

        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?", "Scissors");
        computerSelection = getComputerChoice();
        console.log(`Round ${i+1}! ${playRound()}`);
    }
}
let computerSelection;
let playerSelection;
console.log(game(playerSelection, computerSelection));