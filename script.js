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

// Scores for game
let playerScore = 0;
let computerScore = 0;


//Function to play a round of Rock Paper Scissors 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        playerScore++
        return "You win! Rock beats scissors!";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        playerScore++
        return "You win! Paper beats rock!";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        playerScore++
        return "You win! Scissors beats paper!";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        computerScore++
        return "You lose! Scissors beats paper!";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        computerScore++
        return "You lose! Rock beats scissors!";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        computerScore++
        return "You lose! Paper beats rock!";
    }
}


// Game function to run 5 rounds 
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getUserChoice();
        let computerSelection = computerPlay();
        console.log("Computer Chose: " + computerSelection + "\nYou chose: " + playerSelection);
        let returned = playRound(playerSelection, computerSelection);
        console.log(returned + "\n");
    }

    if (playerScore == computerScore) {
        console.log("Player score: " + playerScore + "\nComputer score: " + computerScore + "\n The game is a tie");

    } else if (playerScore > computerScore) {
        console.log("Player score: " + playerScore + "\nComputer score: " + computerScore + '\n You win the game!');
    } else if (computerScore > playerScore) {
        console.log("Player score: " + playerScore + "\nComputer score: " + computerScore + "\n Computer wins the game!");
    }
}

game();
