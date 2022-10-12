// Scores for game
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

// Array for computer to choose between Rock, Paper, and Scissors
let options = ["rock", "paper", "scissors"];

// Function for Computer Choice 
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}


// Disable button function
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

//Function to play a round of Rock Paper Scissors 
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = "";


    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    
    playerScore += 1
    result = 'Computer chose: ' + computerSelection + '<br><br>You chose: ' + playerSelection + 
    '<br><br> You win! ' + playerSelection + ' beats ' + computerSelection + '<br><br>Player score: ' + playerScore + '<br>Computer score: ' + computerScore;

    if (playerScore == 5) {
        result += '<br><br>You won the game! Reload the page to play again'
        disableButtons()
    }
}
else if (playerSelection == computerSelection) {
    result = ('Computer chose: ' + computerSelection + '<br><br>You chose: ' + playerSelection + '<br><br>It\'s a tie. You both chose ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
}
else {
    computerScore += 1
    result = ('Computer chose: ' + computerSelection + '<br><br>You chose: ' + playerSelection + '<br><br>You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

    if (computerScore == 5) {
        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons()
    }
}

document.getElementById('result').innerHTML = result
return
}


buttons.forEach(button =>{
button.addEventListener('click', function(){
    playRound(button.value)
})
})
 












//Function for User Choice
//function getUserChoice() {
//    let userInput = prompt("Choose: Rock, Paper, or Scissors");
//    userInput = userInput.toLowerCase();
//    if (userInput === "rock" || userInput === "scissors" || userInput === "paper") {
//        return userInput;
//    } else {
//        console.log("Error, please type: rock, paper, or scissors.")
//    }
//}