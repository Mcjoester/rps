// Array for computer to choose between Rock, Paper, and Scissors
let options = ["rock", "paper", "scissors"];

// Function for computer choice 
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You win! Rock beats scissors!";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You win! Paper beats rock!";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You win! Scissors beats paper!";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You lose! Scissors beats paper!";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You lose! Rock beats scissors!";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You lose! Paper beats rock!";
    }
}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(`You chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));