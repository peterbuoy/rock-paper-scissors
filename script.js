let hands = ['Rock', 'Paper', 'Scissors']
let playerSelection = ''
let playerScore = 0, computerScore = 0, round = 1

const btn_rock = document.querySelector('#btn_rock');
const btn_paper = document.querySelector('#btn_paper');
const btn_scissors = document.querySelector('#btn_scissors');
const btn_reset = document.querySelector('#btn_restart')
btn_rock.addEventListener('click', () => {
	playRound('Rock', computerPlay())
});
btn_paper.addEventListener('click', () => {
	playRound('Paper', computerPlay())
});
btn_scissors.addEventListener('click', () => {
	playRound('Scissors', computerPlay())
});
btn_restart.addEventListener('click', () => {
	const restartButton = document.getElementById('btn_restart')
	const result_container = document.querySelector('#result_container')
	result_container.textContent = '';
	playerScore = 0;
	computerScore = 0;
	restartButton.disabled = true;
	const buttons = document.getElementsByClassName('button-hand');
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].disabled = false;
			}
	
});

// game()

// function game() {
// 	for (let i = 0; i < 5; i++) {
// 	 	playerSelection = prompt("Rock, Paper, Scissors?")
// 		console.log(`Round ${round++}`);
// 		computerSelection = computerPlay()
// 		console.log(playRound(playerSelection, computerSelection))
// 		console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
// 		console.log();
// 	}
// 	determineResult(playerScore, computerScore)
// }

function playRound(playerSelection, computerSelection) {
	const result_container = document.querySelector('#result_container')
	playerSelection = normalizePlayerSelection(playerSelection)
	result_container.textContent = `You chose ${playerSelection} `;
	result_container.textContent += `Computer chose ${computerSelection}`
	console.log(`You chose ${playerSelection}`);
	console.log(`Computer chose ${computerSelection}`)

	// Tie
	if (playerSelection == computerSelection) {
		const resultOutcome = document.createElement('div');
		resultOutcome.textContent = `You tied because you both chose ${playerSelection}`
		result_container.appendChild(resultOutcome);
		const resultScore = document.createElement('div');
		resultScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
		result_container.appendChild(resultScore);
	} 
	// Lose
	else if (
		(playerSelection == 'Rock' && computerSelection == 'Paper') || 
		(playerSelection == 'Paper' && computerSelection == 'Scissors') ||
		(playerSelection == 'Scissors' && computerSelection == 'Rock')
		) {
		const resultOutcome = document.createElement('div');
		resultOutcome.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
		result_container.appendChild(resultOutcome);
		computerScore++;
		const resultScore = document.createElement('div');
		resultScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
		result_container.appendChild(resultScore);
		if (computerScore == 5) {
			const winnerMessage = document.createElement('div');
			winnerMessage.textContent = `Computer won the game!`
			result_container.appendChild(winnerMessage)
			const buttons = document.getElementsByClassName('button-hand');
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].disabled = true;
			}
			const restartButton = document.getElementById('btn_restart');
			restartButton.disabled = false;
		}
		return `You lost! ${computerSelection} beats ${playerSelection}`
	} 
	// Win
	else {
		playerScore++
		const resultOutcome = document.createElement('div');
		resultOutcome.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
		result_container.appendChild(resultOutcome);
		const resultScore = document.createElement('div');
		resultScore.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`
		result_container.appendChild(resultScore);
		if (playerScore == 5) {
			const winnerMessage = document.createElement('div');
			winnerMessage.textContent = `You won the game!`
			result_container.appendChild(winnerMessage)
			const buttons = document.getElementsByClassName('button-hand');
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].disabled = true;
			}
			const restartButton = document.getElementById('btn_restart');
			restartButton.disabled = false;
		}
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