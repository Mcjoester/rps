// Array for computer to choose between Rock, Paper, and Scissors
let options = ["rock", "paper", "scissors"];

// Function for Computer Choice 
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

//Function for User Choice
function getUserChoice() {
    let userInput = prompt("Choose: Rock, Paper, or Scissors");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "scissors" || userInput === "paper") {
        return userInput;
    } else {
        console.log("Error, please type: rock, paper, or scissors.")
    }
}

//Function to play a round of Rock Paper Scissors 
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


const playerSelection = getUserChoice();
const computerSelection = computerPlay();
console.log(`You chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));