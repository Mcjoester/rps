// Scores for game
let playerScore = 0;
let computerScore = 0;

// If user selects a button, run a round
const buttons = document.querySelectorAll('#buttons button')
for (let button of buttons) {
    button.addEventListener('click', game)
}

function game() {
    const result = playRound(this.className, computerPlay())
    updateScore(result)
}

function updateScore (result) {
    const liveScore = document.querySelector('h2 span')
    liveScore.innerText = `${playerScore} - ${computerScore}`
}


// Array for computer to choose between Rock, Paper, and Scissors
let options = ["Rock", "Paper", "Scissors"];

// Function for Computer Choice 
function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

function displayMoves(playerSelection, computerSelection) {
    const playerClasses = document.querySelector('#player .image').classList
    playerClasses.remove(playerClasses.item(1))
    playerClasses.add(playerSelection)

    const cpuClasses = document.querySelector('#computer .image').classList
    cpuClasses.remove(cpuClasses.item(1))
    cpuClasses.add(computerSelection)
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

    displayMoves(playerSelection, computerSelection)
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')) {
    
    playerScore += 1
    result = 'Computer chose: ' + computerSelection + '<br><br>You chose: ' + playerSelection + 
    '<br><br> You win! ' + playerSelection + ' beats ' + computerSelection;


    if (playerScore == 5) {
        result += '<br><br>You won the game! Reload the page to play again'
        disableButtons()
    }
}
else if (playerSelection == computerSelection) {
    result = ('Computer chose: ' + computerSelection + '<br><br>You chose: ' + playerSelection + '<br><br>It\'s a tie. You both chose ' + playerSelection)
}
else {
    computerScore += 1
    result = ('Computer chose: ' + computerSelection + '<br><br>You chose: ' + playerSelection + '<br><br>You lose! ' + computerSelection + ' beats ' + playerSelection)

    if (computerScore == 5) {
        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons()
    }
}



    document.getElementById('result').innerHTML = result
    return

    
}





// Event Listeners
//buttons.forEach(button =>
//button.addEventListener('click', playRound));
//console.log(playerSelection, computerSelection);

