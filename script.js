function getComputerChoice () {
    const VARIANTS = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * VARIANTS.length);
    const choice = VARIANTS[randomIndex];

    return choice;
}

