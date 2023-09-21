function getComputerChoice() {
    const VARIANTS = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * VARIANTS.length);
    const choice = VARIANTS[randomIndex];

    return choice;
}

function game(playerSelection, computerSelection) {

        computerSelection = getComputerChoice();
        // console.log(`Round ${i+1}! ${game()}`);

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

const btnRock = document.getElementById('rock');
const btnScissors = document.getElementById('scissors');
const btnPaper = document.getElementById('paper');

const results = document.querySelector('#results');

const para = document.createElement('p');
results.appendChild(para);

let computerSelection;
let playerSelection;

btnRock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    para.textContent = game(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    para.textContent = game(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    para.textContent = game(playerSelection, computerSelection);
});