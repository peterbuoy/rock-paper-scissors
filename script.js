let hands = ['Rock', 'Paper', 'Scissors']
let playerScore = 0, computerScore = 0

const ROCK_BUTTON = document.querySelector('#btn_rock');
const PAPER_BUTTON = document.querySelector('#btn_paper');
const SCISSORS_BUTTON = document.querySelector('#btn_scissors');
const RESTART_BUTTON = document.getElementById('btn_restart')
const RESULT_CONTAINER = document.querySelector('#result_container')
const BUTTON_HAND = document.getElementsByClassName('button-hand');

ROCK_BUTTON.addEventListener('click', () => {
	playRound('Rock', computerPlay())
});
PAPER_BUTTON.addEventListener('click', () => {
	playRound('Paper', computerPlay())
});
SCISSORS_BUTTON.addEventListener('click', () => {
	playRound('Scissors', computerPlay())
});
btn_restart.addEventListener('click', () => {
	RESULT_CONTAINER.textContent = '';
	playerScore = 0;
	computerScore = 0;
	RESTART_BUTTON.disabled = true;
			for (let i = 0; i < BUTTON_HAND.length; i++) {
				BUTTON_HAND[i].disabled = false;
			}
});

function checkWinningScore(playerScore, computerScore) {
	if (playerScore == 5 || computerScore == 5) {
		const WINNER_MESSAGE = document.createElement('div');
		WINNER_MESSAGE.style.color = 'red';
		if (playerScore == 5) WINNER_MESSAGE.textContent = `Player won the game!`
		if (computerScore == 5) WINNER_MESSAGE.textContent = `Computer won the game!`
		for (let i = 0; i < BUTTON_HAND.length; i++) {
			BUTTON_HAND[i].disabled = true;
		}
		RESULT_CONTAINER.appendChild(WINNER_MESSAGE)
		RESTART_BUTTON.disabled = false;
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = normalizePlayerSelection(playerSelection)
	const RESULT_OUTCOME = document.createElement('div');
	const RESULT_SCORE = document.createElement('div');
	RESULT_CONTAINER.textContent = `You chose ${playerSelection} `;
	RESULT_CONTAINER.textContent += `Computer chose ${computerSelection}`
	
	// Tie
	if (playerSelection == computerSelection) {
		RESULT_OUTCOME.textContent = `It's a tie!`
		RESULT_SCORE.textContent = `Player: ${playerScore} Computer: ${computerScore}`
		RESULT_CONTAINER.appendChild(RESULT_OUTCOME);
		RESULT_CONTAINER.appendChild(RESULT_SCORE);
	} 
	// Lose
	else if (
		(playerSelection == 'Rock' && computerSelection == 'Paper') || 
		(playerSelection == 'Paper' && computerSelection == 'Scissors') ||
		(playerSelection == 'Scissors' && computerSelection == 'Rock')
		) {
		computerScore++;
		RESULT_OUTCOME.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
		RESULT_SCORE.textContent = `Player: ${playerScore} Computer: ${computerScore}`
		RESULT_CONTAINER.appendChild(RESULT_OUTCOME);
		RESULT_CONTAINER.appendChild(RESULT_SCORE);
		checkWinningScore(playerScore, computerScore);
		return `You lost! ${computerSelection} beats ${playerSelection}`
	} 
	// Win
	else {
		playerScore++
		RESULT_OUTCOME.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
		RESULT_SCORE.textContent = `Player: ${playerScore} Computer: ${computerScore}`
		RESULT_CONTAINER.appendChild(RESULT_OUTCOME);
		RESULT_CONTAINER.appendChild(RESULT_SCORE);
		checkWinningScore(playerScore, computerScore);
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
// hello
function computerPlay() {
	///hello
	/* returns strings*/
	return hands[Math.floor(Math.random() * hands.length)]
}

// transforms user input into proper case (first capitalized, rest lowercase)
function normalizePlayerSelection(playerSelection) {
	return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}
