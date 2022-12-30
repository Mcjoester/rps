// Scores for game
let playerScore = 0;
let computerScore = 0;

// If user selects a button, run a round
const buttons = document.querySelectorAll('#buttons button')
for (let button of buttons) {
    button.addEventListener('click', game)
}

// Function to run game
function game() {
    const result = playRound(this.className, computerPlay())
    updateScore(result)
}

// Function to end game
function endGame() {
    for (let button of buttons) {
        button.removeEventListener('click', game)
    }
    setTimeout(openModal, 500)
}

// Function to update score
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


// Function to display moves
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

function displayResult (result, msg) {
    const display = document.querySelector('#result')
    display.innerText = msg

    const classes = display.classList
    classes.remove(classes.item(0))
    classes.add(result)
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
    displayResult('win', 'You win!')
    result = "You win!";
    


    if (playerScore == 5) {
        endGame()
    }
}
else if (playerSelection == computerSelection) {
    displayResult('tie', 'It\'s a tie!')
    return 'tie'
}
else {
    computerScore += 1
    displayResult('lose', 'You lose!')
    result = "You lose!"

    if (computerScore == 5) {
        endGame()
    }
}
    document.getElementById('result').innerHTML = result
    return
}

function openModal() {
    const modal = document.querySelector('.modal')
    const modalContent = document.querySelector('.modal-content')

    showModal(modal, modalContent)
    document.querySelector('#final-result').append((playerScore > computerScore) ? 'won!' : 'lost!')
    document.querySelector('#restart-btn').addEventListener('click', () => {
        location.reload()
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('visible')
    })
    for (let button of buttons) {
        button.addEventListener ('click', (e) => {
            e.stopPropagation()
            showModal(modal,modalContent)
        })
    }
}

function showModal(modal, modalContent) {
    modal.classList.add('visible')
    modalContent.classList.add('visible')
}




// Event Listeners
//buttons.forEach(button =>
//button.addEventListener('click', playRound));
//console.log(playerSelection, computerSelection);

