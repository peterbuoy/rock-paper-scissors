let hands = ['Rock', 'Paper', 'Scissors']
let playerSelection = ''
let playerScore = 0, computerScore = 0, round = 1
game()

function game() {
	for (let i = 0; i < 5; i++) {
	 	playerSelection = prompt("Rock, Paper, Scissors?")
		console.log(`Round ${round++}`);
		computerSelection = computerPlay()
		console.log(playRound(playerSelection, computerSelection))
		console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
		console.log();
	}
	determineResult(playerScore, computerScore)
}

function playRound(playerSelection, computerSelection) {
	playerSelection = normalizePlayerSelection(playerSelection)
	console.log(`You chose ${playerSelection}`);
	console.log(`Computer chose ${computerSelection}`)

	if (playerSelection == computerSelection) {
		return `You tied because you both chose ${playerSelection}`
	} 
	else if (
		(playerSelection == 'Rock' && computerSelection == 'Paper') || 
		(playerSelection == 'Paper' && computerSelection == 'Scissors') ||
		(playerSelection == 'Scissors' && computerSelection == 'Rock')
		) {
		computerScore++
		return `You lost! ${computerSelection} beats ${playerSelection}`
	} 
	else {
		playerScore++
		return `You won! ${playerSelection} beats ${computerSelection}`
	}
}

function determineResult(playerScore, computerScore) {
	if (playerScore == computerScore) {
		console.log(`It's a tie!`);
	}
	else if (playerScore > computerScore) {
		console.log(`Player wins! ${playerScore} to ${computerScore}`)
	}
	else {
		console.log(`Computer wins! ${computerScore} to ${playerScore}`);
	}
}

function computerPlay() {
	return hands[Math.floor(Math.random() * hands.length)]
}

// transforms user input into proper case (first capitalized, rest lowercase)
function normalizePlayerSelection(playerSelection) {
	return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function loseMessage(playerSelection, computerSelection) {
	return `You lost! ${computerSelection} beats ${playerSelection}`
}

function winMessage(playerSelection, computerSelection) {
	return `You win! ${playerSelection} beats ${computerSelection}`
}