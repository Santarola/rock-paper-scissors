function getComputerChoice() {
    const VARIANTS = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * VARIANTS.length);
    const choice = VARIANTS[randomIndex];

    return choice;
}

function game(playerSelection, computerSelection) {
            computerSelection = getComputerChoice();
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

const paraResults = document.createElement('p');
results.appendChild(paraResults);

const scoreHeader = document.querySelector('#scoreHeader');

let computerSelection;
let playerSelection;
let search;
let counter = 0;
let scoreComp = 0;
let scorePlayer = 0;

btnRock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = getComputerChoice();
    paraResults.textContent = game(playerSelection, computerSelection);

    counter += 1;

    if (paraResults.textContent.search("won") > -1) {
        scorePlayer += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    else if (paraResults.textContent.search("draw") > -1) {
        scorePlayer += 1;
        scoreComp += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    else {
        scoreComp += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    if (counter === 5) {
        if (scorePlayer > scoreComp) {
            scoreHeader.textContent = "You won! Grats!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }

        else if (scorePlayer === scoreComp) {
            scoreHeader.textContent = "It's draw!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }

        else {
            scoreHeader.textContent = "You lose!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }
    }
});

btnScissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = getComputerChoice();
    paraResults.textContent = game(playerSelection, computerSelection, scoreComp, scorePlayer);

    counter += 1;

    if (paraResults.textContent.search("won") > -1) {
        scorePlayer += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    else if (paraResults.textContent.search("draw") > -1) {
        scorePlayer += 1;
        scoreComp += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    else {
        scoreComp += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    if (counter === 5) {
        if (scorePlayer > scoreComp) {
            scoreHeader.textContent = "You won! Grats!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }

        else if (scorePlayer === scoreComp) {
            scoreHeader.textContent = "It's draw!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }

        else {
            scoreHeader.textContent = "You lose!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }
    }
});

btnPaper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = getComputerChoice();
    paraResults.textContent = game(playerSelection, computerSelection, scoreComp, scorePlayer);

    counter += 1;

    if (paraResults.textContent.search("won") > -1) {
        scorePlayer += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    else if (paraResults.textContent.search("draw") > -1) {
        scorePlayer += 1;
        scoreComp += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    else {
        scoreComp += 1;
        scoreHeader.textContent = `Score: You: ${scorePlayer} Computer: ${scoreComp}`;
    }

    if (counter === 5) {
        if (scorePlayer > scoreComp) {
            scoreHeader.textContent = "You won! Grats!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }

        else if (scorePlayer === scoreComp) {
            scoreHeader.textContent = "It's draw!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }

        else {
            scoreHeader.textContent = "You lose!";
            counter = 0;
            scoreComp = 0;
            scorePlayer = 0;
        }
    }
});